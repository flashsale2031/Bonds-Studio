import React, { useEffect, useMemo, useState } from "react";
import { LoaderCircle, MapPin, RefreshCw } from "lucide-react";
import earthTexture from "./earth-blue-marble.png";

type ContactLike = {
  id: number;
  name: string;
  phoneNumber: string;
  email?: string | null;
  notes?: string | null;
  address?: string | null;
};

type Pin = {
  id: number;
  name: string;
  address: string;
  lat: number;
  lon: number;
};

const ADDRESS_LABEL = /(?:^|\n)\s*(?:address|location)\s*:\s*(.+?)(?=\n\s*\w[\w ]*\s*:|$)/i;
const STREET_PATTERN = /\b\d{1,6}\s+[A-Za-z0-9.'-]+(?:\s+[A-Za-z0-9.'-]+){1,7}\s+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Way|Court|Ct|Place|Pl|Parkway|Pkwy|Highway|Hwy)\b[^\n]*/i;

function contactAddress(contact: ContactLike) {
  if (contact.address?.trim()) return contact.address.trim();
  const notes = contact.notes?.trim() || "";
  const labeled = notes.match(ADDRESS_LABEL)?.[1]?.trim();
  if (labeled) return labeled;
  return notes.match(STREET_PATTERN)?.[0]?.trim() || "";
}

function project(lat: number, lon: number, centerLon: number) {
  const latRad = lat * Math.PI / 180;
  const lonRad = (lon - centerLon) * Math.PI / 180;
  const x = Math.cos(latRad) * Math.sin(lonRad);
  const y = Math.sin(latRad);
  const z = Math.cos(latRad) * Math.cos(lonRad);
  return { x: 50 + x * 49, y: 50 - y * 49, visible: z > -0.03 };
}

async function geocode(address: string, signal?: AbortSignal) {
  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&addressdetails=1&q=${encodeURIComponent(address)}`;
  const response = await fetch(url, { signal, headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Geocoder returned ${response.status}`);
  const rows = await response.json() as Array<{ lat: string; lon: string }>;
  if (!rows[0]) return null;
  return { lat: Number(rows[0].lat), lon: Number(rows[0].lon) };
}

export function ContactEarthGlobe({ contacts }: { contacts: ContactLike[] }) {
  const [centerLon, setCenterLon] = useState(-20);
  const [pins, setPins] = useState<Pin[]>([]);
  const [failed, setFailed] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const addressContacts = useMemo(() => contacts
    .map(contact => ({ contact, address: contactAddress(contact) }))
    .filter(item => item.address.length > 0), [contacts]);

  async function refreshPins() {
    const controller = new AbortController();
    setLoading(true);
    setFailed([]);
    setPins([]);
    try {
      const nextPins: Pin[] = [];
      const failures: string[] = [];
      for (const item of addressContacts) {
        try {
          const result = await geocode(item.address, controller.signal);
          if (result && Number.isFinite(result.lat) && Number.isFinite(result.lon)) {
            nextPins.push({ id: item.contact.id, name: item.contact.name, address: item.address, ...result });
          } else failures.push(item.contact.name);
        } catch {
          failures.push(item.contact.name);
        }
        // Nominatim asks clients to keep requests to roughly one per second.
        await new Promise(resolve => window.setTimeout(resolve, 1000));
      }
      setPins(nextPins);
      setFailed(failures);
    } finally {
      setLoading(false);
    }
    return () => controller.abort();
  }

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    async function run() {
      if (!addressContacts.length) {
        setPins([]);
        setFailed([]);
        return;
      }
      setLoading(true);
      setFailed([]);
      const nextPins: Pin[] = [];
      const failures: string[] = [];
      for (const item of addressContacts) {
        if (cancelled) return;
        try {
          const result = await geocode(item.address, controller.signal);
          if (result && Number.isFinite(result.lat) && Number.isFinite(result.lon)) nextPins.push({ id: item.contact.id, name: item.contact.name, address: item.address, ...result });
          else failures.push(item.contact.name);
        } catch {
          if (!cancelled) failures.push(item.contact.name);
        }
        if (!cancelled) await new Promise(resolve => window.setTimeout(resolve, 1000));
      }
      if (!cancelled) { setPins(nextPins); setFailed(failures); setLoading(false); }
    }
    void run();
    return () => { cancelled = true; controller.abort(); };
  }, [addressContacts]);

  return (
    <section className="border border-[#17231e]/10 bg-[#f9f5ec] overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-[#17231e]/10 bg-[#1a2820] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#c9a84c]" /><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.18em] text-[#c9a84c]">Contact Earth</p></div>
          <h2 className="mt-1 font-display text-2xl">Addresses on the 3D Earth</h2>
          <p className="mt-1 text-xs text-[#c8d5c9]">Only contacts with an address or an address-labeled note are geocoded.</p>
        </div>
        <button onClick={() => void refreshPins()} disabled={loading || !addressContacts.length} className="inline-flex items-center justify-center gap-2 border border-white/15 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 disabled:opacity-50"><RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />Refresh pins</button>
      </div>
      <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-full bg-[#071b26] shadow-[inset_0_0_70px_rgba(0,0,0,.8),0_20px_55px_rgba(26,40,32,.18)] touch-none" onWheel={event => { event.preventDefault(); setCenterLon(value => value + event.deltaY * 0.12); }} onPointerMove={event => { if (event.buttons === 1) setCenterLon(value => value - event.movementX * 0.35); }}>
          <div className="absolute inset-0 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${earthTexture})`, transform: "scale(1.03)" }} />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,.22),transparent_20%,rgba(0,0,0,.42)_75%)]" />
          {pins.map(pin => { const point = project(pin.lat, pin.lon, centerLon); if (!point.visible) return null; const active = selected === pin.id; return <button key={pin.id} title={`${pin.name} — ${pin.address}`} onClick={() => setSelected(pin.id)} className="absolute z-10 -translate-x-1/2 -translate-y-full" style={{ left: `${point.x}%`, top: `${point.y}%` }}><span className={`block h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_3px_rgba(201,168,76,.35)] ${active ? "scale-150" : ""}`} style={{ background: "#c9a84c" }} /><span className="sr-only">{pin.name}</span></button>; })}
          <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center"><span className="border border-white/15 bg-[#071b26]/70 px-3 py-1 font-ledger text-[9px] uppercase tracking-widest text-white/80">Drag to rotate · wheel to turn</span></div>
        </div>
        <aside className="space-y-4">
          <div className="border border-[#17231e]/10 bg-white/50 p-4"><div className="grid grid-cols-2 gap-3"><div><p className="font-ledger text-[9px] uppercase tracking-widest text-[#6a736b]">Contacts</p><p className="mt-1 text-xl font-bold text-[#19211e]">{contacts.length}</p></div><div><p className="font-ledger text-[9px] uppercase tracking-widest text-[#6a736b]">Mapped</p><p className="mt-1 text-xl font-bold text-[#2c5b48]">{pins.length}</p></div></div>{loading && <p className="mt-3 flex items-center gap-2 text-[10px] text-[#6a736b]"><LoaderCircle className="h-3.5 w-3.5 animate-spin" />Geocoding addresses…</p>}{failed.length > 0 && <p className="mt-3 text-[10px] leading-4 text-[#8a6e1e]">Could not geocode: {failed.join(", ")}</p>}{!addressContacts.length && <p className="mt-3 text-[10px] leading-4 text-[#6a736b]">No address fields were found in the current contacts. Add an address using an address field when the contact data source provides one, or prefix an existing note with “Address:”.</p>}</div>
          <div className="max-h-[360px] space-y-2 overflow-auto pr-1">{pins.map(pin => <button key={pin.id} onClick={() => setSelected(pin.id)} className={`w-full border p-3 text-left transition ${selected === pin.id ? "border-[#c9a84c] bg-[#f4ead1]" : "border-[#17231e]/10 bg-white/40 hover:border-[#2c5b48]/30"}`}><div className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2c5b48]" /><div className="min-w-0"><p className="truncate text-xs font-semibold text-[#19211e]">{pin.name}</p><p className="mt-1 text-[10px] leading-4 text-[#6a736b]">{pin.address}</p><p className="mt-1 font-ledger text-[9px] uppercase tracking-widest text-[#8a6e1e]">{pin.lat.toFixed(4)} · {pin.lon.toFixed(4)}</p></div></div></button>)}</div>
        </aside>
      </div>
    </section>
  );
}
