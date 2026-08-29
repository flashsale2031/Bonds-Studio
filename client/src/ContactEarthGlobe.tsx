import { useEffect, useMemo, useState } from "react";
import { LoaderCircle, MapPin, RefreshCw } from "lucide-react";

export type ContactForEarth = { id: number; name: string; phoneNumber: string; email?: string | null; address?: string | null; notes?: string | null; latitude?: string | number | null; longitude?: string | number | null };

type Pin = { id: number; name: string; address: string; lat: number; lon: number };
const ADDRESS_LABEL = /(?:^|\n)\s*(?:address|location)\s*:\s*(.+?)(?=\n\s*\w[\w ]*\s*:|$)/i;
const STREET = /\b\d{1,6}\s+[A-Za-z0-9.'-]+(?:\s+[A-Za-z0-9.'-]+){1,7}\s+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Way|Court|Ct|Place|Pl|Parkway|Pkwy|Highway|Hwy)\b[^\n]*/i;

function addressOf(c: ContactForEarth) {
  if (c.address?.trim()) return c.address.trim();
  const notes = c.notes?.trim() || "";
  return notes.match(ADDRESS_LABEL)?.[1]?.trim() || notes.match(STREET)?.[0]?.trim() || "";
}
function project(lat: number, lon: number, center: number) {
  const p = lat * Math.PI / 180, l = (lon - center) * Math.PI / 180;
  const x = Math.cos(p) * Math.sin(l), y = Math.sin(p), z = Math.cos(p) * Math.cos(l);
  return { left: 50 + x * 49, top: 50 - y * 49, visible: z > -0.04 };
}
async function geocode(address: string, signal: AbortSignal) {
  const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(address)}`, { signal, headers: { Accept: "application/json" } });
  if (!r.ok) throw new Error(`Geocoder ${r.status}`);
  const rows = await r.json() as Array<{ lat: string; lon: string }>;
  return rows[0] ? { lat: Number(rows[0].lat), lon: Number(rows[0].lon) } : null;
}

export default function ContactEarthGlobe({ contacts }: { contacts: ContactForEarth[] }) {
  const [pins, setPins] = useState<Pin[]>([]), [failed, setFailed] = useState<string[]>([]), [loading, setLoading] = useState(false), [center, setCenter] = useState(-20), [selected, setSelected] = useState<number | null>(null);
  const addressContacts = useMemo(() => contacts.map(c => ({ c, address: addressOf(c) })).filter(x => x.address), [contacts]);

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

  return <section className="border border-[#17231e]/10 bg-[#f9f5ec] overflow-hidden">
    <div className="flex flex-col gap-3 border-b border-[#17231e]/10 bg-[#1a2820] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
      <div><div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#c9a84c]" /><span className="font-ledger text-[10px] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Contact Earth</span></div><h2 className="mt-1 font-display text-2xl">Contact addresses on Earth</h2><p className="mt-1 text-xs text-[#c8d5c9]">Pins are linked to the Phone contact records in this workspace.</p></div>
      <button onClick={() => { setPins([]); setFailed([]); }} className="inline-flex items-center justify-center gap-2 border border-white/15 px-3 py-2 text-xs"><RefreshCw className="h-3.5 w-3.5" />Refresh</button>
    </div>
    <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-full bg-[#071b26] shadow-[inset_0_0_70px_rgba(0,0,0,.8),0_20px_55px_rgba(26,40,32,.18)] touch-none" onPointerMove={e => { if (e.buttons === 1) setCenter(v => v - e.movementX * .35); }} onWheel={e => { e.preventDefault(); setCenter(v => v + e.deltaY * .12); }}>
        <div className="absolute inset-0 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('/earth-blue-marble.png)'" }} /><div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,.22),transparent_20%,rgba(0,0,0,.46)_75%)]" />
        {pins.map(pin => { const p = project(pin.lat, pin.lon, center); if (!p.visible) return null; return <button key={pin.id} title={`${pin.name} — ${pin.address}`} onClick={() => setSelected(pin.id)} className="absolute z-10 -translate-x-1/2 -translate-y-full" style={{ left: `${p.left}%`, top: `${p.top}%` }}><span className={`block h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_3px_rgba(201,168,76,.35)] ${selected === pin.id ? "scale-150" : ""}`} style={{ background: "#c9a84c" }} /></button>; })}
        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 border border-white/15 bg-[#071b26]/75 px-3 py-1 font-ledger text-[9px] uppercase tracking-widest text-white/80">Drag to rotate · wheel to turn</span>
      </div>
      <aside><div className="border border-[#17231e]/10 bg-white/50 p-4"><div className="grid grid-cols-2 gap-3"><div><p className="font-ledger text-[9px] uppercase tracking-widest text-[#6a736b]">Contacts</p><p className="mt-1 text-xl font-bold">{contacts.length}</p></div><div><p className="font-ledger text-[9px] uppercase tracking-widest text-[#6a736b]">Mapped</p><p className="mt-1 text-xl font-bold text-[#2c5b48]">{pins.length}</p></div></div>{loading && <p className="mt-3 flex items-center gap-2 text-[10px] text-[#6a736b]"><LoaderCircle className="h-3.5 w-3.5 animate-spin" />Geocoding addresses…</p>}{failed.length > 0 && <p className="mt-3 text-[10px] leading-4 text-[#8a6e1e]">Could not map: {failed.join(", ")}</p>}{!addressContacts.length && <p className="mt-3 text-[10px] leading-4 text-[#6a736b]">No contact addresses were found.</p>}</div><div className="mt-4 max-h-[360px] space-y-2 overflow-auto">{pins.map(pin => <button key={pin.id} onClick={() => setSelected(pin.id)} className={`w-full border p-3 text-left ${selected === pin.id ? "border-[#c9a84c] bg-[#f4ead1]" : "border-[#17231e]/10 bg-white/40"}`}><p className="text-xs font-semibold">{pin.name}</p><p className="mt-1 text-[10px] leading-4 text-[#6a736b]">{pin.address}</p><p className="mt-1 font-ledger text-[9px] uppercase tracking-widest text-[#8a6e1e]">{pin.lat.toFixed(4)} · {pin.lon.toFixed(4)}</p></button>)}</div></aside>
    </div>
  </section>;
}
