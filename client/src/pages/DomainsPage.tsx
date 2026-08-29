import { useMemo, useState } from "react";

const API = (import.meta.env.VITE_REGISTRAR_API_BASE || "").replace(/\/$/, "");
const endpoint = (path: string) => `${API}${path}`;

export default function DomainsPage() {
  const [domain, setDomain] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [busy, setBusy] = useState(false);
  const normalized = useMemo(() => domain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/$/, ""), [domain]);

  async function call(path: string, body: unknown) {
    const response = await fetch(endpoint(path), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || data.message || `Registrar request failed (${response.status})`);
    return data;
  }

  async function check() {
    if (!normalized) return setMessage("Enter a domain name to search.");
    setBusy(true); setMessage(null); setResult(null);
    try { const data = await call("/api/registrar/check", { name: normalized }); setResult(data); setMessage(data.available ? `${normalized} is available.` : `${normalized} is not available.`); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Registrar unavailable."); }
    finally { setBusy(false); }
  }

  async function registerDomain() {
    setBusy(true); setMessage(null);
    try { const data = await call("/api/registrar/register", { name: normalized, years: 1, autoRenew: true, privacy: true }); setResult(data); setMessage(`Registration request submitted for ${normalized}.`); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Registration failed."); }
    finally { setBusy(false); }
  }

  return <main className="min-h-screen bg-[#f8f4eb] text-[#19211e]"><section className="border-b border-[#17231e]/10 bg-[#1a2820] px-5 py-10 text-white md:px-10"><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Bonds Studio · Domains · Bonds Registrar</p><h1 className="mt-2 font-display text-4xl">Domain Registry</h1><p className="mt-3 max-w-2xl text-sm text-[#c8d5c9]">The Domains page is connected to the server-side registrar adapter. Production registration uses authorized registrar/EPP credentials; no registrar secrets are exposed to this page.</p></section><section className="mx-auto max-w-5xl px-5 py-8 md:px-10"><div className="border border-[#17231e]/10 bg-white p-6 shadow-sm"><form onSubmit={e => { e.preventDefault(); void check(); }} className="flex flex-col gap-3 md:flex-row"><input aria-label="Domain name" value={domain} onChange={e => { setDomain(e.target.value); setMessage(null); }} placeholder="example.com" className="min-h-12 flex-1 border border-[#17231e]/15 bg-[#fbfaf6] px-4 text-sm outline-none focus:border-[#c9a84c]"/><button disabled={busy} type="submit" className="min-h-12 bg-[#1a2820] px-6 text-xs font-bold uppercase tracking-widest text-white disabled:opacity-50">{busy ? "Checking…" : "Check availability"}</button></form>{message && <div className="mt-5 border border-[#c9a84c]/50 bg-[#f4ead1] p-4 text-sm">{message}</div>}{result?.available && <button disabled={busy} onClick={() => void registerDomain()} className="mt-4 inline-flex min-h-11 items-center justify-center bg-[#2c5b48] px-5 text-xs font-bold uppercase tracking-wider text-white disabled:opacity-50">Register {normalized}</button>}</div><div className="mt-6 grid gap-4 md:grid-cols-3">{[['Registration','Availability and registration requests are routed through Bonds Registrar.'],['EPP','RFC 5730-series EPP client is available for authorized registry credentials.'],['DNS / Hosting','After registration, Cloudflare DNS/Pages synchronization can provision the zone and custom domain.']].map(([title,text]) => <article key={title} className="border border-[#17231e]/10 bg-white/70 p-5"><h2 className="font-display text-xl">{title}</h2><p className="mt-2 text-xs leading-5 text-[#6a736b]">{text}</p></article>)}</div></section></main>;
}
