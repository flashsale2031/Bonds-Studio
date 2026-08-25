import { index, int, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const domains = mysqlTable("domains", {
  id: int("id").autoincrement().primaryKey(),
  ownerId: int("ownerId").notNull(),
  guestKey: varchar("guestKey", { length: 64 }),
  name: varchar("name", { length: 253 }).notNull().unique(),
  tld: varchar("tld", { length: 63 }).notNull(),
  status: mysqlEnum("status", ["active", "expired", "pending"]).default("pending").notNull(),
  registrar: varchar("registrar", { length: 160 }),
  registrationDate: timestamp("registrationDate"),
  expirationDate: timestamp("expirationDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => ({
  ownerNameIdx: uniqueIndex("domains_owner_name_idx").on(table.ownerId, table.name),
  guestKeyIdx: index("domains_guest_key_idx").on(table.guestKey, table.updatedAt),
}));

export const zones = mysqlTable("zones", {
  id: int("id").autoincrement().primaryKey(),
  domainId: int("domainId").notNull().unique(),
  primaryNameserver: varchar("primaryNameserver", { length: 253 }).notNull().default("ns1.example.net."),
  adminEmail: varchar("adminEmail", { length: 253 }).notNull().default("hostmaster.example.net."),
  serial: int("serial").notNull().default(2026010101),
  refresh: int("refresh").notNull().default(3600),
  retry: int("retry").notNull().default(600),
  expire: int("expire").notNull().default(604800),
  minimumTtl: int("minimumTtl").notNull().default(300),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const dnsSettings = mysqlTable("dnsSettings", {
  id: int("id").autoincrement().primaryKey(),
  domainId: int("domainId").notNull().unique(),
  authoritativeNameservers: text("authoritativeNameservers").notNull(),
  recursiveResolver: varchar("recursiveResolver", { length: 253 }),
  defaultTtl: int("defaultTtl").notNull().default(3600),
  dnssecEnabled: int("dnssecEnabled").notNull().default(0),
  dnssecAlgorithm: varchar("dnssecAlgorithm", { length: 64 }).default("ECDSAP256SHA256"),
  dnssecPublicKey: text("dnssecPublicKey"),
  dnssecKeyTag: int("dnssecKeyTag"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const recordTypes = ["A", "AAAA", "CNAME", "MX", "NS", "TXT", "PTR", "SRV", "CAA", "TLSA", "CERT", "SMIMEA", "SSHFP", "DNSKEY"] as const;
export type RecordType = (typeof recordTypes)[number];

export const dnsRecords = mysqlTable("dnsRecords", {
  id: int("id").autoincrement().primaryKey(),
  zoneId: int("zoneId").notNull(),
  name: varchar("name", { length: 253 }).notNull(),
  type: mysqlEnum("type", recordTypes).notNull(),
  value: varchar("value", { length: 2048 }).notNull(),
  ttl: int("ttl").notNull().default(3600),
  priority: int("priority"),
  weight: int("weight"),
  port: int("port"),
  flags: int("flags"),
  tag: varchar("tag", { length: 64 }),
  order: int("order"),
  preference: int("preference"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => ({ zoneNameTypeIdx: index("dns_records_zone_name_type_idx").on(table.zoneId, table.name, table.type) }));

export const tlds = mysqlTable("tlds", {
  id: int("id").autoincrement().primaryKey(),
  suffix: varchar("suffix", { length: 63 }).notNull().unique(),
  defaultRegistrationYears: int("defaultRegistrationYears").notNull().default(1),
  defaultTtl: int("defaultTtl").notNull().default(3600),
  active: int("active").notNull().default(1),
});

export const aiConversations = mysqlTable("aiConversations", {
  id: int("id").autoincrement().primaryKey(),
  ownerId: int("ownerId").notNull(),
  guestKey: varchar("guestKey", { length: 64 }),
  title: varchar("title", { length: 160 }).notNull().default("New conversation"),
  model: varchar("model", { length: 128 }),
  reasoningLevel: mysqlEnum("reasoningLevel", ["minimal", "low", "medium", "high"]).default("low").notNull(),
  executionStatus: mysqlEnum("executionStatus", ["idle", "planning", "inspecting", "synthesizing", "reporting", "completed", "failed", "paused"]).default("idle").notNull(),
  executionStep: varchar("executionStep", { length: 64 }).default("idle").notNull(),
  executionProgress: int("executionProgress").default(0).notNull(),
  executionRunId: varchar("executionRunId", { length: 64 }),
  executionSource: mysqlEnum("executionSource", ["typed", "voice"]).default("typed").notNull(),
  executionInput: text("executionInput"),
  executionError: text("executionError"),
  executionStartedAt: timestamp("executionStartedAt"),
  executionCompletedAt: timestamp("executionCompletedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => ({
  guestKeyIdx: index("ai_conversations_guest_key_idx").on(table.guestKey, table.updatedAt),
  ownerIdx: index("ai_conversations_owner_idx").on(table.ownerId, table.updatedAt),
}));

export const aiMessages = mysqlTable("aiMessages", {
  id: int("id").autoincrement().primaryKey(),
  conversationId: int("conversationId").notNull(),
  role: mysqlEnum("role", ["system", "user", "assistant", "tool"]).notNull(),
  content: text("content").notNull(),
  toolName: varchar("toolName", { length: 128 }),
  toolStatus: mysqlEnum("toolStatus", ["started", "completed", "failed"]),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, table => ({
  conversationIdx: index("ai_messages_conversation_idx").on(table.conversationId, table.createdAt),
}));

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Domain = typeof domains.$inferSelect;
export type InsertDomain = typeof domains.$inferInsert;
export type Zone = typeof zones.$inferSelect;
export type InsertZone = typeof zones.$inferInsert;
export type DnsSetting = typeof dnsSettings.$inferSelect;
export type DnsRecord = typeof dnsRecords.$inferSelect;
export type InsertDnsRecord = typeof dnsRecords.$inferInsert;
export type Tld = typeof tlds.$inferSelect;

export const phoneContacts = mysqlTable("phoneContacts", {
  id: int("id").autoincrement().primaryKey(),
  ownerId: int("ownerId").notNull(),
  guestKey: varchar("guestKey", { length: 64 }),
  name: varchar("name", { length: 160 }).notNull(),
  phoneNumber: varchar("phoneNumber", { length: 32 }).notNull(),
  email: varchar("email", { length: 320 }),
  notes: text("notes"),
  favorite: int("favorite").notNull().default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => ({ guestKeyIdx: index("phone_contacts_guest_key_idx").on(table.guestKey, table.updatedAt) }));

export const phoneCalls = mysqlTable("phoneCalls", {
  id: int("id").autoincrement().primaryKey(),
  ownerId: int("ownerId").notNull(),
  guestKey: varchar("guestKey", { length: 64 }),
  contactId: int("contactId"),
  direction: mysqlEnum("direction", ["inbound", "outbound"]).notNull(),
  status: mysqlEnum("status", ["initiated", "ringing", "connected", "completed", "failed", "missed"]).notNull().default("initiated"),
  phoneNumber: varchar("phoneNumber", { length: 32 }).notNull(),
  durationSeconds: int("durationSeconds"),
  providerCallId: varchar("providerCallId", { length: 160 }),
  errorMessage: text("errorMessage"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => ({ guestKeyIdx: index("phone_calls_guest_key_idx").on(table.guestKey, table.createdAt) }));

export const phoneMessages = mysqlTable("phoneMessages", {
  id: int("id").autoincrement().primaryKey(),
  ownerId: int("ownerId").notNull(),
  guestKey: varchar("guestKey", { length: 64 }),
  contactId: int("contactId"),
  direction: mysqlEnum("direction", ["inbound", "outbound"]).notNull(),
  status: mysqlEnum("status", ["queued", "sent", "delivered", "failed"]).notNull().default("queued"),
  phoneNumber: varchar("phoneNumber", { length: 32 }).notNull(),
  body: text("body").notNull(),
  providerMessageId: varchar("providerMessageId", { length: 160 }),
  errorMessage: text("errorMessage"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, table => ({ guestKeyIdx: index("phone_messages_guest_key_idx").on(table.guestKey, table.createdAt) }));

export type PhoneContact = typeof phoneContacts.$inferSelect;
export type PhoneCall = typeof phoneCalls.$inferSelect;
export type PhoneMessage = typeof phoneMessages.$inferSelect;
