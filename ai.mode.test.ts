import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";

vi.mock("./_core/llm", () => ({
  listLLMModels: vi.fn(async () => ({ data: [{ id: "gpt-5-mini", object: "model", created: 0, owned_by: "openai" }] })),
  invokeLLM: vi.fn(async (params: { tools?: unknown[]; messages?: Array<{ role?: string }> }) => params.messages?.some(message => message.role === "tool") ? {
    id: "mock-final",
    created: 0,
    model: "gpt-5-mini",
    choices: [{ index: 0, finish_reason: "stop", message: { role: "assistant", content: "Workspace overview complete." } }],
    usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
  } : params.tools?.length ? {
    id: "mock-tool-call",
    created: 0,
    model: "gpt-5-mini",
    choices: [{ index: 0, finish_reason: "tool_calls", message: { role: "assistant", content: "", tool_calls: [{ id: "call-1", type: "function", function: { name: "get_workspace_overview", arguments: "{}" } }] } }],
  } : {
    id: "mock-final",
    created: 0,
    model: "gpt-5-mini",
    choices: [{ index: 0, finish_reason: "stop", message: { role: "assistant", content: "Workspace overview complete." } }],
    usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
  }),
}));

import { appRouter } from "./routers";
import { canUserManageConversation } from "./db";
import type { TrpcContext } from "./_core/context";

describe("AI Mode", () => {
  it("isolates conversation ownership by guest workspace key", () => {
    const guest = { id: 0, role: "user" as const };
    const conversation = { ownerId: 0, guestKey: "ai-browser-a" };
    expect(canUserManageConversation(conversation, guest, "ai-browser-a")).toBe(true);
    expect(canUserManageConversation(conversation, guest, "ai-browser-b")).toBe(false);
  });

  it("supports guest conversation creation, listing, reading, and deletion", async () => {
    const guestKey = `ai-test-${Date.now()}`;
    const caller = appRouter.createCaller({ user: null, guestKey, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const created = await caller.ai.createConversation({ title: "DNS planning", model: "gpt-5-mini", reasoningLevel: "low" });
    try {
      expect(created.title).toBe("DNS planning");
      expect((await caller.ai.conversations()).some(item => item.id === created.id)).toBe(true);
      const loaded = await caller.ai.getConversation({ id: created.id });
      expect(loaded.conversation.id).toBe(created.id);
      expect(loaded.messages).toEqual([]);
    } finally {
      await caller.ai.deleteConversation({ id: created.id }).catch(() => undefined);
    }
  });

  it("denies another guest from reading or deleting a conversation", async () => {
    const callerA = appRouter.createCaller({ user: null, guestKey: `ai-a-${Date.now()}`, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const callerB = appRouter.createCaller({ user: null, guestKey: `ai-b-${Date.now()}`, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const created = await callerA.ai.createConversation({ title: "Private agent context", reasoningLevel: "low" });
    try {
      await expect(callerB.ai.getConversation({ id: created.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.ai.deleteConversation({ id: created.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
    } finally {
      await callerA.ai.deleteConversation({ id: created.id }).catch(() => undefined);
    }
  });

  it("discovers models and persists a tool-assisted send flow", async () => {
    const guestKey = `ai-tool-${Date.now()}`;
    const caller = appRouter.createCaller({ user: null, guestKey, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const models = await caller.ai.models();
    expect(models).toEqual([{ id: "gpt-5-mini", name: "gpt-5-mini", ownedBy: "openai" }]);
    const created = await caller.ai.createConversation({ model: "gpt-5-mini", reasoningLevel: "low" });
    try {
      const result = await caller.ai.send({ conversationId: created.id, content: "Summarize this workspace", model: "gpt-5-mini", reasoningLevel: "low" });
      expect(result.content).toBe("Workspace overview complete.");
      expect(result.runId).toMatch(/[0-9a-f-]{20,}/);
      expect(result.activity).toEqual([expect.objectContaining({ name: "get_workspace_overview", status: "completed" })]);
      const loaded = await caller.ai.getConversation({ id: created.id });
      expect(loaded.conversation.executionStatus).toBe("completed");
      expect(loaded.conversation.executionProgress).toBe(100);
      expect(loaded.conversation.executionSource).toBe("typed");
      expect(loaded.messages.map(message => message.role)).toEqual(["user", "tool", "assistant"]);
    } finally {
      await caller.ai.deleteConversation({ id: created.id }).catch(() => undefined);
    }
  });

  it("exposes the AI route and real agent controls instead of simulated replies", () => {
    const page = readFileSync(new URL("../client/src/pages/AiModePage.tsx", import.meta.url), "utf8");
    expect(page).toContain("trpc.ai.send.useMutation");
    expect(page).toContain("trpc.ai.models.useQuery");
    expect(page).toContain("Tool activity");
    expect(page).toContain("Fast lane");
    expect(page).toContain("Architect mode");
    expect(page).toContain("Live project execution");
    expect(page).toContain("Voice run");
    expect(page).toContain("resumable run");
    expect(page).toContain("conversation.error");
    expect(page).not.toContain("Simulated AI response");
    const router = readFileSync(new URL("./routers.ts", import.meta.url), "utf8");
    expect(router).toContain("const recentMessages = contextMessages.slice(-24)");
    expect(router).toContain("Promise.all(toolCalls.map");
    expect(router).toContain("rounds < 3");
  });
});
