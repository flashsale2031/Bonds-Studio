import { and, desc, eq, like, or, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { aiConversations, aiMessages, dnsRecords, dnsSettings, domains, InsertDomain, InsertDnsRecord, phoneCalls, phoneContacts, phoneMessages, tlds, users, zones } from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: typeof users.$inferInsert): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) return;
  const values = { ...user, lastSignedIn: user.lastSignedIn ?? new Date() };
  const updateSet: Record<string, unknown> = {
    name: user.name ?? null,
    email: user.email ?? null,
    loginMethod: user.loginMethod ?? null,
    lastSignedIn: values.lastSignedIn,
  };
  if (user.role) updateSet.role = user.role;
  else if (user.openId === ENV.ownerOpenId) updateSet.role = "admin";
  await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

export async function listDomainsForUser(user: { id: number; role: "user" | "admin" }, search?: string, guestKey?: string | null) {
  const db = await getDb();
  if (!db) return [];
  const scope = user.role === "admin" ? undefined : user.id === 0 ? eq(domains.guestKey, guestKey ?? "") : eq(domains.ownerId, user.id);
  const filter = search ? like(domains.name, `%${search.toLowerCase()}%`) : undefined;
  return db.select().from(domains).where(scope && filter ? and(scope, filter) : scope ?? filter).orderBy(desc(domains.updatedAt));
}

export async function getDomainById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(domains).where(eq(domains.id, id)).limit(1);
  return result[0];
}

export async function getPublicDomainByName(name: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(domains).where(and(eq(domains.name, name), eq(domains.status, "active"))).limit(1);
  return result[0];
}

export function canUserManageDomain(domain: { ownerId: number; guestKey?: string | null }, user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  return user.role === "admin" || (user.id === 0 ? Boolean(guestKey && domain.guestKey === guestKey) : domain.ownerId === user.id);
}

export async function getAccessibleDomain(id: number, user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  const domain = await getDomainById(id);
  if (!domain || !canUserManageDomain(domain, user, guestKey)) return undefined;
  return domain;
}

export async function getZoneByDomainId(domainId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(zones).where(eq(zones.domainId, domainId)).limit(1);
  return result[0];
}

export async function getSettingsByDomainId(domainId: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(dnsSettings).where(eq(dnsSettings.domainId, domainId)).limit(1);
  return result[0];
}

export async function listRecordsByZoneId(zoneId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(dnsRecords).where(eq(dnsRecords.zoneId, zoneId)).orderBy(dnsRecords.name, dnsRecords.type);
}

export async function getRecordById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(dnsRecords).where(eq(dnsRecords.id, id)).limit(1);
  return result[0];
}

export async function getDashboardStats(user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  const db = await getDb();
  if (!db) return { totalDomains: 0, activeDomains: 0, activeZones: 0, totalRecords: 0, recent: [] };
  const scope = user.role === "admin" ? undefined : user.id === 0 ? eq(domains.guestKey, guestKey ?? "") : eq(domains.ownerId, user.id);
  const domainRows = await db.select({ id: domains.id, status: domains.status }).from(domains).where(scope);
  const domainIds = domainRows.map(row => row.id);
  if (!domainIds.length) return { totalDomains: 0, activeDomains: 0, activeZones: 0, totalRecords: 0, recent: [] };
  const zoneRows = await db.select({ id: zones.id, domainId: zones.domainId }).from(zones);
  const accessibleZones = zoneRows.filter(zone => domainIds.includes(zone.domainId));
  const zoneIds = accessibleZones.map(zone => zone.id);
  const recordRows = zoneIds.length ? await db.select({ id: dnsRecords.id, name: dnsRecords.name, type: dnsRecords.type, updatedAt: dnsRecords.updatedAt }).from(dnsRecords).where(sql`${dnsRecords.zoneId} IN (${sql.join(zoneIds.map(id => sql`${id}`), sql`, `)})`).orderBy(desc(dnsRecords.updatedAt)).limit(5) : [];
  return {
    totalDomains: domainRows.length,
    activeDomains: domainRows.filter(row => row.status === "active").length,
    activeZones: accessibleZones.length,
    totalRecords: zoneIds.length ? (await db.select({ count: sql<number>`count(*)` }).from(dnsRecords).where(sql`${dnsRecords.zoneId} IN (${sql.join(zoneIds.map(id => sql`${id}`), sql`, `)})`))[0]?.count ?? 0 : 0,
    recent: recordRows,
  };
}

export async function listTlds() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(tlds).where(eq(tlds.active, 1)).orderBy(tlds.suffix);
}

export type DomainInsert = InsertDomain;
export type RecordInsert = InsertDnsRecord;

export function canUserManageConversation(conversation: { ownerId: number; guestKey?: string | null }, user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  return user.role === "admin" || (user.id === 0 ? Boolean(guestKey && conversation.guestKey === guestKey) : conversation.ownerId === user.id);
}

export async function getConversationById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(aiConversations).where(eq(aiConversations.id, id)).limit(1);
  return result[0];
}

export async function listConversationsForUser(user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  const db = await getDb();
  if (!db) return [];
  const scope = user.role === "admin" ? undefined : user.id === 0 ? eq(aiConversations.guestKey, guestKey ?? "") : eq(aiConversations.ownerId, user.id);
  return db.select().from(aiConversations).where(scope).orderBy(desc(aiConversations.updatedAt));
}

export async function listMessagesByConversationId(conversationId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(aiMessages).where(eq(aiMessages.conversationId, conversationId)).orderBy(aiMessages.createdAt, aiMessages.id);
}

function guestScope<T extends { ownerId: any; guestKey: any }>(table: T, user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  return user.role === "admin" ? undefined : user.id === 0 ? eq(table.guestKey, guestKey ?? "") : eq(table.ownerId, user.id);
}

export async function listPhoneContactsForUser(user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  const db = await getDb(); if (!db) return [];
  return db.select().from(phoneContacts).where(guestScope(phoneContacts, user, guestKey)).orderBy(phoneContacts.name);
}

export async function getPhoneContactById(id: number) {
  const db = await getDb(); if (!db) return undefined;
  return (await db.select().from(phoneContacts).where(eq(phoneContacts.id, id)).limit(1))[0];
}

export async function listPhoneCallsForUser(user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  const db = await getDb(); if (!db) return [];
  return db.select().from(phoneCalls).where(guestScope(phoneCalls, user, guestKey)).orderBy(desc(phoneCalls.createdAt)).limit(100);
}

export async function listPhoneMessagesForUser(user: { id: number; role: "user" | "admin" }, guestKey?: string | null) {
  const db = await getDb(); if (!db) return [];
  return db.select().from(phoneMessages).where(guestScope(phoneMessages, user, guestKey)).orderBy(desc(phoneMessages.createdAt)).limit(100);
}
