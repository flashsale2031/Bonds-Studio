import { FormEvent, useEffect, useMemo, useState } from "react";
import { LoaderCircle, MapPin, RefreshCw, Search, Send } from "lucide-react";
import { WORLD_LOCATIONS_DATA_UPDATED, type WorldLocation, worldLocations } from "./data/worldLocations";

export type ContactForEarth = { id: number; name: string; phoneNumber: string; email?: string | null; address?: string | null; notes?: string | null; latitude?: string | number | null; longitude?: string | number | null };

type Pin = { id: number; name: string; address: string; lat: number; lon: number };
type EarthCenter = { lat: number; lon: number };
const ADDRESS_LABEL = /(?:^|\n)\s*(?:address|location)\s*:\s*(.+?)(?=\n\s*\w[\w ]*\s*:|$)/i;
const STREET = /\b\d{1,6}\s+[A-Za-z0-9.'-]+(?:\s+[A-Za-z0-9.'-]+){1,7}\s+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Way|Court|Ct|Place|Pl|Parkway|Pkwy|Highway|Hwy)\b[^\n]*/i;
const timeOptions = ["LIVE", ...Array.from({ length: 24 }, (_, hour) => `${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`)];
const countryNames = new Intl.DisplayNames(["en"], { type: "region" });

function countryName(code: string) { return countryNames.of(code) || code; }
function coordinate(value: number, positive: string, negative: string) { return `${Math.abs(value).toFixed(2)}°${value >= 0 ? positive : negative}`; }
function addressOf(c: ContactForEarth) {
  if (c.address?.trim()) return c.address.trim();
  const notes = c.notes?.trim() || "";
  return notes.match(ADDRESS_LABEL)?.[1]?.trim() || notes.match(STREET)?.[0]?.trim() || "";
}
function project(lat: number, lon: number, center: EarthCenter) {
  const phi = lat * Math.PI / 180, phi0 = center.lat * Math.PI / 180, lambda = (lon - center.lon) * Math.PI / 180;
  const x = Math.cos(phi) * Math.sin(lambda);
  const y = Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * Math.cos(phi) * Math.cos(lambda);
  const z = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * Math.cos(phi) * Math.cos(lambda);
  return { left: 50 + x * 49, top: 50 - y * 49, visible: z > -0.04 };
}
async function geocode(address: string, signal: AbortSignal) {
  const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(address)}`, { signal, headers: { Accept: "application/json" } });
  if (!r.ok) throw new Error(`Geocoder ${r.status}`);
  const rows = await r.json() as Array<{ lat: string; lon: string }>;
  return rows[0] ? { lat: Number(rows[0].lat), lon: Number(rows[0].lon) } : null;
}

export default function ContactEarthGlobe({ contacts }: { contacts: ContactForEarth[] }) {
  const [pins, setPins] = useState<Pin[]>([]), [failed, setFailed] = useState<string[]>([]), [loading, setLoading] = useState(false), [center, setCenter] = useState<EarthCenter>({ lat: 0, lon: -20 }), [selected, setSelected] = useState<number | null>(null);
  const [locationQuery, setLocationQuery] = useState(""), [locationCommandDirty, setLocationCommandDirty] = useState(false), [selectedTime, setSelectedTime] = useState("LIVE"), [appliedTime, setAppliedTime] = useState("LIVE"), [commandLocation, setCommandLocation] = useState<WorldLocation | null>(null), [commandMessage, setCommandMessage] = useState("");
  const addressContacts = useMemo(() => contacts.map(c => ({ c, address: addressOf(c) })).filter(x => x.address), [contacts]);
  const suggestions = useMemo(() => {
    const needle = locationQuery.trim().toLowerCase();
    if (!needle) return [];
    return worldLocations.filter(location => `${location.name} ${location.countryCode} ${countryName(location.countryCode)}`.toLowerCase().includes(needle)).slice(0, 6);
  }, [locationQuery]);

  useEffect(() => {
    const controller = new AbortController(); let cancelled = false;
    async function run() {
      setLoading(true); setPins([]); setFailed([]);
      const next: Pin[] = [], bad: string[] = [];
      for (const item of addressContacts) {
        if (cancelled) return;
        try {
          const coords = (item.c.latitude != null && item.c.longitude != null) ? { lat: Number(item.c.latitude), lon: Number(item.c.longitude) } : await geocode(item.address, controller.signal);
          if (coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lon)) next.push({ id: item.c.id, name: item.c.name, address: item.address, ...coords }); else bad.push(item.c.name);
        } catch { if (!cancelled) bad.push(item.c.name); }
        await new Promise(resolve => window.setTimeout(resolve, 1000));
      }
      if (!cancelled) { setPins(next); setFailed(bad); setLoading(false); }
    }
    void run(); return () => { cancelled = true; controller.abort(); };
  }, [addressContacts]);

  function submitEarthCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const needle = locationQuery.trim().toLowerCase();
    if (!needle) { setCommandMessage("Enter a city or populated place to frame the scene."); return; }
    const exact = worldLocations.find(location => location.name.toLowerCase() === needle || `${location.name}, ${countryName(location.countryCode)}`.toLowerCase() === needle || `${location.name}, ${location.countryCode}`.toLowerCase() === needle);
    const candidate = exact || worldLocations.find(location => `${location.name} ${location.countryCode} ${countryName(location.countryCode)}`.toLowerCase().includes(needle));
    if (!candidate) { setCommandMessage(`No global location matched “${locationQuery.trim()}”. Try a city, town, or country code.`); return; }
    setCenter({ lat: candidate.lat, lon: candidate.lng });
    setCommandLocation(candidate);
    setAppliedTime(selectedTime);
    setLocationQuery(`${candidate.name}, ${countryName(candidate.countryCode)}`);
    setLocationCommandDirty(false);
    setSelected(null);
    setCommandMessage(`Centered on ${candidate.name}, ${countryName(candidate.countryCode)} at ${selectedTime === "LIVE" ? "live orbital time" : selectedTime}.`);
  }

  return <section className="border border-[#17231e]/10 bg-[#f9f5ec] overflow-hidden">
    <div className="border-b border-[#17231e]/10 bg-[#1a2820] p-5 text-white">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div><div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#c9a84c]" /><span className="font-ledger text-[10px] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Contact Earth · command menu</span></div><h2 className="mt-1 font-display text-2xl">Contact addresses on Earth</h2><p className="mt-1 text-xs text-[#c8d5c9]">Pins link to Phone contacts. Location commands use {worldLocations.length.toLocaleString()} populated places from the global city array.</p></div>
        <button onClick={() => { setPins([]); setFailed([]); }} className="inline-flex items-center justify-center gap-2 border border-white/15 px-3 py-2 text-xs"><RefreshCw className="h-3.5 w-3.5" />Refresh</button>
      </div>
      <form className="mt-5 grid gap-3 border border-white/10 bg-black/10 p-3 lg:grid-cols-[minmax(220px,1fr)_180px_auto] lg:items-end" onSubmit={submitEarthCommand} aria-label="Earth location and time command">
        <div className="relative"><label htmlFor="contact-earth-location" className="font-ledger text-[9px] uppercase tracking-[0.18em] text-[#c9a84c]">Location</label><div className="mt-1 flex items-center gap-2 border border-white/15 bg-[#071b26]/65 px-3"><Search className="h-3.5 w-3.5 shrink-0 text-[#c9a84c]" /><input id="contact-earth-location" value={locationQuery} onChange={event => { setLocationQuery(event.target.value); setLocationCommandDirty(true); setCommandMessage(""); }} placeholder="City or populated place" autoComplete="off" aria-autocomplete="list" aria-expanded={locationCommandDirty && suggestions.length > 0} aria-controls="contact-earth-location-suggestions" className="min-w-0 flex-1 bg-transparent py-2.5 text-xs text-white outline-none placeholder:text-white/40" /><span className="hidden font-ledger text-[8px] uppercase tracking-widest text-white/35 md:inline">world array</span></div>{locationCommandDirty && suggestions.length > 0 && <div id="contact-earth-location-suggestions" role="listbox" className="absolute left-0 right-0 top-full z-30 mt-2 max-h-64 overflow-auto border border-[#c9a84c]/50 bg-[#10251f] p-1 shadow-2xl">{suggestions.map(location => <button type="button" key={location.id} role="option" onClick={() => { setLocationQuery(`${location.name}, ${countryName(location.countryCode)}`); setLocationCommandDirty(true); }} className="grid w-full gap-1 border-b border-white/10 px-3 py-2 text-left last:border-0 hover:bg-white/10"><span className="text-xs font-semibold text-white">{location.name}</span><small className="font-ledger text-[8px] uppercase tracking-wider text-white/55">{countryName(location.countryCode)} · {coordinate(location.lat, "N", "S")} · {coordinate(location.lng, "E", "W")}</small></button>)}</div>}</div>
        <label htmlFor="contact-earth-time" className="font-ledger text-[9px] uppercase tracking-[0.18em] text-[#c9a84c]">Time<select id="contact-earth-time" value={selectedTime} onChange={event => setSelectedTime(event.target.value)} className="mt-1 block w-full border border-white/15 bg-[#071b26]/65 px-3 py-2.5 text-xs text-white outline-none">{timeOptions.map(time => <option key={time}>{time}</option>)}</select></label>
        <button type="submit" className="inline-flex min-h-[39px] items-center justify-center gap-2 bg-[#c9a84c] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#17231e] hover:bg-[#e0c66c]"><Send className="h-3.5 w-3.5" />Enter</button>
      </form>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 font-ledger text-[8px] uppercase tracking-wider text-white/50"><span>{commandMessage || (commandLocation ? `Centered scene · ${commandLocation.name}, ${countryName(commandLocation.countryCode)}` : "Submit a location and time to center the scene")}</span><span>{commandLocation ? `${appliedTime === "LIVE" ? "LIVE" : appliedTime} · ${coordinate(commandLocation.lat, "N", "S")} · ${coordinate(commandLocation.lng, "E", "W")}` : `Source refresh · ${WORLD_LOCATIONS_DATA_UPDATED}`}</span></div>
    </div>
    <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-full bg-[#071b26] shadow-[inset_0_0_70px_rgba(0,0,0,.8),0_20px_55px_rgba(26,40,32,.18)] touch-none" onPointerMove={e => { if (e.buttons === 1) setCenter(value => ({ lon: value.lon - e.movementX * .35, lat: Math.max(-75, Math.min(75, value.lat + e.movementY * .25)) })); }} onWheel={e => { e.preventDefault(); setCenter(value => ({ ...value, lon: value.lon + e.deltaY * .12 })); }}>
        <div className="absolute inset-0 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('/earth-blue-marble.png')", backgroundPosition: `${50 + center.lon / 3.6}% ${50 - center.lat / 3.6}%` }} /><div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,.22),transparent_20%,rgba(0,0,0,.46)_75%)]" />
        {pins.map(pin => { const p = project(pin.lat, pin.lon, center); if (!p.visible) return null; return <button key={pin.id} title={`${pin.name} — ${pin.address}`} onClick={() => setSelected(pin.id)} className="absolute z-10 -translate-x-1/2 -translate-y-full" style={{ left: `${p.left}%`, top: `${p.top}%` }}><span className={`block h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_3px_rgba(201,168,76,.35)] ${selected === pin.id ? "scale-150" : ""}`} style={{ background: "#c9a84c" }} /></button>; })}
        {commandLocation && <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"><span className="block h-5 w-5 rounded-full border-2 border-white bg-[#c9a84c] shadow-[0_0_0_6px_rgba(201,168,76,.25),0_0_28px_rgba(201,168,76,.8)]" /><span className="absolute left-1/2 top-7 -translate-x-1/2 whitespace-nowrap border border-white/20 bg-[#071b26]/80 px-2 py-1 font-ledger text-[8px] uppercase tracking-widest text-white">Centered · {commandLocation.name}</span></div>}
        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 border border-white/15 bg-[#071b26]/75 px-3 py-1 font-ledger text-[9px] uppercase tracking-widest text-white/80">Drag to rotate · wheel to turn</span>
      </div>
      <aside><div className="border border-[#17231e]/10 bg-white/50 p-4"><div className="grid grid-cols-2 gap-3"><div><p className="font-ledger text-[9px] uppercase tracking-widest text-[#6a736b]">Contacts</p><p className="mt-1 text-xl font-bold">{contacts.length}</p></div><div><p className="font-ledger text-[9px] uppercase tracking-widest text-[#6a736b]">Mapped</p><p className="mt-1 text-xl font-bold text-[#2c5b48]">{pins.length}</p></div></div>{commandLocation && <div className="mt-4 border-t border-[#17231e]/10 pt-3"><p className="font-ledger text-[9px] uppercase tracking-widest text-[#8a6e1e]">Centered scene</p><p className="mt-1 text-sm font-bold">{commandLocation.name}</p><p className="mt-1 text-[10px] text-[#6a736b]">{countryName(commandLocation.countryCode)} · {coordinate(commandLocation.lat, "N", "S")} · {coordinate(commandLocation.lng, "E", "W")}</p><p className="mt-1 font-ledger text-[9px] uppercase tracking-widest text-[#2c5b48]">{appliedTime === "LIVE" ? "Live orbital time" : `${appliedTime} local`}</p></div>}{loading && <p className="mt-3 flex items-center gap-2 text-[10px] text-[#6a736b]"><LoaderCircle className="h-3.5 w-3.5 animate-spin" />Geocoding addresses…</p>}{failed.length > 0 && <p className="mt-3 text-[10px] leading-4 text-[#8a6e1e]">Could not map: {failed.join(", ")}</p>}{!addressContacts.length && <p className="mt-3 text-[10px] leading-4 text-[#6a736b]">No contact addresses were found.</p>}</div><div className="mt-4 max-h-[360px] space-y-2 overflow-auto">{pins.map(pin => <button key={pin.id} onClick={() => setSelected(pin.id)} className={`w-full border p-3 text-left ${selected === pin.id ? "border-[#c9a84c] bg-[#f4ead1]" : "border-[#17231e]/10 bg-white/40"}`}><p className="text-xs font-semibold">{pin.name}</p><p className="mt-1 text-[10px] leading-4 text-[#6a736b]">{pin.address}</p><p className="mt-1 font-ledger text-[9px] uppercase tracking-widest text-[#8a6e1e]">{pin.lat.toFixed(4)} · {pin.lon.toFixed(4)}</p></button>)}</div></aside>
    </div>
  </section>;
}
