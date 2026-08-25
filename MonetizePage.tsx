/**
 * MonetizePage — Bonds Studio Master UI
 * Full survey platform account manager: 6 platforms, account CRUD,
 * browser selector, sync, totals. All data stored in localStorage.
 */
import { AppLayout } from "@/components/AppLayout";
import { useState, useEffect } from "react";
import { Plus, Trash2, RefreshCw, LoaderCircle, ExternalLink, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { BrowserSelector, type BrowserInfo } from "@/components/BrowserSelector";
import { BrowserLaunchButton } from "@/components/BrowserLaunchButton";

type SurveyAccount = {
  id: string;
  name: string;
  email: string;
  earned: number;
  available: number;
  lastUpdated: string;
  browser: BrowserInfo;
};
type SurveyPlatform = {
  id: string;
  name: string;
  code: string;
  url: string;
  accounts: SurveyAccount[];
  totalEarned: number;
  totalAvailable: number;
};

const SURVEY_PLATFORMS: Omit<SurveyPlatform, "accounts" | "totalEarned" | "totalAvailable">[] = [
  { id: "top-surveys",    name: "TopSurveys",    code: "TS", url: "https://topsurveys.com" },
  { id: "five-surveys",   name: "Five Surveys",  code: "FS", url: "https://fivesurveys.com" },
  { id: "inbox-dollars",  name: "InboxDollars",  code: "ID", url: "https://inboxdollars.com" },
  { id: "survey-junkie",  name: "Survey Junkie", code: "SJ", url: "https://surveyjunkie.com" },
  { id: "swagbucks",      name: "Swagbucks",     code: "SB", url: "https://swagbucks.com" },
  { id: "freecash",       name: "Freecash",      code: "FC", url: "https://freecash.com" },
];
const STORAGE_KEY = "bonds-studio-monetize-v1";
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

const defaultBrowser: BrowserInfo = { type: "chrome", name: "Google Chrome" };

export default function MonetizePage() {
  const [platforms, setPlatforms] = useState<SurveyPlatform[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [syncing, setSyncing] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", earned: "", available: "", browser: defaultBrowser });

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPlatforms(JSON.parse(saved));
      } else {
        setPlatforms(SURVEY_PLATFORMS.map(p => ({ ...p, accounts: [], totalEarned: 0, totalAvailable: 0 })));
      }
    } catch { toast.error("Could not load monetize data"); }
    finally { setHydrated(true); }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(platforms));
  }, [platforms, hydrated]);

  const selectedPlatform = platforms.find(p => p.id === selectedId);

  function addAccount(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedId || !form.name.trim() || !form.email.trim()) { toast.error("Fill all required fields"); return; }
    const earned = Number(form.earned), available = Number(form.available);
    if (isNaN(earned) || isNaN(available) || earned < 0 || available < 0) { toast.error("Enter valid balances"); return; }
    const account: SurveyAccount = { id: crypto.randomUUID(), name: form.name.trim(), email: form.email.trim(), earned, available, lastUpdated: new Date().toISOString(), browser: form.browser };
    setPlatforms(cur => cur.map(p => {
      if (p.id !== selectedId) return p;
      const accs = [...p.accounts, account];
      return { ...p, accounts: accs, totalEarned: accs.reduce((s, a) => s + a.earned, 0), totalAvailable: accs.reduce((s, a) => s + a.available, 0) };
    }));
    setForm({ name: "", email: "", earned: "", available: "", browser: defaultBrowser });
    setShowForm(false);
    toast.success(`Account added to ${form.browser.name}`);
  }

  function deleteAccount(platformId: string, accountId: string) {
    setPlatforms(cur => cur.map(p => {
      if (p.id !== platformId) return p;
      const accs = p.accounts.filter(a => a.id !== accountId);
      return { ...p, accounts: accs, totalEarned: accs.reduce((s, a) => s + a.earned, 0), totalAvailable: accs.reduce((s, a) => s + a.available, 0) };
    }));
    toast.success("Account removed");
  }

  function syncPlatform(platformId: string) {
    setSyncing(platformId);
    setTimeout(() => {
      setPlatforms(cur => cur.map(p => p.id !== platformId ? p : { ...p, accounts: p.accounts.map(a => ({ ...a, lastUpdated: new Date().toISOString() })) }));
      setSyncing(null);
      toast.success(`${SURVEY_PLATFORMS.find(p => p.id === platformId)?.name} synced`);
    }, 800);
  }

  const totalAllEarned = platforms.reduce((s, p) => s + p.totalEarned, 0);
  const totalAllAvailable = platforms.reduce((s, p) => s + p.totalAvailable, 0);
  const totalAccounts = platforms.reduce((s, p) => s + p.accounts.length, 0);

  return (
    <AppLayout title="Monetize" subtitle="Track earnings across all survey platforms.">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center bg-[#2c5b48] text-white">
            <DollarSign className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-4xl tracking-[-0.03em] text-[#19211e]">Monetize</h1>
            <p className="text-sm text-[#5b655e]">Track earnings across six survey platforms. All data stored locally.</p>
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid gap-px bg-[#17231e]/10 border border-[#17231e]/10 sm:grid-cols-3">
          {[
            { label: "Total Earned",    value: money.format(totalAllEarned),    caption: "Across all platforms" },
            { label: "Available Now",   value: money.format(totalAllAvailable), caption: "Ready to cash out", highlight: true },
            { label: "Total Accounts",  value: String(totalAccounts).padStart(2, "0"), caption: "Registered accounts" },
          ].map(({ label, value, caption, highlight }) => (
            <div key={label} className="bg-[#f4f0e7] px-6 py-5">
              <p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756c]">{label}</p>
              <p className={`font-ledger mt-2 text-2xl font-bold tracking-[-0.04em] ${highlight ? "text-[#2c5b48]" : "text-[#26352b]"}`}>{value}</p>
              <p className="mt-1 text-xs text-[#6a736b]">{caption}</p>
            </div>
          ))}
        </div>

        {/* Platform grid */}
        <div className="grid gap-4 xl:grid-cols-2">
          {platforms.map((platform) => (
            <article key={platform.id} className="ledger-card border border-[#17231e]/10 bg-[#f9f5ec]">
              {/* Platform header */}
              <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center bg-[#1a2820] font-ledger text-xs font-bold text-[#c9a84c]">
                    {platform.code}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1d2922]">{platform.name}</h3>
                    <p className="mt-0.5 text-xs text-[#6a746c]">
                      {platform.accounts.length === 0 ? "No accounts" : `${platform.accounts.length} account${platform.accounts.length !== 1 ? "s" : ""}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a href={platform.url} target="_blank" rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center text-[#68736b] hover:bg-[#e7e1d6] hover:text-[#2c5b48] transition-colors"
                    title={`Open ${platform.name}`}>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button onClick={() => syncPlatform(platform.id)} disabled={syncing === platform.id}
                    className="grid h-8 w-8 place-items-center text-[#68736b] hover:bg-[#e7e1d6] hover:text-[#2c5b48] transition-colors disabled:opacity-60"
                    title="Sync platform">
                    {syncing === platform.id ? <LoaderCircle className="h-3.5 w-3.5 animate-spin" /> : <RefreshCw className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              <div className="mx-5 h-px bg-[#17231e]/10 sm:mx-6" />

              {/* Accounts list */}
              <div className="min-h-[80px] px-5 py-4 sm:px-6">
                {platform.accounts.length === 0 ? (
                  <div className="flex h-[60px] items-center justify-between gap-4 border-l-2 border-[#d4dbd2] pl-4">
                    <p className="text-sm text-[#6a746c]">No accounts recorded yet.</p>
                    <button onClick={() => { setSelectedId(platform.id); setShowForm(true); }}
                      className="shrink-0 font-ledger text-[10px] font-bold uppercase tracking-[0.12em] text-[#2c5b48] underline decoration-[#2c5b48]/40 underline-offset-4 hover:text-[#183e2d]">
                      Add
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {platform.accounts.map(account => (
                      <div key={account.id} className="flex items-center justify-between gap-4 bg-[#f0ece3] px-3.5 py-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#2a362f]">{account.name}</p>
                          <p className="mt-0.5 text-xs text-[#748076]">{account.email} · {account.browser.name}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="font-ledger text-xs font-bold text-[#2c5b48]">{money.format(account.available)}</p>
                            <p className="font-ledger text-[9px] text-[#748076]">{money.format(account.earned)} earned</p>
                          </div>
                          <button onClick={() => deleteAccount(platform.id, account.id)}
                            className="grid h-7 w-7 place-items-center text-[#8a918c] hover:bg-[#eadbd6] hover:text-[#a4423c] transition-colors">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Platform footer */}
              <div className="border-t border-[#17231e]/10 bg-[#e6ede5] px-5 py-4 sm:px-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756c]">Recorded</p>
                    <p className="font-ledger mt-1 text-base font-bold tracking-[-0.04em] text-[#26352b]">{money.format(platform.totalEarned)}</p>
                  </div>
                  <div className="border-l border-[#17231e]/10 pl-4">
                    <p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756c]">Available</p>
                    <p className="font-ledger mt-1 text-base font-bold tracking-[-0.04em] text-[#2c5b48]">{money.format(platform.totalAvailable)}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-end border-t border-[#17231e]/10 pt-3">
                  <button onClick={() => { setSelectedId(platform.id); setShowForm(true); }}
                    className="inline-flex items-center gap-1.5 font-ledger text-[10px] font-bold uppercase tracking-[0.12em] text-[#2c5b48] hover:text-[#183e2d]">
                    <Plus className="h-3.5 w-3.5" />Add account
                  </button>
                </div>
              </div>

              {/* Inline add form */}
              {showForm && selectedId === platform.id && (
                <div className="border-t border-[#17231e]/10 bg-[#eee8dc] px-5 py-5 sm:px-6">
                  <form onSubmit={addAccount} className="space-y-4">
                    <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#2c5b48]">New account — {platform.name}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor={`name-${platform.id}`} className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#536057]">Account name</Label>
                        <Input id={`name-${platform.id}`} value={form.name} onChange={e => setForm(c => ({ ...c, name: e.target.value }))} placeholder="My account" className="h-10 rounded-none border-[#17231e]/20 bg-[#fbf8f1]" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor={`email-${platform.id}`} className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#536057]">Email</Label>
                        <Input id={`email-${platform.id}`} type="email" value={form.email} onChange={e => setForm(c => ({ ...c, email: e.target.value }))} placeholder="user@example.com" className="h-10 rounded-none border-[#17231e]/20 bg-[#fbf8f1]" required />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor={`earned-${platform.id}`} className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#536057]">Total earned</Label>
                        <Input id={`earned-${platform.id}`} type="number" inputMode="decimal" min="0" step="0.01" value={form.earned} onChange={e => setForm(c => ({ ...c, earned: e.target.value }))} placeholder="0.00" className="h-10 rounded-none border-[#17231e]/20 bg-[#fbf8f1] font-ledger" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor={`avail-${platform.id}`} className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#536057]">Available now</Label>
                        <Input id={`avail-${platform.id}`} type="number" inputMode="decimal" min="0" step="0.01" value={form.available} onChange={e => setForm(c => ({ ...c, available: e.target.value }))} placeholder="0.00" className="h-10 rounded-none border-[#17231e]/20 bg-[#fbf8f1] font-ledger" required />
                      </div>
                    </div>
                    <BrowserSelector value={form.browser} onChange={browser => setForm(c => ({ ...c, browser }))} />
                    <div className="border-l-2 border-[#2c5b48] bg-[#e6ede6] px-3 py-2 text-sm leading-5 text-[#46534a]">
                      Select a browser above, then click "Open Login" to authenticate on {platform.name}.
                    </div>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="h-10 rounded-none border-[#17231e]/20 bg-transparent">Cancel</Button>
                      <BrowserLaunchButton platformId={platform.id} platformName={platform.name} platformUrl={platform.url} browser={form.browser} className="flex-1" />
                      <Button type="submit" className="h-10 rounded-none bg-[#2c5b48] text-[#f7f2e7] hover:bg-[#214837]">Save account</Button>
                    </div>
                  </form>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
