import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, ExternalLink, Eye, PauseCircle, Play, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  requestDataEntryAgent,
  subscribeToDataEntryAgent,
  type LedgerDataEntryEvent,
} from "@/lib/dataEntryAgentBridge";

type AgentState = {
  title: string;
  url: string;
  pageState: string;
  controls: number;
  obstructions: number;
  media: number;
  confidence: number | null;
  message: string;
};

const UPGRADE_GROUPS = [
  ["Page awareness", "wrong/broken/error pages, navigation, obstructions, popups, links, validation"],
  ["Survey awareness", "full, closed, disqualified, timeout, secondary survey, consent, qualification"],
  ["Interaction awareness", "selectors, sliders, multiple choice, ratings, verified clicks, holds, drag/drop"],
  ["Media awareness", "pictures, missing-piece assignments, video/audio tasks and interpretation"],
  ["Research + timing", "organized research, content-complexity reading waits, checkpoints and verification"],
  ["Safety awareness", "bot/CAPTCHA detection is a stop condition; no bypass or anti-bot evasion"],
] as const;

export function DataEntryAutomationPanel() {
  const [command, setCommand] = useState("");
  const [running, setRunning] = useState(false);
  const [agent, setAgent] = useState<AgentState>({
    title: "No browser inspection yet",
    url: "",
    pageState: "idle",
    controls: 0,
    obstructions: 0,
    media: 0,
    confidence: null,
    message: "Install/load the integrated browser extension, then inspect the active page.",
  });

  useEffect(() => {
    return subscribeToDataEntryAgent((event: LedgerDataEntryEvent) => {
      if (event.type === "run_started") {
        setRunning(true);
        setAgent(prev => ({ ...prev, message: `Running: ${event.payload.command}` }));
      } else if (event.type === "run_completed") {
        setRunning(false);
        setAgent(prev => ({ ...prev, message: "Browser workflow completed and returned a verified result." }));
      } else if (event.type === "run_failed") {
        setRunning(false);
        setAgent(prev => ({ ...prev, message: event.payload.error }));
      } else if (event.type === "inspection") {
        const p = event.payload as any;
        setAgent({
          title: p.title || "Untitled page",
          url: p.url || "",
          pageState: p.pageState?.primary || p.pageState?.states?.[0] || "normal",
          controls: p.controls?.length || 0,
          obstructions: p.obstructions?.length || 0,
          media: (p.media?.images?.length || 0) + (p.media?.videos?.length || 0) + (p.media?.audio?.length || 0),
          confidence: typeof p.confidence === "number" ? p.confidence : null,
          message: p.pageState?.primary
            ? `Detected workflow state: ${p.pageState.primary}`
            : "Page inspection received.",
        });
      }
    });
  }, []);

  const pageStateIsBlocked = /bot|captcha|disqual|closed|full|timeout|error|broken|wrong/i.test(agent.pageState);

  const run = () => {
    const text = command.trim();
    if (!text) return;
    requestDataEntryAgent(text);
  };

  const metrics = useMemo(() => [
    ["Controls", agent.controls],
    ["Obstructions", agent.obstructions],
    ["Media", agent.media],
  ], [agent]);

  return (
    <section className="mb-4 border border-[#17231e]/10 bg-[#f9f5ec]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#17231e]/10 px-5 py-4">
        <div>
          <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#2c5b48]">Ledger Browser Data Entry</p>
          <h2 className="mt-1 text-base font-semibold text-[#19211e]">Integrated page-aware automation</h2>
          <p className="mt-1 text-xs text-[#6a736b]">The browser agent feeds page state, selectors, media, obstruction and workflow evidence back into the Ledger AI workspace.</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#6a736b]">
          {running ? <><Play className="h-3.5 w-3.5" /> Running</> : <><PauseCircle className="h-3.5 w-3.5" /> Ready</>}
        </div>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <div className={`border p-3 ${pageStateIsBlocked ? "border-[#a4423c]/30 bg-[#eadbd6]" : "border-[#2c5b48]/20 bg-[#e6ede6]"}`}>
            <div className="flex items-start gap-2">
              {pageStateIsBlocked ? <ShieldAlert className="mt-0.5 h-4 w-4 text-[#7b302d]" /> : <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2c5b48]" />}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{agent.title}</p>
                <p className="mt-1 break-all text-[11px] text-[#6a736b]">{agent.url || "No active page URL reported."}</p>
                <p className="mt-2 text-xs">{agent.message}</p>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {metrics.map(([label, value]) => (
              <div key={label} className="border border-[#17231e]/10 bg-white px-3 py-2">
                <p className="font-ledger text-[9px] uppercase tracking-[0.12em] text-[#7d877f]">{label}</p>
                <p className="mt-1 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <Button type="button" variant="outline" className="rounded-none" onClick={() => requestDataEntryAgent("__INSPECT_PAGE__")}>
              <Eye className="mr-2 h-3.5 w-3.5" /> Inspect active page
            </Button>
            <Button type="button" variant="outline" className="rounded-none" onClick={() => window.open("/ai-mode", "_self")}>
              <ExternalLink className="mr-2 h-3.5 w-3.5" /> Keep in AI Mode
            </Button>
          </div>

          <div className="mt-3 flex gap-2">
            <input
              value={command}
              onChange={e => setCommand(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") run(); }}
              placeholder="Describe the browser data-entry task…"
              className="h-9 min-w-0 flex-1 border border-[#17231e]/15 bg-white px-3 text-xs outline-none focus:border-[#2c5b48]"
            />
            <Button type="button" className="h-9 rounded-none bg-[#2c5b48] text-white hover:bg-[#214837]" onClick={run}>
              Run
            </Button>
          </div>

          <p className="mt-2 flex items-center gap-1.5 text-[10px] leading-4 text-[#6a736b]">
            <AlertCircle className="h-3 w-3" />
            Security/anti-bot challenges are detected and stopped rather than bypassed.
          </p>
        </div>

        <aside className="border border-[#17231e]/10 bg-white p-3">
          <p className="font-ledger text-[9px] font-bold uppercase tracking-[0.14em] text-[#6a736b]">Integrated capabilities</p>
          <div className="mt-2 space-y-3">
            {UPGRADE_GROUPS.map(([name, detail]) => (
              <div key={name}>
                <p className="text-xs font-semibold text-[#19211e]">{name}</p>
                <p className="mt-0.5 text-[10px] leading-4 text-[#6a736b]">{detail}</p>
              </div>
            ))}
          </div>
          {agent.confidence !== null && <p className="mt-3 border-t border-[#17231e]/10 pt-3 text-[10px] text-[#6a736b]">Browser planner confidence: <strong>{Math.round(agent.confidence * 100)}%</strong></p>}
        </aside>
      </div>
    </section>
  );
}
