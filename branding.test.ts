import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Bonds Studio branding", () => {
  it("uses the configured Bonds Studio application title", () => {
    expect(process.env.VITE_APP_TITLE).toBe("Bonds Studio");
    const html = readFileSync(new URL("../client/index.html", import.meta.url), "utf8");
    expect(html).toContain("<title>Bonds Studio</title>");
  });
});
