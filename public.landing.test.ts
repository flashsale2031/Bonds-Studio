import { describe, expect, it } from "vitest";
import { BONDS_ESTATES_MESSAGE, BONDS_MALL_LOGO_URL } from "../client/src/pages/PublicLanding";
import { isManagementHost, normalizePublicHostname } from "../shared/publicDomain";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("Public domain landing page", () => {
  it("normalizes public hostnames and distinguishes management hosts", () => {
    expect(normalizePublicHostname("www.bondstech.com.")).toBe("www.bondstech.com");
    expect(isManagementHost("3000-abc.manus.computer")).toBe(true);
    expect(isManagementHost("www.bondstech.com")).toBe(false);
  });

  it("resolves an active registered hostname and rejects an unknown hostname", async () => {
    const caller = appRouter.createCaller({ user: undefined, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const registered = await caller.publicDomains.byHostname({ hostname: "www.bondstech.com" });
    const unknown = await caller.publicDomains.byHostname({ hostname: "not-registered.example" });
    expect(registered?.name).toBe("www.bondstech.com");
    expect(unknown).toBeNull();
  });

  it("uses the requested Bonds Estates construction message and hosted logo", () => {
    expect(BONDS_ESTATES_MESSAGE).toBe("This website is property of Bonds Estates and it's currently under construction.");
    expect(BONDS_MALL_LOGO_URL).toBe("/manus-storage/bonds-mall-logo_e8e7fc95.png");
  });
});
