import React, { useEffect, useMemo, useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";
import { BatteryCharging, BatteryMedium, CheckCircle2, Info, Lightbulb, ShieldCheck, Sun, Zap } from "lucide-react";
import { DEFAULT_NITS, MAX_LUX, estimatePhotovoltaicCharge, formatChargeTime } from "@shared/battery";

interface BatteryManagerLike extends EventTarget {
  level: number;
  charging: boolean;
  addEventListener(type: "levelchange" | "chargingchange", listener: () => void): void;
  removeEventListener(type: "levelchange" | "chargingchange", listener: () => void): void;
}

type BatteryMode = "saver" | "charging";

export default function BatteryPage() {
  const [mode, setMode] = useState<BatteryMode>("charging");
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState(false);
  const [batteryApiAvailable, setBatteryApiAvailable] = useState(true);
  const [lux, setLux] = useState(1_000);
  const [nits, setNits] = useState(DEFAULT_NITS);
  const [saverEnabled, setSaverEnabled] = useState(() => {
    try { return window.localStorage.getItem("bonds-studio-battery-saver") === "true"; } catch { return false; }
  });

  useEffect(() => {
    let manager: BatteryManagerLike | undefined;
    const update = () => { if (manager) { setBatteryLevel(Math.round(manager.level * 100)); setIsCharging(manager.charging); } };
    const load = async () => {
      const getBattery = (navigator as Navigator & { getBattery?: () => Promise<BatteryManagerLike> }).getBattery;
      if (!getBattery) { setBatteryApiAvailable(false); return; }
      try { manager = await getBattery(); update(); manager.addEventListener("levelchange", update); manager.addEventListener("chargingchange", update); }
      catch { setBatteryApiAvailable(false); }
    };
    void load();
    return () => { if (manager) { manager.removeEventListener("levelchange", update); manager.removeEventListener("chargingchange", update); } };
  }, []);

  const currentPercent = batteryLevel ?? 50;
  const estimate = useMemo(() => estimatePhotovoltaicCharge(lux, nits, currentPercent), [lux, nits, currentPercent]);

  function toggleSaver(enabled: boolean) {
    setSaverEnabled(enabled);
    window.localStorage.setItem("bonds-studio-battery-saver", String(enabled));
  }

  return <AppLayout title="Battery" subtitle="Battery Saver and photovoltaic charging simulation.">
    <div className="max-w-4xl space-y-6">
      <div className="flex flex-col gap-4 border-b border-[#17231e]/10 pb-5 md:flex-row md:items-end md:justify-between">
        <div><div className="mb-2 flex items-center gap-3"><div className="grid h-10 w-10 place-items-center bg-[#2c5b48] text-white"><BatteryCharging className="h-5 w-5" /></div><h1 className="font-display text-4xl tracking-[-0.03em] text-[#19211e]">Battery</h1></div><p className="text-sm text-[#5b655e]">Power preferences nested under System Settings.</p></div>
        <Link href="/settings"><Button variant="outline" className="rounded-none border-[#17231e]/20 bg-transparent">Back to System Settings</Button></Link>
      </div>

      <div className="flex gap-1 border-b border-[#17231e]/10" role="tablist" aria-label="Battery modes">
        <button role="tab" aria-selected={mode === "saver"} onClick={() => setMode("saver")} className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] ${mode === "saver" ? "border-[#2c5b48] text-[#2c5b48]" : "border-transparent text-[#6a736b]"}`}><ShieldCheck className="h-4 w-4" />Battery Saver</button>
        <button role="tab" aria-selected={mode === "charging"} onClick={() => setMode("charging")} className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] ${mode === "charging" ? "border-[#2c5b48] text-[#2c5b48]" : "border-transparent text-[#6a736b]"}`}><Sun className="h-4 w-4" />Charging Mode</button>
      </div>

      {mode === "saver" && <section className="space-y-5"><div className="border border-[#17231e]/10 bg-[#f9f5ec] p-6"><div className="flex items-center justify-between gap-5"><div><h2 className="font-display text-2xl text-[#19211e]">Battery Saver Mode</h2><p className="mt-1 max-w-xl text-sm leading-6 text-[#5b655e]">Reduce background activity and preserve battery-friendly workspace behavior. This setting is stored in this browser and does not modify operating-system power controls.</p></div><Switch checked={saverEnabled} onCheckedChange={toggleSaver} aria-label="Enable Battery Saver Mode" /></div><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="border border-[#17231e]/10 bg-white p-4"><p className="font-ledger text-[10px] uppercase tracking-[0.14em] text-[#6a736b]">Status</p><p className="mt-2 font-semibold text-[#2c5b48]">{saverEnabled ? "Enabled" : "Ready"}</p></div><div className="border border-[#17231e]/10 bg-white p-4"><p className="font-ledger text-[10px] uppercase tracking-[0.14em] text-[#6a736b]">Battery</p><p className="mt-2 font-semibold text-[#19211e]">{batteryLevel === null ? "Unavailable" : `${batteryLevel}%`}</p></div><div className="border border-[#17231e]/10 bg-white p-4"><p className="font-ledger text-[10px] uppercase tracking-[0.14em] text-[#6a736b]">Charging</p><p className="mt-2 font-semibold text-[#19211e]">{isCharging ? "Connected" : "Not detected"}</p></div></div></div></section>}

      {mode === "charging" && <section className="space-y-5"><div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]"><div className="border border-[#17231e]/10 bg-[#f9f5ec] p-6"><div className="flex items-center justify-between"><div><p className="font-ledger text-[10px] uppercase tracking-[0.16em] text-[#6a736b]">Device telemetry</p><p className="mt-2 font-display text-4xl text-[#19211e]">{batteryLevel === null ? "—" : `${batteryLevel}%`}</p></div><BatteryMedium className="h-10 w-10 text-[#2c5b48]" /></div><div className="mt-5 h-3 overflow-hidden bg-[#e8e1d5]"><div className="h-full bg-[#2c5b48] transition-all" style={{ width: `${batteryLevel ?? 0}%` }} /></div><p className="mt-3 text-xs text-[#6a736b]">{batteryApiAvailable ? (isCharging ? "The browser reports an external charging state." : "The browser reports no external charging state.") : "Battery Status API is unavailable in this browser; the estimate uses a 50% planning value."}</p></div><div className="border border-[#17231e]/10 bg-[#f9f5ec] p-6"><p className="font-ledger text-[10px] uppercase tracking-[0.16em] text-[#6a736b]">Estimated full-charge time</p><p className="mt-3 font-display text-3xl text-[#2c5b48]">{formatChargeTime(estimate.minutesToFull)}</p><p className="mt-2 text-xs leading-5 text-[#6a736b]">Based on the simulation inputs below, not a hardware measurement.</p></div></div><div className="border border-[#17231e]/10 bg-[#f9f5ec] p-6"><div className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-[#c9a84c]" /><h2 className="font-display text-2xl text-[#19211e]">Photovoltaic charging model</h2></div><p className="mt-2 max-w-2xl text-sm leading-6 text-[#5b655e]">Lux is treated as an educational photon-intensity input to a hypothetical photovoltaic panel. The model clamps light from 0 to 10,000 lux and reports an estimated charge rate.</p><div className="mt-6 grid gap-6 md:grid-cols-2"><div><div className="flex items-center justify-between"><Label htmlFor="lux">Captured light</Label><span className="font-mono text-sm text-[#2c5b48]">{lux.toLocaleString()} lux</span></div><Slider id="lux" min={0} max={MAX_LUX} step={100} value={[lux]} onValueChange={value => setLux(value[0] ?? 0)} className="mt-5" /><div className="mt-2 flex justify-between text-[10px] text-[#6a736b]"><span>0 lux</span><span>10,000 lux</span></div></div><div><div className="flex items-center justify-between"><Label htmlFor="nits">Standard display setting</Label><span className="font-mono text-sm text-[#2c5b48]">{nits} nits</span></div><Slider id="nits" min={100} max={1000} step={10} value={[nits]} onValueChange={value => setNits(value[0] ?? DEFAULT_NITS)} className="mt-5" /><div className="mt-2 flex justify-between text-[10px] text-[#6a736b]"><span>100 nits</span><span>1,000 nits</span></div></div></div><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="border border-[#17231e]/10 bg-white p-4"><p className="font-ledger text-[10px] uppercase tracking-[0.14em] text-[#6a736b]">Photon factor</p><p className="mt-2 font-semibold text-[#19211e]">{(estimate.photonFactor * 100).toFixed(1)}%</p></div><div className="border border-[#17231e]/10 bg-white p-4"><p className="font-ledger text-[10px] uppercase tracking-[0.14em] text-[#6a736b]">Estimated input</p><p className="mt-2 font-semibold text-[#19211e]">{estimate.estimatedWatts.toFixed(2)} W</p></div><div className="border border-[#17231e]/10 bg-white p-4"><p className="font-ledger text-[10px] uppercase tracking-[0.14em] text-[#6a736b]">Remaining energy</p><p className="mt-2 font-semibold text-[#19211e]">{estimate.remainingWh.toFixed(2)} Wh</p></div></div></div><div className="flex gap-3 border border-[#c9a84c]/35 bg-[#f4ead1] p-4 text-xs leading-5 text-[#6f5b26]"><Info className="mt-0.5 h-4 w-4 shrink-0" /><p>This is a simulation and planning aid. A browser cannot route photons, lux, or screen brightness into a device’s charging circuit. Physical charging requires photovoltaic cells, a charge controller, electrical isolation, and compatible hardware; the Battery page does not activate or claim any such hardware.</p></div></section>}
    </div>
  </AppLayout>;
}
