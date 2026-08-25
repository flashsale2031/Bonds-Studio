import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import { canUserManageDomain } from "./db";
import { GUEST_USER } from "./_core/trpc";
import type { TrpcContext } from "./_core/context";

describe("guest access", () => {
  it("uses the guest identity for protected workspace queries without a session", async () => {
    const caller = appRouter.createCaller({ user: null, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const domains = await caller.domains.list();
    expect(GUEST_USER.id).toBe(0);
    expect(GUEST_USER.loginMethod).toBe("guest");
    expect(Array.isArray(domains)).toBe(true);
  });

  it("supports a complete guest domain and DNS record lifecycle", async () => {
    const guestKey = `test-${Date.now()}`;
    const caller = appRouter.createCaller({ user: null, guestKey, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const name = `guest-${Date.now()}.bonds`;
    let domainId: number | undefined;
    try {
      const domain = await caller.domains.register({ name, status: "active" });
      domainId = domain.id;
      expect(domain.status).toBe("active");
      const updated = await caller.domains.updateStatus({ id: domain.id, status: "pending" });
      expect(updated?.status).toBe("pending");
      const zone = await caller.zones.get({ domainId: domain.id });
      const created = await caller.records.create({ zoneId: zone.zone.id, name: "@", type: "A", value: "192.0.2.44", ttl: 300 });
      const record = created[0];
      expect(record?.value).toBe("192.0.2.44");
      const changed = await caller.records.update({ id: record!.id, zoneId: zone.zone.id, name: "@", type: "A", value: "192.0.2.45", ttl: 300 });
      expect(changed?.value).toBe("192.0.2.45");
      await caller.records.delete({ id: record!.id });
      await caller.domains.delete({ id: domain.id });
      domainId = undefined;
      expect(await caller.domains.list()).not.toEqual(expect.arrayContaining([expect.objectContaining({ name })]));
    } finally {
      if (domainId) await caller.domains.delete({ id: domainId }).catch(() => undefined);
    }
  });

  it("denies cross-guest reads and mutations across domains, zones, settings, and records", async () => {
    const callerA = appRouter.createCaller({ user: null, guestKey: `guest-a-${Date.now()}`, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const callerB = appRouter.createCaller({ user: null, guestKey: `guest-b-${Date.now()}`, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const domain = await callerA.domains.register({ name: `cross-guest-${Date.now()}.bonds`, status: "active" });
    try {
      const zone = await callerA.zones.get({ domainId: domain.id });
      const created = await callerA.records.create({ zoneId: zone.zone.id, name: "@", type: "A", value: "192.0.2.55", ttl: 300 });
      const recordId = created[0]!.id;
      await expect(callerB.domains.list()).resolves.not.toEqual(expect.arrayContaining([expect.objectContaining({ id: domain.id })]));
      await expect(callerB.domains.get({ id: domain.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.domains.updateStatus({ id: domain.id, status: "expired" })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.zones.get({ domainId: domain.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.settings.get({ domainId: domain.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.zones.update({ domainId: domain.id, primaryNameserver: "ns1.invalid.", adminEmail: "hostmaster.invalid.", serial: 2026010102, refresh: 3600, retry: 600, expire: 604800, minimumTtl: 300 })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.settings.update({ domainId: domain.id, authoritativeNameservers: "ns1.invalid.\nns2.invalid.", recursiveResolver: null, defaultTtl: 300, dnssecEnabled: false, dnssecAlgorithm: "ECDSAP256SHA256", dnssecPublicKey: null, dnssecKeyTag: null })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.records.list({ domainId: domain.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.records.create({ zoneId: zone.zone.id, name: "www", type: "A", value: "192.0.2.56", ttl: 300 })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.records.update({ id: recordId, zoneId: zone.zone.id, name: "@", type: "A", value: "192.0.2.57", ttl: 300 })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.records.delete({ id: recordId })).rejects.toMatchObject({ code: "FORBIDDEN" });
      await expect(callerB.domains.delete({ id: domain.id })).rejects.toMatchObject({ code: "FORBIDDEN" });
    } finally {
      await callerA.domains.delete({ id: domain.id }).catch(() => undefined);
    }
  });

  it("isolates guest-owned domains by browser workspace key", () => {
    const guest = { id: 0, role: "user" as const };
    const domain = { ownerId: 0, guestKey: "browser-a" };
    expect(canUserManageDomain(domain, guest, "browser-a")).toBe(true);
    expect(canUserManageDomain(domain, guest, "browser-b")).toBe(false);
  });

  it("does not render the old login gate in the Domains shell", () => {
    const layout = readFileSync(new URL("../client/src/components/DashboardLayout.tsx", import.meta.url), "utf8");
    expect(layout).not.toContain("Sign in to continue");
    expect(layout).toContain("Guest workspace");
    expect(layout).toContain("isolated to this browser");
  });
});
