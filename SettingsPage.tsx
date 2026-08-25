import React, { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Settings, Download, Trash2, ShieldCheck, Bell, Palette, Database, BatteryCharging } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link } from "wouter";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(false);
  const [autoReview, setAutoReview] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const [devMode, setDevMode] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem("bonds-studio-dev-mode") || "false"); } catch { return false; }
  });

  function toggleDevMode(enabled: boolean) {
    setDevMode(enabled);
    window.localStorage.setItem("bonds-studio-dev-mode", JSON.stringify(enabled));
    window.dispatchEvent(new Event("bonds-studio-dev-mode-change"));
    toast.success(enabled ? "Developer mode enabled" : "Developer mode disabled");
  }

  function getStorageStats() {
    let totalSize = 0;
    const keys: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("bonds-studio")) {
        const value = localStorage.getItem(key) || "";
        keys[key] = `${(value.length / 1024).toFixed(2)} KB`;
        totalSize += value.length;
      }
    }
    return { keys, totalSize: `${(totalSize / 1024).toFixed(2)} KB` };
  }

  const storageStats = getStorageStats();

  function exportData() {
    const data: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("bonds-studio")) {
        try { data[key] = JSON.parse(localStorage.getItem(key) || ""); } catch { data[key!] = localStorage.getItem(key); }
      }
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `bonds-studio-export-${Date.now()}.json`; a.click();
    URL.revokeObjectURL(url);
    toast.success("Data exported successfully.");
  }

  function clearData() {
    if (!confirm("Clear all Bonds Studio data from this browser? This cannot be undone.")) return;
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith("bonds-studio")) localStorage.removeItem(key);
    }
    toast.success("All Bonds Studio data cleared.");
  }

  const sections = [
    {
      icon: Palette, title: "Appearance",
      items: [
        { id: "compact", label: "Compact mode", desc: "Reduce spacing for denser information display", value: compactMode, onChange: setCompactMode },
      ],
    },
    {
      icon: Bell, title: "Notifications",
      items: [
        { id: "notif", label: "Review reminders", desc: "Remind you to review platforms weekly", value: notifications, onChange: setNotifications },
        { id: "auto", label: "Auto-mark reviewed", desc: "Mark platforms reviewed after recording a balance", value: autoReview, onChange: setAutoReview },
      ],
    },
  ];

  return (
    <AppLayout title="Settings" subtitle="System preferences and data management.">
      <div className="max-w-2xl space-y-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center bg-[#2c5b48] text-white">
            <Settings className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-4xl tracking-[-0.03em] text-[#19211e]">System Settings</h1>
            <p className="text-sm text-[#5b655e]">Configure your Bonds Studio workspace.</p>
          </div>
        </div>

        {sections.map(({ icon: Icon, title, items }) => (
          <div key={title} className="border border-[#17231e]/10 bg-[#f9f5ec]">
            <div className="flex items-center gap-2 border-b border-[#17231e]/10 px-5 py-3">
              <Icon className="h-4 w-4 text-[#2c5b48]" />
              <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">{title}</p>
            </div>
            <div className="divide-y divide-[#17231e]/8">
              {items.map(({ id, label, desc, value, onChange }) => (
                <div key={id} className="flex items-center justify-between px-5 py-4">
                  <div>
                    <Label htmlFor={id} className="text-sm font-semibold text-[#19211e] cursor-pointer">{label}</Label>
                    <p className="mt-0.5 text-xs text-[#6a736b]">{desc}</p>
                  </div>
                  <Switch id={id} checked={value} onCheckedChange={onChange} />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex items-center gap-2 border-b border-[#17231e]/10 px-5 py-3">
            <BatteryCharging className="h-4 w-4 text-[#2c5b48]" />
            <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Power</p>
          </div>
          <div className="flex items-center justify-between gap-5 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-[#19211e]">Battery</p>
              <p className="mt-0.5 text-xs text-[#6a736b]">Battery Saver Mode and photovoltaic Charging Mode estimates.</p>
            </div>
            <Link href="/settings/battery"><Button variant="outline" className="rounded-none border-[#17231e]/20 bg-transparent text-sm hover:bg-[#e8e1d5]">Open</Button></Link>
          </div>
        </div>

        {/* Data management */}
        <div className="border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex items-center gap-2 border-b border-[#17231e]/10 px-5 py-3">
            <Database className="h-4 w-4 text-[#2c5b48]" />
            <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Data Management</p>
          </div>
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#19211e]">Export all data</p>
                <p className="mt-0.5 text-xs text-[#6a736b]">Download a JSON backup of all your ledger data</p>
              </div>
              <Button onClick={exportData} variant="outline" className="rounded-none border-[#17231e]/20 bg-transparent text-sm hover:bg-[#e8e1d5]">
                <Download className="h-4 w-4 mr-2" />Export
              </Button>
            </div>
            <div className="h-px bg-[#17231e]/10" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#a4423c]">Clear all data</p>
                <p className="mt-0.5 text-xs text-[#6a736b]">Permanently delete all Bonds Studio data from this browser</p>
              </div>
              <Button onClick={clearData} variant="outline" className="rounded-none border-[#a4423c]/30 bg-transparent text-[#a4423c] text-sm hover:bg-[#eadbd6]">
                <Trash2 className="h-4 w-4 mr-2" />Clear
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border border-[#17231e]/10 bg-[#e6ede6] px-5 py-4">
          <ShieldCheck className="h-5 w-5 text-[#2c5b48] shrink-0" />
          <div>
            <p className="text-sm font-semibold text-[#19211e]">Private by default</p>
            <p className="mt-0.5 text-xs text-[#46534a]">All data is stored locally. Nothing leaves this browser.</p>
          </div>
        </div>

        {/* Developer Mode */}
        <div className="border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex items-center justify-between border-b border-[#17231e]/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Developer Mode</span>
              <span className="inline-flex items-center gap-1 bg-[#2c5b48]/10 px-2 py-0.5 font-ledger text-[9px] uppercase tracking-[0.1em] text-[#2c5b48]">
                Beta
              </span>
            </div>
            <Switch id="dev-mode" checked={devMode} onCheckedChange={toggleDevMode} />
          </div>

          {devMode && (
            <div className="p-5 space-y-4">
              <div>
                <p className="text-sm font-semibold text-[#19211e] mb-3">localStorage Debug Info</p>
                <div className="bg-[#1a2820] text-[#c8d5c9] font-ledger text-xs p-3 rounded-none border border-[#17231e]/20 overflow-x-auto max-h-[200px] overflow-y-auto">
                  <div className="mb-2 text-[#c9a84c]">Storage Usage: {storageStats.totalSize}</div>
                  {Object.entries(storageStats.keys).map(([key, size]) => (
                    <div key={key} className="text-[9px] leading-5">
                      <span className="text-[#7a9a82]">{key}:</span> <span className="text-[#c8d5c9]">{size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#17231e]/10" />

              <div>
                <p className="text-sm font-semibold text-[#19211e] mb-2">Quick Actions</p>
                <div className="space-y-2">
                  <Button
                    onClick={() => {
                      const data: Record<string, any> = {};
                      for (let i = 0; i < localStorage.length; i++) {
                        const key = localStorage.key(i);
                        if (key?.startsWith("bonds-studio")) {
                          try { data[key] = JSON.parse(localStorage.getItem(key) || ""); } catch { data[key!] = localStorage.getItem(key); }
                        }
                      }
                      console.log("Bonds Studio Data:", data);
                      toast.success("Data logged to console");
                    }}
                    variant="outline"
                    className="w-full rounded-none border-[#17231e]/20 bg-transparent text-xs text-left hover:bg-[#e8e1d5]">
                    Log all data to console
                  </Button>
                  <Button
                    onClick={() => {
                      console.log("Browser Sessions:", JSON.parse(localStorage.getItem("bonds-studio-browser-sessions") || "[]"));
                      toast.success("Browser sessions logged to console");
                    }}
                    variant="outline"
                    className="w-full rounded-none border-[#17231e]/20 bg-transparent text-xs text-left hover:bg-[#e8e1d5]">
                    Log browser sessions
                  </Button>
                  <Button
                    onClick={() => {
                      const ledger = JSON.parse(localStorage.getItem("bonds-studio-ledger-v1") || "[]");
                      const monetize = JSON.parse(localStorage.getItem("bonds-studio-monetize-v1") || "[]");
                      console.log("Ledger Totals:", ledger.reduce((s: any, p: any) => {
                        p.accounts?.forEach((a: any) => { s.earned += a.earned; s.available += a.available; });
                        return s;
                      }, { earned: 0, available: 0 }));
                      console.log("Monetize Totals:", monetize.reduce((s: any, p: any) => ({ earned: s.earned + p.totalEarned, available: s.available + p.totalAvailable }), { earned: 0, available: 0 }));
                      toast.success("Totals logged to console");
                    }}
                    variant="outline"
                    className="w-full rounded-none border-[#17231e]/20 bg-transparent text-xs text-left hover:bg-[#e8e1d5]">
                    Log earnings totals
                  </Button>
                </div>
              </div>

              <div className="border-l-2 border-[#2c5b48] bg-[#e6ede6] px-3 py-2 text-xs leading-5 text-[#46534a]">
                <strong>Dev Mode Info:</strong> Open your browser's Developer Tools (F12) to see console logs. All data is stored in browser localStorage with keys prefixed <code className="bg-[#1a2820] text-[#c9a84c] px-1">bonds-studio-</code>.
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
