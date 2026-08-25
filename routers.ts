import { TRPCError } from "@trpc/server";
import { randomUUID } from "node:crypto";
import { and, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { aiConversations, aiMessages, dnsRecords, dnsSettings, domains, phoneCalls, phoneContacts, phoneMessages, recordTypes, tlds, zones } from "../drizzle/schema";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { canUserManageConversation, getAccessibleDomain, getConversationById, getDb, getDashboardStats, getDomainById, getPublicDomainByName, getRecordById, getSettingsByDomainId, getUserByOpenId, getZoneByDomainId, listConversationsForUser, listDomainsForUser, listMessagesByConversationId, listPhoneCallsForUser, listPhoneContactsForUser, listPhoneMessagesForUser, listRecordsByZoneId, listTlds, upsertUser } from "./db";
import { normalizePublicHostname } from "../shared/publicDomain";
import { parseVoiceCommand } from "../shared/voiceCommands";
import { invokeLLM, listLLMModels, type Message as LlmMessage, type Tool } from "./_core/llm";
import { transcribeAudio } from "./_core/voiceTranscription";
import { storagePut } from "./storage";
import { phoneProviderStatus, requestCall, requestText } from "./phoneProvider";

const recordInput = z.object({
  zoneId: z.number().int().positive(),
  name: z.string().min(1).max(253),
  type: z.enum(recordTypes),
  value: z.string().min(1).max(2048),
  ttl: z.number().int().min(0).max(2147483647).default(3600),
  priority: z.number().int().min(0).max(65535).optional().nullable(),
  weight: z.number().int().min(0).max(65535).optional().nullable(),
  port: z.number().int().min(0).max(65535).optional().nullable(),
  flags: z.number().int().min(0).max(255).optional().nullable(),
  tag: z.string().max(64).optional().nullable(),
  order: z.number().int().min(0).max(65535).optional().nullable(),
  preference: z.number().int().min(0).max(65535).optional().nullable(),
});

export function isValidDomainName(name: string) {
  return /^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(name.trim().toLowerCase());
}

export function extractTld(name: string) {
  return `.${name.trim().toLowerCase().split(".").pop()}`;
}

export const PRIVATE_TLD_SUFFIXES = [".bonds"] as const;
export function isPrivateTld(tld: string) {
  return PRIVATE_TLD_SUFFIXES.includes(tld as (typeof PRIVATE_TLD_SUFFIXES)[number]);
}

const domainInput = z.object({
  name: z.string().trim().toLowerCase().refine(isValidDomainName, "Enter a valid fully-qualified domain name."),
  status: z.enum(["active", "expired", "pending"]).default("active"),
  registrar: z.string().max(160).optional().nullable(),
  expirationDate: z.coerce.date().optional().nullable(),
});

async function requireDomain(domainId: number, user: NonNullable<Parameters<typeof getAccessibleDomain>[1]>, guestKey?: string | null) {
  const domain = await getAccessibleDomain(domainId, user, guestKey);
  if (!domain) throw new TRPCError({ code: "FORBIDDEN", message: "You do not have access to this domain." });
  return domain;
}

async function requireZone(zoneId: number, user: NonNullable<Parameters<typeof getAccessibleDomain>[1]>, guestKey?: string | null) {
  const db = await getDb();
  if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
  const zone = (await db.select().from(zones).where(eq(zones.id, zoneId)).limit(1))[0];
  if (!zone) throw new TRPCError({ code: "NOT_FOUND", message: "Zone not found." });
  await requireDomain(zone.domainId, user, guestKey);
  return zone;
}

export function filterLookupRecords<T extends { name: string; type: string }>(records: T[], name: string, type?: string) {
  return records.filter(record => record.name === name && (!type || record.type === type));
}

export function validateRecordPayload(record: { type: string; value: string; priority?: number | null; weight?: number | null; port?: number | null; flags?: number | null; tag?: string | null; order?: number | null; preference?: number | null }) {
  const required: Record<string, Array<keyof typeof record>> = {
    MX: ["priority"], SRV: ["priority", "weight", "port"], CAA: ["flags", "tag"],
    TLSA: ["priority", "weight", "port"], CERT: ["priority", "preference", "order"],
    SMIMEA: ["priority", "weight", "port"], SSHFP: ["preference", "order"], DNSKEY: ["flags", "priority", "order"],
  };
  for (const field of required[record.type] ?? []) if (record[field] === undefined || record[field] === null || record[field] === "") throw new TRPCError({ code: "BAD_REQUEST", message: `${record.type} requires ${String(field)}.` });
  if (record.type === "CAA" && !["issue", "issuewild", "iodef"].includes(record.tag ?? "")) throw new TRPCError({ code: "BAD_REQUEST", message: "CAA tag must be issue, issuewild, or iodef." });
  return true;
}

function formatRecordValue(record: typeof dnsRecords.$inferSelect) {
  if (record.type === "MX") return `${record.priority} ${record.value}`;
  if (record.type === "SRV") return `${record.priority} ${record.weight} ${record.port} ${record.value}`;
  if (record.type === "CAA") return `${record.flags} ${record.tag} \"${record.value.replaceAll('\\"', '\\\"')}\"`;
  if (record.type === "TLSA" || record.type === "SMIMEA") return `${record.priority} ${record.weight} ${record.port} ${record.value}`;
  if (record.type === "CERT") return `${record.priority} ${record.preference} ${record.order} ${record.value}`;
  if (record.type === "SSHFP") return `${record.preference} ${record.order} ${record.value}`;
  if (record.type === "DNSKEY") return `${record.flags} ${record.priority} ${record.order} ${record.value}`;
  if (record.type === "TXT") return `\"${record.value.replaceAll('\\"', '\\\"')}\"`;
  return record.value;
}

export function buildZoneFile(domain: typeof domains.$inferSelect, zone: typeof zones.$inferSelect, settings: typeof dnsSettings.$inferSelect | undefined, records: (typeof dnsRecords.$inferSelect)[]) {
  const origin = domain.name.endsWith(".") ? domain.name : `${domain.name}.`;
  const lines = [
    `$ORIGIN ${origin}`,
    `$TTL ${settings?.defaultTtl ?? zone.minimumTtl}`,
    `@ IN SOA ${zone.primaryNameserver} ${zone.adminEmail} (`,
    `  ${zone.serial} ; serial`,
    `  ${zone.refresh} ; refresh`,
    `  ${zone.retry} ; retry`,
    `  ${zone.expire} ; expire`,
    `  ${zone.minimumTtl} ; minimum`,
    `)`,
    ...(settings?.authoritativeNameservers?.split(/\r?\n|,/).map(value => value.trim()).filter(Boolean) ?? [zone.primaryNameserver]).map(nameserver => `${origin} IN NS ${nameserver}`),
  ];
  for (const record of records) {
    const owner = record.name === "@" || record.name === domain.name ? "@" : record.name;
    const attributes = record.type === "MX" || record.type === "SRV" || record.type === "CAA" || record.type === "TLSA" || record.type === "CERT" || record.type === "SMIMEA" || record.type === "SSHFP" || record.type === "DNSKEY" ? formatRecordValue(record) : formatRecordValue(record);
    lines.push(`${owner} ${record.ttl} IN ${record.type} ${attributes}`);
  }
  return lines.join("\n") + "\n";
}

const aiTools: Tool[] = [
  { type: "function", function: { name: "get_workspace_overview", description: "Summarize the guest or authenticated Bond Studio workspace, including domains and DNS record counts.", parameters: { type: "object", properties: {}, additionalProperties: false } } },
  { type: "function", function: { name: "list_domains", description: "List domains visible in the current Bond Studio workspace.", parameters: { type: "object", properties: { search: { type: "string" } }, additionalProperties: false } } },
  { type: "function", function: { name: "inspect_domain_dns", description: "Inspect the zone, settings, and records for an accessible domain by id.", parameters: { type: "object", properties: { domainId: { type: "number" } }, required: ["domainId"], additionalProperties: false } } },
  { type: "function", function: { name: "lookup_dns_record", description: "Look up stored DNS records for an accessible domain by name and optional type.", parameters: { type: "object", properties: { domainId: { type: "number" }, name: { type: "string" }, type: { type: "string", enum: [...recordTypes] } }, required: ["domainId", "name"], additionalProperties: false } } },
];

async function runAiTool(name: string, args: Record<string, unknown>, user: NonNullable<Parameters<typeof getAccessibleDomain>[1]>, guestKey?: string | null) {
  if (name === "get_workspace_overview") return getDashboardStats(user, guestKey);
  if (name === "list_domains") return listDomainsForUser(user, typeof args.search === "string" ? args.search : undefined, guestKey);
  if (name === "inspect_domain_dns") {
    const domainId = Number(args.domainId);
    const domain = await requireDomain(domainId, user, guestKey);
    const zone = await getZoneByDomainId(domain.id);
    return { domain, zone, settings: await getSettingsByDomainId(domain.id), records: zone ? await listRecordsByZoneId(zone.id) : [] };
  }
  if (name === "lookup_dns_record") {
    const domainId = Number(args.domainId);
    const domain = await requireDomain(domainId, user, guestKey);
    const zone = await getZoneByDomainId(domain.id);
    if (!zone) return [];
    const records = await listRecordsByZoneId(zone.id);
    return filterLookupRecords(records, String(args.name), typeof args.type === "string" ? args.type : undefined);
  }
  throw new TRPCError({ code: "BAD_REQUEST", message: `Unknown AI tool: ${name}` });
}

function aiControls(model: string | undefined, level: "minimal" | "low" | "medium" | "high") {
  if (!model || model.startsWith("gpt-")) return { reasoning: { effort: level } };
  if (model.startsWith("claude-")) return { thinking: { type: "enabled", budget_tokens: level === "high" ? 4096 : level === "medium" ? 3072 : 2048 } };
  return {};
}

async function updateAiExecution(db: NonNullable<Awaited<ReturnType<typeof getDb>>>, conversationId: number, patch: Partial<typeof aiConversations.$inferInsert>) {
  await db.update(aiConversations).set(patch).where(eq(aiConversations.id, conversationId));
}

async function invokeTracked(db: NonNullable<Awaited<ReturnType<typeof getDb>>>, conversationId: number, params: Parameters<typeof invokeLLM>[0]) {
  try {
    return await invokeLLM(params);
  } catch (error) {
    await updateAiExecution(db, conversationId, { executionStatus: "failed", executionStep: "Run failed", executionProgress: 0, executionError: error instanceof Error ? error.message : "Model request failed", executionCompletedAt: new Date() });
    throw error;
  }
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  voice: router({
    routeCommand: protectedProcedure.input(z.object({ transcript: z.string().max(4000) })).mutation(async ({ input }) => parseVoiceCommand(input.transcript)),
    transcribe: protectedProcedure.input(z.object({ audioBase64: z.string().min(1).max(24000000), mimeType: z.enum(["audio/webm", "audio/mp3", "audio/mpeg", "audio/wav", "audio/ogg", "audio/mp4"]), language: z.string().length(2).optional() })).mutation(async ({ ctx, input }) => {
      const audio = Buffer.from(input.audioBase64, "base64");
      if (!audio.length || audio.length > 16 * 1024 * 1024) throw new TRPCError({ code: "BAD_REQUEST", message: "Audio must be between 1 byte and 16 MB." });
      const stored = await storagePut(`voice/${ctx.user.id === 0 ? ctx.guestKey ?? "guest" : ctx.user.id}/${Date.now()}.${input.mimeType.split("/")[1]}`, audio, input.mimeType);
      const origin = `${ctx.req.protocol}://${ctx.req.get("host")}`;
      const result = await transcribeAudio({ audioUrl: new URL(stored.url, origin).toString(), language: input.language, prompt: "Transcribe the user's spoken request for Bonds Studio AI Mode." });
      if ("error" in result) throw new TRPCError({ code: "BAD_REQUEST", message: result.error, cause: result });
      return { text: result.text, language: result.language, duration: result.duration, segments: result.segments };
    }),
  }),
  ai: router({
    models: protectedProcedure.query(async () => {
      const result = await listLLMModels();
      return result.data.map(model => ({ id: model.id, name: model.id, ownedBy: model.owned_by }));
    }),
    conversations: protectedProcedure.query(({ ctx }) => listConversationsForUser(ctx.user, ctx.guestKey)),
    createConversation: protectedProcedure.input(z.object({ title: z.string().trim().min(1).max(160).optional(), model: z.string().trim().min(1).max(128).optional(), reasoningLevel: z.enum(["minimal", "low", "medium", "high"]).default("low") })).mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
      const values = { ownerId: ctx.user.id, guestKey: ctx.user.id === 0 ? ctx.guestKey : null, title: input.title ?? "New conversation", model: input.model ?? null, reasoningLevel: input.reasoningLevel };
      await db.insert(aiConversations).values(values);
      const rows = await db.select().from(aiConversations).where(and(eq(aiConversations.ownerId, ctx.user.id), ctx.user.id === 0 ? eq(aiConversations.guestKey, ctx.guestKey ?? "") : eq(aiConversations.ownerId, ctx.user.id))).orderBy(sql`${aiConversations.id} DESC`).limit(1);
      if (!rows[0]) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Conversation creation failed." });
      return rows[0];
    }),
    getConversation: protectedProcedure.input(z.object({ id: z.number().int().positive() })).query(async ({ ctx, input }) => {
      const conversation = await getConversationById(input.id);
      if (!conversation || !canUserManageConversation(conversation, ctx.user, ctx.guestKey)) throw new TRPCError({ code: "FORBIDDEN", message: "Conversation is not accessible from this workspace." });
      return { conversation, messages: await listMessagesByConversationId(input.id) };
    }),
    deleteConversation: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
      const conversation = await getConversationById(input.id);
      if (!conversation || !canUserManageConversation(conversation, ctx.user, ctx.guestKey)) throw new TRPCError({ code: "FORBIDDEN", message: "Conversation is not accessible from this workspace." });
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
      await db.delete(aiMessages).where(eq(aiMessages.conversationId, input.id));
      await db.delete(aiConversations).where(eq(aiConversations.id, input.id));
      return { success: true } as const;
    }),
    send: protectedProcedure.input(z.object({ conversationId: z.number().int().positive(), content: z.string().trim().min(1).max(12000), model: z.string().trim().min(1).max(128).optional(), reasoningLevel: z.enum(["minimal", "low", "medium", "high"]).optional(), source: z.enum(["typed", "voice"]).default("typed") })).mutation(async ({ ctx, input }) => {
      const conversation = await getConversationById(input.conversationId);
      if (!conversation || !canUserManageConversation(conversation, ctx.user, ctx.guestKey)) throw new TRPCError({ code: "FORBIDDEN", message: "Conversation is not accessible from this workspace." });
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
      const messages = await listMessagesByConversationId(input.conversationId);
      await db.insert(aiMessages).values({ conversationId: input.conversationId, role: "user", content: input.content });
      const model = input.model ?? conversation.model ?? undefined;
      const reasoningLevel = input.reasoningLevel ?? conversation.reasoningLevel;
      const runId = randomUUID();
      await updateAiExecution(db, input.conversationId, { model: model ?? null, reasoningLevel, title: conversation.title === "New conversation" ? input.content.slice(0, 60) : conversation.title, executionStatus: "planning", executionStep: "Planning request", executionProgress: 10, executionRunId: runId, executionSource: input.source, executionInput: input.content, executionError: null, executionStartedAt: new Date(), executionCompletedAt: null });
      const contextMessages = messages.filter(message => message.role === "user" || message.role === "assistant");
      const recentMessages = contextMessages.slice(-24);
      const contextNote = contextMessages.length > recentMessages.length
        ? "Earlier conversation messages were compacted out of this request; rely on the current task and the recent context."
        : "";
      const promptMessages: LlmMessage[] = [
        { role: "system", content: `You are Bonds Studio AI, a high-performance project agent. Decompose complex requests into clear phases, identify dependencies, use independent read-only workspace tools in parallel when possible, and produce a concise execution plan before detailed output. Be precise, transparent, and action-oriented. You can inspect workspace and DNS data through read-only tools. Never claim to have changed data unless a tool confirms it. Explain assumptions and propose next steps when a request requires an unavailable capability. ${contextNote}` },
        ...recentMessages.map(message => ({ role: message.role, content: message.content } as LlmMessage)),
        { role: "user", content: input.content },
      ];
      await updateAiExecution(db, input.conversationId, { executionStatus: "inspecting", executionStep: "Inspecting workspace context", executionProgress: 25 });
      let response = await invokeTracked(db, input.conversationId, { model, messages: promptMessages, tools: aiTools, toolChoice: "auto", ...aiControls(model, reasoningLevel), maxTokens: 4000 });
      let assistantMessage = response.choices[0]?.message;
      let agentMessages: LlmMessage[] = promptMessages;
      const activity: Array<{ name: string; status: "completed" | "failed"; result?: unknown }> = [];
      let rounds = 0;
      while ((assistantMessage?.tool_calls?.length ?? 0) > 0 && rounds < 3) {
        rounds += 1;
        const toolCalls = (assistantMessage?.tool_calls ?? []).slice(0, 6);
        const toolMessages: LlmMessage[] = [
          ...agentMessages,
          { role: "assistant", content: typeof assistantMessage?.content === "string" ? assistantMessage.content : "", tool_calls: toolCalls },
        ];
        await updateAiExecution(db, input.conversationId, { executionStatus: "inspecting", executionStep: `Running ${toolCalls.length} workspace tool${toolCalls.length === 1 ? "" : "s"}`, executionProgress: 45 });
        const results = await Promise.all(toolCalls.map(async call => {
          try {
            return { call, status: "completed" as const, result: await runAiTool(call.function.name, JSON.parse(call.function.arguments || "{}"), ctx.user, ctx.guestKey) };
          } catch (error) {
            return { call, status: "failed" as const, result: { error: error instanceof Error ? error.message : "Tool failed" } };
          }
        }));
        for (const { call, status, result } of results) {
          activity.push({ name: call.function.name, status, result });
          await db.insert(aiMessages).values({ conversationId: input.conversationId, role: "tool", content: JSON.stringify(result), toolName: call.function.name, toolStatus: status });
          toolMessages.push({ role: "tool", content: JSON.stringify(result), name: call.function.name, tool_call_id: call.id });
        }
        agentMessages = toolMessages;
        await updateAiExecution(db, input.conversationId, { executionStatus: "synthesizing", executionStep: "Synthesizing tool results", executionProgress: Math.min(80, 50 + rounds * 10) });
        response = await invokeTracked(db, input.conversationId, { model, messages: agentMessages, tools: aiTools, toolChoice: "auto", ...aiControls(model, reasoningLevel), maxTokens: 4000 });
        assistantMessage = response.choices[0]?.message;
      }
      await updateAiExecution(db, input.conversationId, { executionStatus: "reporting", executionStep: "Preparing final report", executionProgress: 90 });
      const content = typeof assistantMessage?.content === "string" ? assistantMessage.content : "I could not produce a text response.";
      await db.insert(aiMessages).values({ conversationId: input.conversationId, role: "assistant", content });
      await updateAiExecution(db, input.conversationId, { executionStatus: "completed", executionStep: "Run complete", executionProgress: 100, executionCompletedAt: new Date(), executionError: null });
      return { content, model: response.model, usage: response.usage ?? null, activity, rounds, runId };
    }),
  }),
  phone: router({
    status: protectedProcedure.query(() => phoneProviderStatus()),
    contacts: protectedProcedure.query(({ ctx }) => listPhoneContactsForUser(ctx.user, ctx.guestKey)),
    calls: protectedProcedure.query(({ ctx }) => listPhoneCallsForUser(ctx.user, ctx.guestKey)),
    messages: protectedProcedure.query(({ ctx }) => listPhoneMessagesForUser(ctx.user, ctx.guestKey)),
    createContact: protectedProcedure.input(z.object({ name: z.string().trim().min(1).max(160), phoneNumber: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/, "Use an international phone number, for example +15551234567."), email: z.string().email().max(320).optional().nullable(), notes: z.string().max(2000).optional().nullable(), favorite: z.boolean().optional() })).mutation(async ({ ctx, input }) => {
      const db = await getDb(); if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
      const result = await db.insert(phoneContacts).values({ ownerId: ctx.user.id, guestKey: ctx.guestKey ?? null, name: input.name, phoneNumber: input.phoneNumber, email: input.email ?? null, notes: input.notes ?? null, favorite: input.favorite ? 1 : 0 });
      return (await db.select().from(phoneContacts).where(eq(phoneContacts.id, Number(result[0].insertId))).limit(1))[0];
    }),
    updateContact: protectedProcedure.input(z.object({ id: z.number().int().positive(), name: z.string().trim().min(1).max(160), phoneNumber: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/), email: z.string().email().max(320).optional().nullable(), notes: z.string().max(2000).optional().nullable(), favorite: z.boolean().optional() })).mutation(async ({ ctx, input }) => {
      const db = await getDb(); if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      const scope = ctx.user.id === 0 ? eq(phoneContacts.guestKey, ctx.guestKey ?? "") : eq(phoneContacts.ownerId, ctx.user.id);
      const result = await db.update(phoneContacts).set({ name: input.name, phoneNumber: input.phoneNumber, email: input.email ?? null, notes: input.notes ?? null, favorite: input.favorite ? 1 : 0 }).where(and(eq(phoneContacts.id, input.id), scope));
      if (!result[0].affectedRows) throw new TRPCError({ code: "FORBIDDEN", message: "Contact not found in this workspace." });
      return (await db.select().from(phoneContacts).where(eq(phoneContacts.id, input.id)).limit(1))[0];
    }),
    deleteContact: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
      const db = await getDb(); if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      const scope = ctx.user.id === 0 ? eq(phoneContacts.guestKey, ctx.guestKey ?? "") : eq(phoneContacts.ownerId, ctx.user.id);
      const result = await db.delete(phoneContacts).where(and(eq(phoneContacts.id, input.id), scope));
      if (!result[0].affectedRows) throw new TRPCError({ code: "FORBIDDEN", message: "Contact not found in this workspace." });
      return { success: true } as const;
    }),
    placeCall: protectedProcedure.input(z.object({ phoneNumber: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/), contactId: z.number().int().positive().optional(), from: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/).optional() })).mutation(async ({ ctx, input }) => {
      const db = await getDb(); if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
      const inserted = await db.insert(phoneCalls).values({ ownerId: ctx.user.id, guestKey: ctx.guestKey ?? null, contactId: input.contactId ?? null, direction: "outbound", status: "initiated", phoneNumber: input.phoneNumber });
      const callId = Number(inserted[0].insertId);
      const result = await requestCall(input.phoneNumber, input.from);
      await db.update(phoneCalls).set({ status: result.accepted ? "ringing" : "failed", providerCallId: result.providerId ?? null, errorMessage: result.error ?? null }).where(eq(phoneCalls.id, callId));
      return { callId, accepted: result.accepted, status: result.accepted ? "ringing" : "failed", error: result.error ?? null };
    }),
    sendText: protectedProcedure.input(z.object({ phoneNumber: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/), body: z.string().trim().min(1).max(2000), contactId: z.number().int().positive().optional(), from: z.string().trim().regex(/^\+?[1-9]\d{7,14}$/).optional() })).mutation(async ({ ctx, input }) => {
      const db = await getDb(); if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
      const inserted = await db.insert(phoneMessages).values({ ownerId: ctx.user.id, guestKey: ctx.guestKey ?? null, contactId: input.contactId ?? null, direction: "outbound", status: "queued", phoneNumber: input.phoneNumber, body: input.body });
      const messageId = Number(inserted[0].insertId);
      const result = await requestText(input.phoneNumber, input.body, input.from);
      await db.update(phoneMessages).set({ status: result.accepted ? "sent" : "failed", providerMessageId: result.providerId ?? null, errorMessage: result.error ?? null }).where(eq(phoneMessages.id, messageId));
      return { messageId, accepted: result.accepted, status: result.accepted ? "sent" : "failed", error: result.error ?? null };
    }),
  }),
  dashboard: router({
    stats: protectedProcedure.query(({ ctx }) => getDashboardStats(ctx.user, ctx.guestKey)),
  }),
  tlds: router({
    list: protectedProcedure.query(() => listTlds()),
  }),
  publicDomains: router({
    byHostname: publicProcedure.input(z.object({ hostname: z.string().min(1).max(253) })).query(({ input }) => {
      const hostname = normalizePublicHostname(input.hostname);
      if (!isValidDomainName(hostname)) return null;
      return getPublicDomainByName(hostname).then(domain => domain ?? null);
    }),
  }),
  domains: router({
    list: protectedProcedure.input(z.object({ search: z.string().optional() }).optional()).query(({ ctx, input }) => listDomainsForUser(ctx.user, input?.search, ctx.guestKey)),
    get: protectedProcedure.input(z.object({ id: z.number().int().positive() })).query(({ ctx, input }) => requireDomain(input.id, ctx.user, ctx.guestKey)),
    register: protectedProcedure.input(domainInput).mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database unavailable." });
      if (ctx.user.id === 0 && !ctx.guestKey) throw new TRPCError({ code: "BAD_REQUEST", message: "Guest workspace could not be initialized. Refresh and try again." });
      const tld = extractTld(input.name);
      const supportedTlds = await listTlds();
      if (!supportedTlds.some(item => item.suffix === tld)) throw new TRPCError({ code: "BAD_REQUEST", message: `Unsupported TLD ${tld}. Choose an active registry TLD.` });
      const now = new Date();
      const registrar = input.registrar ?? (isPrivateTld(tld) ? "Bonds Host Private Registry" : null);
      await db.insert(domains).values({ ...input, registrar, ownerId: ctx.user.id, guestKey: ctx.user.id === 0 ? ctx.guestKey : null, tld, registrationDate: now });
      const domain = await getDomainById((await db.select({ id: domains.id }).from(domains).where(eq(domains.name, input.name)).limit(1))[0]!.id);
      if (!domain) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Domain registration failed." });
      await db.insert(zones).values({ domainId: domain.id, primaryNameserver: `ns1.${domain.name}.`, adminEmail: `hostmaster.${domain.name}.` });
      await db.insert(dnsSettings).values({ domainId: domain.id, authoritativeNameservers: `ns1.${domain.name}.\nns2.${domain.name}.` });
      return domain;
    }),
    updateStatus: protectedProcedure.input(z.object({ id: z.number().int().positive(), status: z.enum(["active", "expired", "pending"]) })).mutation(async ({ ctx, input }) => {
      await requireDomain(input.id, ctx.user, ctx.guestKey);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      await db.update(domains).set({ status: input.status }).where(eq(domains.id, input.id));
      return getDomainById(input.id);
    }),
    delete: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
      await requireDomain(input.id, ctx.user, ctx.guestKey);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      const zone = await getZoneByDomainId(input.id);
      if (zone) await db.delete(dnsRecords).where(eq(dnsRecords.zoneId, zone.id));
      await db.delete(zones).where(eq(zones.domainId, input.id));
      await db.delete(dnsSettings).where(eq(dnsSettings.domainId, input.id));
      await db.delete(domains).where(eq(domains.id, input.id));
      return { success: true } as const;
    }),
  }),
  zones: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      const domains = await listDomainsForUser(ctx.user, undefined, ctx.guestKey);
      const db = await getDb();
      if (!db || !domains.length) return [];
      return db.select().from(zones).where(sql`${zones.domainId} IN (${sql.join(domains.map(domain => sql`${domain.id}`), sql`, `)})`);
    }),
    get: protectedProcedure.input(z.object({ domainId: z.number().int().positive() })).query(async ({ ctx, input }) => {
      await requireDomain(input.domainId, ctx.user, ctx.guestKey);
      const zone = await getZoneByDomainId(input.domainId);
      if (!zone) throw new TRPCError({ code: "NOT_FOUND", message: "Zone not found." });
      return { zone, settings: await getSettingsByDomainId(input.domainId), records: await listRecordsByZoneId(zone.id) };
    }),
    update: protectedProcedure.input(z.object({ domainId: z.number().int().positive(), primaryNameserver: z.string().min(1).max(253), adminEmail: z.string().min(1).max(253), serial: z.number().int().positive(), refresh: z.number().int().positive(), retry: z.number().int().positive(), expire: z.number().int().positive(), minimumTtl: z.number().int().nonnegative() })).mutation(async ({ ctx, input }) => {
      await requireDomain(input.domainId, ctx.user, ctx.guestKey);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      await db.update(zones).set(input).where(eq(zones.domainId, input.domainId));
      return getZoneByDomainId(input.domainId);
    }),
    export: protectedProcedure.input(z.object({ domainId: z.number().int().positive() })).query(async ({ ctx, input }) => {
      const domain = await requireDomain(input.domainId, ctx.user, ctx.guestKey);
      const zone = await getZoneByDomainId(input.domainId);
      if (!zone) throw new TRPCError({ code: "NOT_FOUND", message: "Zone not found." });
      const settings = await getSettingsByDomainId(input.domainId);
      const records = await listRecordsByZoneId(zone.id);
      return { filename: `db.${domain.name}`, namedConf: `zone \"${domain.name}\" { type master; file \"db.${domain.name}\"; };`, zoneFile: buildZoneFile(domain, zone, settings, records) };
    }),
  }),
  records: router({
    list: protectedProcedure.input(z.object({ domainId: z.number().int().positive() })).query(async ({ ctx, input }) => {
      const domain = await requireDomain(input.domainId, ctx.user, ctx.guestKey);
      const zone = await getZoneByDomainId(domain.id);
      return zone ? listRecordsByZoneId(zone.id) : [];
    }),
    create: protectedProcedure.input(recordInput).mutation(async ({ ctx, input }) => {
      await requireZone(input.zoneId, ctx.user, ctx.guestKey);
      validateRecordPayload(input);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      await db.insert(dnsRecords).values(input);
      return db.select().from(dnsRecords).where(and(eq(dnsRecords.zoneId, input.zoneId), eq(dnsRecords.name, input.name), eq(dnsRecords.type, input.type))).orderBy(sql`${dnsRecords.id} DESC`).limit(1);
    }),
    update: protectedProcedure.input(recordInput.extend({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
      const record = await getRecordById(input.id);
      if (!record) throw new TRPCError({ code: "NOT_FOUND" });
      await requireZone(record.zoneId, ctx.user, ctx.guestKey);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      const { id, ...values } = input;
      validateRecordPayload(values);
      await db.update(dnsRecords).set(values).where(eq(dnsRecords.id, id));
      return getRecordById(id);
    }),
    delete: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
      const record = await getRecordById(input.id);
      if (!record) throw new TRPCError({ code: "NOT_FOUND" });
      await requireZone(record.zoneId, ctx.user, ctx.guestKey);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      await db.delete(dnsRecords).where(eq(dnsRecords.id, input.id));
      return { success: true } as const;
    }),
  }),
  settings: router({
    get: protectedProcedure.input(z.object({ domainId: z.number().int().positive() })).query(async ({ ctx, input }) => { await requireDomain(input.domainId, ctx.user, ctx.guestKey); return getSettingsByDomainId(input.domainId); }),
    update: protectedProcedure.input(z.object({ domainId: z.number().int().positive(), authoritativeNameservers: z.string().min(1), recursiveResolver: z.string().max(253).optional().nullable(), defaultTtl: z.number().int().nonnegative(), dnssecEnabled: z.boolean(), dnssecAlgorithm: z.string().max(64).optional().nullable(), dnssecPublicKey: z.string().max(4096).optional().nullable(), dnssecKeyTag: z.number().int().nonnegative().optional().nullable() })).mutation(async ({ ctx, input }) => {
      await requireDomain(input.domainId, ctx.user, ctx.guestKey);
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      await db.insert(dnsSettings).values({ ...input, dnssecEnabled: input.dnssecEnabled ? 1 : 0 }).onDuplicateKeyUpdate({ set: { ...input, dnssecEnabled: input.dnssecEnabled ? 1 : 0 } });
      return getSettingsByDomainId(input.domainId);
    }),
  }),
  lookup: router({
    query: protectedProcedure.input(z.object({ domainId: z.number().int().positive(), name: z.string().min(1), type: z.enum(recordTypes).optional() })).query(async ({ ctx, input }) => {
      const domain = await requireDomain(input.domainId, ctx.user, ctx.guestKey);
      const zone = await getZoneByDomainId(domain.id);
      if (!zone) return [];
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      const stored = await db.select().from(dnsRecords).where(eq(dnsRecords.zoneId, zone.id));
      return filterLookupRecords(stored, input.name, input.type);
    }),
  }),
});

export type AppRouter = typeof appRouter;
