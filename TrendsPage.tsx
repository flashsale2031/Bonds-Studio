import { AppLayout } from "@/components/AppLayout";
import { useMemo, useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

const STORAGE_KEY = "bonds-studio-ledger-v1";
const MONETIZE_KEY = "bonds-studio-monetize-v1";
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

export default function TrendsPage() {
  const [ledgerData, setLedgerData] = useState<any[]>([]);
  const [monetizeData, setMonetizeData] = useState<any[]>([]);

  useEffect(() => {
    try {
      const l = window.localStorage.getItem(STORAGE_KEY);
      if (l) setLedgerData(JSON.parse(l));
      const m = window.localStorage.getItem(MONETIZE_KEY);
      if (m) setMonetizeData(JSON.parse(m));
    } catch {}
  }, []);

  const platformTotals = useMemo(() => {
    const combined: Record<string, { name: string; earned: number; available: number }> = {};
    ledgerData.forEach((p: any) => {
      combined[p.id] = combined[p.id] || { name: p.name, earned: 0, available: 0 };
      p.accounts?.forEach((a: any) => {
        combined[p.id].earned += a.earned || 0;
        combined[p.id].available += a.available || 0;
      });
    });
    monetizeData.forEach((p: any) => {
      combined[p.id] = combined[p.id] || { name: p.name, earned: 0, available: 0 };
      combined[p.id].earned += p.totalEarned || 0;
      combined[p.id].available += p.totalAvailable || 0;
    });
    return Object.values(combined).filter(p => p.earned > 0 || p.available > 0);
  }, [ledgerData, monetizeData]);

  const totalEarned = platformTotals.reduce((s, p) => s + p.earned, 0);
  const totalAvailable = platformTotals.reduce((s, p) => s + p.available, 0);

  return (
    <AppLayout title="Trends" subtitle="Earnings analytics across all platforms.">
      <div className="space-y-8">
        <div>
          <h1 className="font-display text-4xl tracking-[-0.03em] text-[#19211e]">Earnings Trends</h1>
          <p className="mt-2 text-sm text-[#5b655e]">Visual breakdown of your recorded balances across all platforms.</p>
        </div>

        {/* Summary stats */}
        <div className="grid gap-px bg-[#17231e]/10 border border-[#17231e]/10 sm:grid-cols-3">
          {[
            { label: "Total Recorded", value: money.format(totalEarned), caption: "All-time earnings" },
            { label: "Available Now",  value: money.format(totalAvailable), caption: "Ready to reconcile", highlight: true },
            { label: "Platforms",      value: String(platformTotals.length), caption: "With recorded balances" },
          ].map(({ label, value, caption, highlight }) => (
            <div key={label} className="bg-[#f4f0e7] px-6 py-5">
              <p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756c]">{label}</p>
              <p className={`font-ledger mt-2 text-2xl font-bold tracking-[-0.04em] ${highlight ? "text-[#2c5b48]" : "text-[#26352b]"}`}>{value}</p>
              <p className="mt-1 text-xs text-[#6a736b]">{caption}</p>
            </div>
          ))}
        </div>

        {platformTotals.length === 0 ? (
          <div className="border border-[#17231e]/10 bg-[#f9f5ec] p-12 text-center">
            <p className="font-display text-2xl text-[#19211e]">No data yet</p>
            <p className="mt-2 text-sm text-[#5b655e]">Record balances on the Ledger or Monetize pages to see trends here.</p>
          </div>
        ) : (
          <>
            <div className="border border-[#17231e]/10 bg-[#f9f5ec] p-6">
              <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b] mb-6">Earnings by Platform</p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={platformTotals} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#17231e18" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#68736b" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#68736b" }} tickFormatter={(v) => `$${v}`} />
                  <Tooltip formatter={(v: number) => money.format(v)} contentStyle={{ background: "#f4f0e7", border: "1px solid #17231e18", borderRadius: 0 }} />
                  <Legend />
                  <Bar dataKey="earned" name="Total Earned" fill="#2c5b48" />
                  <Bar dataKey="available" name="Available" fill="#c9a84c" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-[#17231e]/10 bg-[#f9f5ec] p-6">
              <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b] mb-6">Available Balance Distribution</p>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={platformTotals} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#17231e18" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#68736b" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#68736b" }} tickFormatter={(v) => `$${v}`} />
                  <Tooltip formatter={(v: number) => money.format(v)} contentStyle={{ background: "#f4f0e7", border: "1px solid #17231e18", borderRadius: 0 }} />
                  <Area type="monotone" dataKey="available" name="Available" stroke="#2c5b48" fill="#2c5b4820" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}
