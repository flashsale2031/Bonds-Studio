import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { estimatePhotovoltaicCharge, formatChargeTime } from "../shared/battery";

describe("Battery workspace", () => {
  it("clamps lux and estimates a finite charge time when light is available", () => {
    const estimate = estimatePhotovoltaicCharge(12_000, 300, 50);
    expect(estimate.lux).toBe(10_000);
    expect(estimate.photonFactor).toBe(1);
    expect(estimate.estimatedWatts).toBeGreaterThan(0);
    expect(estimate.minutesToFull).toBeGreaterThan(0);
  });

  it("reports zero-lux charging as unavailable instead of claiming a charge", () => {
    const estimate = estimatePhotovoltaicCharge(0, 300, 50);
    expect(estimate.estimatedWatts).toBe(0);
    expect(estimate.minutesToFull).toBeNull();
    expect(formatChargeTime(null)).toContain("0 lux");
  });

  it("exposes Battery under System Settings with both required modes and safety language", () => {
    const app = readFileSync(new URL("../client/src/App.tsx", import.meta.url), "utf8");
    const layout = readFileSync(new URL("../client/src/components/AppLayout.tsx", import.meta.url), "utf8");
    const settings = readFileSync(new URL("../client/src/pages/SettingsPage.tsx", import.meta.url), "utf8");
    const page = readFileSync(new URL("../client/src/pages/BatteryPage.tsx", import.meta.url), "utf8");
    expect(app).toContain('path="/settings/battery"');
    expect(layout).toContain('href="/settings/battery"');
    expect(settings).toContain('href="/settings/battery"');
    expect(page).toContain("Battery Saver Mode");
    expect(page).toContain("Charging Mode");
    expect(page).toContain("10,000 lux");
    expect(page).toContain("simulation");
    expect(page).toContain("cannot route photons");
  });
});
