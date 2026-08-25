import { afterEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

const originalVoiceUrl = process.env.OPEN5GS_VOICE_GATEWAY_URL;
const originalSmsUrl = process.env.OPEN5GS_SMS_GATEWAY_URL;
const originalApiUrl = process.env.OPEN5GS_API_BASE_URL;

afterEach(() => {
  if (originalVoiceUrl === undefined) delete process.env.OPEN5GS_VOICE_GATEWAY_URL; else process.env.OPEN5GS_VOICE_GATEWAY_URL = originalVoiceUrl;
  if (originalSmsUrl === undefined) delete process.env.OPEN5GS_SMS_GATEWAY_URL; else process.env.OPEN5GS_SMS_GATEWAY_URL = originalSmsUrl;
  if (originalApiUrl === undefined) delete process.env.OPEN5GS_API_BASE_URL; else process.env.OPEN5GS_API_BASE_URL = originalApiUrl;
});

function caller(guestKey: string) {
  return appRouter.createCaller({ user: null, guestKey, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
}

describe("Phone workspace", () => {
  it("isolates guest contacts and rejects invalid phone numbers", async () => {
    const a = caller(`phone-a-${Date.now()}`);
    const b = caller(`phone-b-${Date.now()}`);
    const created = await a.phone.createContact({ name: "Private Contact", phoneNumber: "+15551234567" });
    try {
      expect((await a.phone.contacts()).some(contact => contact.id === created.id)).toBe(true);
      expect((await b.phone.contacts()).some(contact => contact.id === created.id)).toBe(false);
      await expect(b.phone.updateContact({ id: created.id, name: "Intruder", phoneNumber: "+15557654321" })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(b.phone.deleteContact({ id: created.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(a.phone.createContact({ name: "Bad", phoneNumber: "555" })).rejects.toMatchObject({ code: "BAD_REQUEST" });
    } finally {
      await a.phone.deleteContact({ id: created.id });
    }
  });

  it("supports a guest contact create, read, update, and delete lifecycle", async () => {
    const c = caller(`phone-crud-${Date.now()}`);
    const created = await c.phone.createContact({ name: "Initial Name", phoneNumber: "+15551234567", notes: "initial" });
    try {
      const updated = await c.phone.updateContact({ id: created.id, name: "Updated Name", phoneNumber: "+15557654321", notes: "updated" });
      expect(updated?.name).toBe("Updated Name");
      expect((await c.phone.contacts()).find(contact => contact.id === created.id)?.phoneNumber).toBe("+15557654321");
    } finally {
      await c.phone.deleteContact({ id: created.id });
    }
    expect((await c.phone.contacts()).some(contact => contact.id === created.id)).toBe(false);
  });

  it("exposes Phone in the route, menu, and required tab/action contract", () => {
    const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8");
    const layout = readFileSync(new URL("../client/src/components/AppLayout.tsx", import.meta.url), "utf8");
    const page = readFileSync(new URL("../client/src/pages/PhonePage.tsx", import.meta.url), "utf8");
    expect(app).toContain('path="/phone"');
    expect(layout).toContain('href="/phone"');
    expect(page).toContain("Call Log");
    expect(page).toContain("Dialer");
    expect(page).toContain("Contacts");
    expect(page).toContain("Send text");
    expect(page).toContain("Save contact");
  });

  it("reports self-hosted gateway configuration separately from the Open5GS WebUI", async () => {
    delete process.env.OPEN5GS_VOICE_GATEWAY_URL;
    delete process.env.OPEN5GS_SMS_GATEWAY_URL;
    delete process.env.OPEN5GS_API_BASE_URL;
    const result = await caller(`phone-status-${Date.now()}`).phone.status();
    expect(result.configured).toBe(false);
    expect(result.voiceConfigured).toBe(false);
    expect(result.smsConfigured).toBe(false);
    expect(result.provider).toContain("Self-hosted Open5GS");
  });

  it("records failed call and text attempts without claiming provider success", async () => {
    delete process.env.OPEN5GS_VOICE_GATEWAY_URL;
    delete process.env.OPEN5GS_SMS_GATEWAY_URL;
    delete process.env.OPEN5GS_API_BASE_URL;
    const c = caller(`phone-actions-${Date.now()}`);
    const call = await c.phone.placeCall({ phoneNumber: "+15551234567" });
    const text = await c.phone.sendText({ phoneNumber: "+15551234567", body: "Hello from the workspace" });
    expect(call.accepted).toBe(false);
    expect(call.status).toBe("failed");
    expect(text.accepted).toBe(false);
    expect(text.status).toBe("failed");
    expect((await c.phone.calls()).some(item => item.id === call.callId && item.status === "failed")).toBe(true);
    expect((await c.phone.messages()).some(item => item.id === text.messageId && item.status === "failed")).toBe(true);
  });
});
