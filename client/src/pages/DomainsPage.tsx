import { useMemo, useState } from "react";

export default function DomainsPage() {
  const [domain, setDomain] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const normalized = useMemo(() => domain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/$/, ""), [domain]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!normalized) return setMessage("Enter a domain name to search.");
    setMessage(`Domain registration request prepared for ${normalized}. Connect the Bonds Registrar service to complete registry purchase and provisioning.`);
  }

  return (
    <main className="min-h-screen bg-[#f8f4eb] text-[#19211e]">
      <section className="border-b border-[#17231e]/10 bg-[#1a2820] px-5 py-10 text-white md:px-10">
        <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Bonds Studio · Domains</p>
        <h1 className="mt-2 font-display text-4xl">Domain Registry</h1>
        <p className="mt-3 max-w-2xl text-sm text-[#c8d5c9]">Search and manage domains through the Bonds Studio domain registry. Registration and DNS provisioning are handled by the connected registrar service.</p>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-8 md:px-10">
        <div className="border border-[#17231e]/10 bg-white p-6 shadow-sm">
          <form onSubmit={submit} className="flex flex-col gap-3 md:flex-row">
            <input aria-label="Domain name" value={domain} onChange={e => { setDomain(e.target.value); setMessage(null); }} placeholder="example.com" className="min-h-12 flex-1 border border-[#17231e]/15 bg-[#fbfaf6] px-4 text-sm outline-none focus:border-[#c9a84c]" />
            <button type="submit" className="min-h-12 bg-[#1a2820] px-6 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#2c5b48]">Search domain</button>
          </form>
          {message && <div className="mt-5 border border-[#c9a84c]/50 bg-[#f4ead1] p-4 text-sm">{message}</div>}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[['Registration','Register eligible domain names through the connected Bonds Registrar.'],['DNS','Manage authoritative DNS records and delegation.'],['GitHub Pages','Provision a custom CNAME after domain registration.']].map(([title, text]) => <article key={title} className="border border-[#17231e]/10 bg-white/70 p-5"><h2 className="font-display text-xl">{title}</h2><p className="mt-2 text-xs leading-5 text-[#657068]">{text}</p></article>)}
        </div>
      </section>
    </main>
  );
}
