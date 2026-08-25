import { AppLayout } from "@/components/AppLayout";
import { User } from "lucide-react";

export default function AccountsPage() {
  return (
    <AppLayout title="Accounts" subtitle="Manage your workspace profile and account details.">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 border-b border-[#17231e]/10 pb-6 mb-8">
          <div className="grid h-16 w-16 place-items-center bg-[#2c5b48] text-white">
            <User className="h-7 w-7" />
          </div>
          <div>
            <h1 className="font-display text-4xl tracking-[-0.03em] text-[#19211e]">Account</h1>
            <p className="mt-1 text-sm text-[#5b655e]">Local workspace — stored in this browser</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border border-[#17231e]/10 bg-[#f9f5ec] p-6">
            <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b] mb-3">Workspace Info</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-[#6a736b] mb-1">Workspace name</p>
                <p className="font-semibold text-[#19211e]">Local workspace</p>
              </div>
              <div>
                <p className="text-xs text-[#6a736b] mb-1">Storage type</p>
                <p className="font-semibold text-[#19211e]">Browser localStorage</p>
              </div>
              <div>
                <p className="text-xs text-[#6a736b] mb-1">Version</p>
                <p className="font-ledger font-semibold text-[#2c5b48]">v2.0 — Master UI</p>
              </div>
              <div>
                <p className="text-xs text-[#6a736b] mb-1">Privacy</p>
                <p className="font-semibold text-[#19211e]">Private by default</p>
              </div>
            </div>
          </div>
          <div className="border-l-2 border-[#2c5b48] bg-[#e6ede6] px-4 py-3 text-sm leading-6 text-[#46534a]">
            All data is stored locally in this browser. Nothing is sent to external servers. To back up your data, use the export function in Settings.
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
