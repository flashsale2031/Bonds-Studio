import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Bond Studio and Domains integration", () => {
  it("preserves Bond Studio routes and exposes the header Domains route", () => {
    const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8");
    const layout = readFileSync(new URL("../client/src/components/AppLayout.tsx", import.meta.url), "utf8");
    const home = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");
    for (const route of ["/", "/accounts", "/trends", "/notes", "/monetize", "/settings", "/ai-mode", "/voice-control"]) {
      expect(app).toContain(`path=\"${route}\"`);
    }
    for (const route of ["/domains", "/domains/zones", "/domains/records", "/domains/settings", "/domains/lookup"]) {
      expect(app).toContain(`path=\"${route}\"`);
    }
    expect(layout).toContain('<Link href="/domains">');
    expect(layout).toContain(">Domains</span>");
    for (const category of ["Document", "Web", "Audio", "Video", "Image", "Animation", "Game", "Code"]) {
      expect(home).toContain(`name: "${category}"`);
    }
    expect(home).toContain("const quickStartProjects");
    expect(home.indexOf('name: "Video"')).toBeLessThan(home.indexOf('name: "Image"'));
    expect(home.indexOf('name: "Image"')).toBeLessThan(home.indexOf('name: "Animation"'));
  });
});
