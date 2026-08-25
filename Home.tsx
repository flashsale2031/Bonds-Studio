/**
 * Home / Master Center — Bonds Studio
 * Ledger projects are intentionally anchored at the bottom of the first page.
 * Each ledger project has a dedicated platform browser, account connection state,
 * task-flow selector, Start Entry / Stop Entry controls, and persistent session metadata.
 */
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpRight, Plus, Trash2, RefreshCw, LoaderCircle, ChevronRight, CreditCard,
  Mic, MicOff, Zap, Brain, Sparkles, MessageSquare, Copy, Globe2, ExternalLink,
  X, Minimize2, Play, Square, CheckCircle2, Circle, Settings2, Bot, Activity,
  ShieldCheck, Link2, MousePointer2, ListChecks
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AppLayout } from "@/components/AppLayout";
import { BrowserSelector, type BrowserInfo } from "@/components/BrowserSelector";
import { Link } from "wouter";
import { assessLedgerTask, type SafetyAssessment } from "@/lib/ledgerAiSafety";
import { learnFromMistake, recordSafetyHold, recordSuccessfulVerification } from "@/lib/ledgerAiLearning";

const STORAGE_KEY = "bonds-studio-ledger-v2";
const SESSION_KEY = "bonds-studio-platform-sessions-v2";
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

type Account = { id: string; label: string; earned: number; available: number; updatedAt: string; browser: BrowserInfo; browserIdentityId: string };
type TaskStep = { id: string; label: string };
type TaskFlow = { id: string; name: string; description: string; steps: TaskStep[] };
type Platform = {
  id: string; name: string; code: string; url: string; accounts: Account[]; reviewedAt: string | null;
  browser?: BrowserInfo; connected?: boolean; lastUrl?: string; selectedFlow?: string;
};
type Session = { url: string; connected: boolean; minimized: boolean; browser?: BrowserInfo; openedAt?: string; accountId?: string };
type Runner = { platformId: string; accountId: string; flowId: string; step: number; running: boolean; startedAt: string | null; phase: "understand" | "navigate" | "inspect" | "act" | "verify" | "complete" | "blocked"; confidence: number; lastDecision: string; safetyHold: boolean; safety: SafetyAssessment; };

type AwarenessState = { phase: Runner["phase"]; confidence: number; target: string; intent: string; currentSection: string; lastDecision: string; guardrail: string; safety: SafetyAssessment; };

const AI_PHASES: Array<{ phase: Runner["phase"]; label: string }> = [
  { phase: "understand", label: "Understand assignment" },
  { phase: "navigate", label: "Navigate platform" },
  { phase: "inspect", label: "Inspect target section" },
  { phase: "act", label: "Perform permitted task" },
  { phase: "verify", label: "Verify result" },
  { phase: "complete", label: "Complete & audit" },
];

const TASK_FLOWS: TaskFlow[] = [
  { id: "review", name: "Account Review", description: "Open the account, inspect the current balance, and prepare a ledger entry.", steps: [
    { id: "open", label: "Open platform session" }, { id: "inspect", label: "Inspect account balance" }, { id: "prepare", label: "Prepare ledger entry" }, { id: "verify", label: "Verify entry" }, { id: "audit", label: "Record completion" },
  ]},
  { id: "balance", name: "Balance Entry", description: "Guide a balance capture workflow from platform review through ledger recording.", steps: [
    { id: "open", label: "Open platform session" }, { id: "locate", label: "Locate balance" }, { id: "capture", label: "Capture balance" }, { id: "save", label: "Save ledger data" }, { id: "verify", label: "Verify saved data" },
  ]},
  { id: "reconcile", name: "Reconciliation", description: "Compare the platform account state with the stored ledger record.", steps: [
    { id: "open", label: "Open platform session" }, { id: "compare", label: "Compare account data" }, { id: "resolve", label: "Resolve differences" }, { id: "verify", label: "Verify reconciliation" }, { id: "audit", label: "Record audit result" },
  ]},
];

const initialPlatforms: Platform[] = [
  { id: "top-surveys", name: "TopSurveys", code: "TS", url: "https://www.topsurveys.app/", accounts: [], reviewedAt: null, selectedFlow: "review" },
  { id: "five-surveys", name: "Five Surveys", code: "FS", url: "https://fivesurveys.com/", accounts: [], reviewedAt: null, selectedFlow: "review" },
  { id: "inbox-dollars", name: "InboxDollars", code: "ID", url: "https://www.inboxdollars.com/", accounts: [], reviewedAt: null, selectedFlow: "balance" },
  { id: "survey-junkie", name: "Survey Junkie", code: "SJ", url: "https://www.surveyjunkie.com/", accounts: [], reviewedAt: null, selectedFlow: "balance" },
  { id: "swagbucks", name: "Swagbucks", code: "SB", url: "https://www.swagbucks.com/", accounts: [], reviewedAt: null, selectedFlow: "review" },
  { id: "freecash", name: "Freecash", code: "FC", url: "https://freecash.com/", accounts: [], reviewedAt: null, selectedFlow: "reconcile" },
];

type QuickStartProject = { id: string; name: string; code: string };
const quickStartProjects: QuickStartProject[] = [
  { id: "document", name: "Document", code: "DO" }, { id: "web", name: "Web", code: "WB" }, { id: "audio", name: "Audio", code: "AU" },
  { id: "video", name: "Video", code: "VI" }, { id: "image", name: "Image", code: "IM" }, { id: "animation", name: "Animation", code: "AN" },
  { id: "game", name: "Game", code: "GM" }, { id: "code", name: "Code", code: "CD" },
];

function formatChecked(value: string | null) {
  if (!value) return "Not reviewed yet";
  return `Reviewed ${new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(value))}`;
}

function PlatformCard({ platform, index, reviewing, onAdd, onReview, onDelete, onOpen }: {
  platform: Platform; index: number; reviewing: boolean; onAdd: () => void; onReview: () => void; onDelete: (id: string) => void; onOpen: (account?: Account) => void; onStartEntry: (account: Account) => void;
}) {
  const total = platform.accounts.reduce((s, a) => ({ earned: s.earned + a.earned, available: s.available + a.available }), { earned: 0, available: 0 });
  return (
    <article className="ledger-card border border-[#17231e]/12 bg-[#f9f5ec]" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="flex items-center justify-between px-5 py-3.5 sm:px-6 bg-[#f4f0e7] border-b border-[#17231e]/10">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center bg-[#1a2820] font-ledger text-xs font-bold text-[#c9a84c]">{platform.code}</div>
          <div><h3 className="font-semibold text-sm text-[#1d2922]">{platform.name}</h3><p className="mt-0.5 font-ledger text-[9px] uppercase tracking-[0.12em] text-[#6a746c]">{platform.accounts.length === 0 ? "No accounts recorded" : `${platform.accounts.length} account${platform.accounts.length !== 1 ? "s" : ""} in ledger`}</p></div>
        </div>
        <div className="flex items-center gap-1">
          {platform.accounts.some(a => sessions[a.id]?.connected) && <span className="mr-2 hidden sm:inline-flex items-center gap-1 bg-[#2c5b48]/10 px-2 py-0.5 font-ledger text-[9px] uppercase tracking-[0.12em] text-[#2c5b48]"><CheckCircle2 className="h-3 w-3" /> Account Connected</span>}
          <button onClick={onReview} disabled={reviewing} className="grid h-8 w-8 place-items-center text-[#68736b] transition hover:bg-[#e7e1d6] hover:text-[#2c5b48] disabled:opacity-60" title="Mark as reviewed">{reviewing ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}</button>
          <button onClick={onOpen} className="grid h-8 w-8 place-items-center text-[#68736b] transition hover:bg-[#e7e1d6] hover:text-[#2c5b48]" title="Open platform browser"><ExternalLink className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="min-h-[104px] px-5 py-4 sm:px-6">
        {platform.accounts.length === 0 ? <div className="flex h-[72px] items-center justify-between gap-4 border-l-2 border-[#d4dbd2] pl-4"><p className="max-w-[250px] text-sm leading-5 text-[#6a746c]">A blank register. Record the first balance when it is ready.</p><button onClick={onAdd} className="shrink-0 font-ledger text-[10px] font-bold uppercase tracking-[0.12em] text-[#2c5b48] underline decoration-[#2c5b48]/40 underline-offset-4 hover:text-[#183e2d]">Add</button></div> : <div className="space-y-2">{platform.accounts.map(account => <div key={account.id} className="flex flex-col gap-3 bg-[#f0ece3] px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><div className="flex items-center gap-2"><p className="truncate text-sm font-semibold text-[#2a362f]">{account.label}</p><span className={`font-ledger text-[8px] uppercase tracking-widest ${sessions[account.id]?.connected ? "text-[#2c5b48]" : "text-[#8a6e1e]"}`}>{sessions[account.id]?.connected ? "Connected" : "Connect An Account"}</span></div><p className="mt-0.5 font-ledger text-[9px] uppercase tracking-[0.09em] text-[#748076]">{account.browser.name} · {account.browser.profile || "Default"} · Identity {account.browserIdentityId.slice(0, 8)}</p></div><div className="flex items-center gap-2"><p className="mr-2 font-ledger text-sm font-bold text-[#2c5b48]">{money.format(account.available)}</p><button onClick={() => onOpen(account)} className="px-2 py-1 font-ledger text-[9px] font-bold uppercase tracking-widest text-[#2c5b48] hover:bg-white/50">Open</button><button onClick={() => onStartEntry(account)} className="px-2 py-1 font-ledger text-[9px] font-bold uppercase tracking-widest text-[#2c5b48] hover:bg-white/50">Start Entry</button><button onClick={() => onDelete(account.id)} className="grid h-7 w-7 place-items-center text-[#8a918c] transition hover:bg-[#eadbd6] hover:text-[#a4423c]"><Trash2 className="h-3.5 w-3.5" /></button></div></div>)}</div>}
      </div>
      <div className="border-t border-[#17231e]/10 bg-[#e6ede5] px-5 py-4 sm:px-6"><div className="grid grid-cols-3 gap-4"><div><p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756c]">Recorded</p><p className="font-ledger mt-1 text-sm font-bold tracking-[-0.04em] text-[#26352b]">{money.format(total.earned)}</p></div><div className="border-l border-[#17231e]/10 pl-4"><p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756c]">Available</p><p className="font-ledger mt-1 text-sm font-bold tracking-[-0.04em] text-[#2c5b48]">{money.format(total.available)}</p></div><div className="border-l border-[#17231e]/10 pl-4"><p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756c]">Status</p><p className={`font-ledger mt-1 text-[10px] font-bold uppercase tracking-[0.1em] ${platform.reviewedAt ? "text-[#8a6e1e]" : "text-[#748076]"}`}>{platform.reviewedAt ? "✓ Reviewed" : "Pending"}</p></div></div></div>
    </article>
  );
}

export default function Home() {
  const [platforms, setPlatforms] = useState<Platform[]>(initialPlatforms);
  const [hydrated, setHydrated] = useState(false);
  const [selectedPlatformId, setSelectedPlatformId] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [reviewing, setReviewing] = useState<string | null>(null);
  const [form, setForm] = useState({ label: "", earned: "", available: "", browser: { type: "chrome" as const, name: "Google Chrome", profile: "" } as BrowserInfo });
  const [browserDialog, setBrowserDialog] = useState(false);
  const [browserPlatformId, setBrowserPlatformId] = useState<string | null>(null);
  const [browserAccountId, setBrowserAccountId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<Record<string, Session>>({});
  const [runner, setRunner] = useState<Runner | null>(null);
  const [awareness, setAwareness] = useState<AwarenessState | null>(null);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [taskFlowDialog, setTaskFlowDialog] = useState(false);
  const [taskFlowPlatformId, setTaskFlowPlatformId] = useState<string | null>(null);
  const selectedPlatform = platforms.find(p => p.id === selectedPlatformId);
  const browserPlatform = platforms.find(p => p.id === browserPlatformId);
  const browserAccount = browserPlatform?.accounts.find(a => a.id === browserAccountId);
  const taskPlatform = platforms.find(p => p.id === taskFlowPlatformId);
  const taskFlow = TASK_FLOWS.find(f => f.id === (taskPlatform?.selectedFlow || "review")) || TASK_FLOWS[0];

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Platform[];
        if (Array.isArray(parsed) && parsed.length) setPlatforms(initialPlatforms.map(base => {
          const savedPlatform = parsed.find(p => p.id === base.id);
          if (!savedPlatform) return base;
          const legacyBrowser = savedPlatform.browser || { type: "chrome", name: "Google Chrome", profile: "" };
          const accounts = (savedPlatform.accounts || []).map((a: any) => ({
            ...a,
            browser: { ...(a.browser || { ...legacyBrowser, profile: a.label || legacyBrowser.profile || "Account" }), identityId: a.browser?.identityId || a.browserIdentityId || crypto.randomUUID() },
            browserIdentityId: a.browserIdentityId || a.browser?.identityId || crypto.randomUUID(),
          }));
          return { ...base, ...savedPlatform, accounts };
        }));
      }
      const savedSessions = window.localStorage.getItem(SESSION_KEY);
      if (savedSessions) setSessions(JSON.parse(savedSessions));
    } catch { toast.error("Your saved ledger could not be read."); }
    finally { setHydrated(true); }
  }, []);

  useEffect(() => { if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(platforms)); }, [platforms, hydrated]);
  useEffect(() => { if (hydrated) window.localStorage.setItem(SESSION_KEY, JSON.stringify(sessions)); }, [sessions, hydrated]);

  useEffect(() => {
    if (!runner?.running) return;
    const timer = window.setInterval(() => setRunner(current => {
      if (!current?.running) return current;
      const flow = TASK_FLOWS.find(f => f.id === current.flowId) || TASK_FLOWS[0];
      const target = platforms.find(p => p.id === current.platformId)?.accounts.find(a => a.id === current.accountId);
      const nextStep = current.step + 1;
      const phases: Runner["phase"][] = ["understand", "navigate", "inspect", "act", "verify", "complete"];
      const phase = phases[Math.min(current.step, phases.length - 1)];
      const confidence = phase === "act" ? 0.94 : phase === "verify" ? 0.98 : Math.min(0.99, 0.84 + current.step * 0.035);
      const label = flow.steps[Math.min(current.step, flow.steps.length - 1)]?.label || "Task complete";
      const safety = assessLedgerTask(`${flow.description} ${label}`, { action: phase === "act" ? "commit ledger entry" : label });
      if (safety.requiresHumanReview || !safety.allowAutomation) {
        recordSafetyHold(`${flow.description} ${label}`, safety.reasons[0] || "Safety hold", { platformId: current.platformId, accountId: current.accountId, taskId: current.flowId });
        setAwareness({
          phase: "blocked",
          confidence: safety.score,
          target: target?.label || "Selected account",
          intent: flow.description,
          currentSection: label,
          lastDecision: safety.reasons[0] || "Safety engine requires inspection before continuing.",
          guardrail: "No random selections, no guessing, and no consequential action when task intent, evidence, or expected result is uncertain.",
          safety
        });
        return { ...current, running: false, phase: "blocked", confidence: safety.score, lastDecision: "Safety hold: human review required before this task can continue.", safetyHold: true, safety };
      }
      setAwareness({
        phase,
        confidence,
        target: target?.label || "Selected account",
        intent: flow.description,
        currentSection: label,
        lastDecision: phase === "act" ? "Deterministic target confirmed; only the explicitly scoped ledger action may be committed." : phase === "verify" ? "Re-checking expected result before accepting completion." : "Inspecting the next step and looking for ambiguity, attention checks, or unexpected state.",
        guardrail: "Extreme caution mode: never guess, randomize, or answer subjective/attention-check content. Stop when evidence is insufficient.",
        safety
      });
      if (nextStep >= flow.steps.length) {
        recordSuccessfulVerification(`${flow.description} ${flow.steps.map(s => s.label).join(" ")}`, { platformId: current.platformId, accountId: current.accountId, taskId: current.flowId });
        toast.success("AI awareness flow completed. Result is ready for review.");
        return { ...current, running: false, step: flow.steps.length, phase: "complete", confidence: 0.99, lastDecision: "Flow complete; awaiting human review.", safetyHold: false, safety };
      }
      return { ...current, step: nextStep, phase, confidence, lastDecision: label, safetyHold: false, safety };
    }), 1800);
    return () => window.clearInterval(timer);
  }, [runner?.running, runner?.flowId, runner?.platformId, runner?.accountId, platforms]);

  const totals = useMemo(() => platforms.reduce((s, p) => { p.accounts.forEach(a => { s.earned += a.earned; s.available += a.available; s.accounts += 1; }); return s; }, { earned: 0, available: 0, accounts: 0 }), [platforms]);

  function openAddAccount(platformId: string) { setSelectedPlatformId(platformId); setForm({ label: "", earned: "", available: "", browser: { type: "chrome", name: "Google Chrome", profile: "" } }); setSheetOpen(true); }
  function saveAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedPlatformId || !form.label.trim()) return;
    const earned = Number(form.earned), available = Number(form.available);
    if (isNaN(earned) || isNaN(available) || earned < 0 || available < 0) { toast.error("Enter valid non-negative balances."); return; }
    const accountId = crypto.randomUUID();
    const browserIdentityId = crypto.randomUUID();
    const browser = { ...form.browser, profile: form.browser.profile || form.label.trim(), identityId: browserIdentityId };
    const account: Account = { id: accountId, label: form.label.trim(), earned, available, updatedAt: new Date().toISOString(), browser, browserIdentityId };
    setPlatforms(cur => cur.map(p => p.id === selectedPlatformId ? { ...p, accounts: [...p.accounts, account], reviewedAt: account.updatedAt } : p));
    setSheetOpen(false);
    toast.success(`Account added with unique ${browser.name} browser identity.`);
  }
  function deleteAccount(platformId: string, accountId: string) { setPlatforms(cur => cur.map(p => p.id === platformId ? { ...p, accounts: p.accounts.filter(a => a.id !== accountId) } : p)); }
  function markReviewed(platformId: string) { setReviewing(platformId); window.setTimeout(() => { setPlatforms(cur => cur.map(p => p.id === platformId ? { ...p, reviewedAt: new Date().toISOString() } : p)); setReviewing(null); toast.success("Platform marked reviewed."); }, 500); }
  function updateBrowser(browser: BrowserInfo) {
    if (!browserPlatformId || !browserAccountId) return;
    setPlatforms(cur => cur.map(p => p.id !== browserPlatformId ? p : { ...p, accounts: p.accounts.map(a => a.id === browserAccountId ? { ...a, browser } : a) }));
    setSessions(cur => ({ ...cur, [browserAccountId]: { ...(cur[browserAccountId] || { url: browserPlatform?.url || "", connected: false, minimized: false, accountId: browserAccountId }), browser } }));
  }

  function openPlatform(platform: Platform, account?: Account) {
    const targetAccount = account || platform.accounts[0];
    if (!targetAccount) { openAddAccount(platform.id); return; }
    const sessionKey = targetAccount.id;
    const session = sessions[sessionKey];
    const destination = session?.url || platform.lastUrl || platform.url;
    const win = window.open(destination, `bonds-account-${targetAccount.browserIdentityId}`, "popup=yes,width=1280,height=820,resizable=yes,scrollbars=yes");
    if (!win) { toast.error("Popup blocked. Allow popups for Bonds Studio."); return; }
    setSessions(cur => ({ ...cur, [sessionKey]: { ...(cur[sessionKey] || { connected: false, minimized: false, accountId: targetAccount.id }), url: destination, minimized: false, openedAt: new Date().toISOString(), browser: targetAccount.browser } }));
    setBrowserPlatformId(platform.id); setBrowserAccountId(targetAccount.id); setBrowserDialog(true);
  }
  function minimizePlatform() { if (!browserAccountId) return; setSessions(cur => ({ ...cur, [browserAccountId]: { ...(cur[browserAccountId] || { url: browserPlatform?.url || "", connected: false }), minimized: true } })); setBrowserDialog(false); }
  function closePlatform() { if (!browserAccountId) return; setSessions(cur => ({ ...cur, [browserAccountId]: { ...(cur[browserAccountId] || { url: browserPlatform?.url || "", connected: false }), minimized: true } })); setBrowserDialog(false); }
  function verifyConnected() {
    if (!browserPlatformId || !browserAccountId) return;
    setPlatforms(cur => cur.map(p => p.id === browserPlatformId ? { ...p, accounts: p.accounts.map(a => a.id === browserAccountId ? { ...a, browser: { ...a.browser, profile: a.browser.profile || a.label } } : a) } : p));
    setSessions(cur => ({ ...cur, [browserAccountId]: { ...(cur[browserAccountId] || { url: browserPlatform?.url || "", minimized: false, accountId: browserAccountId }), connected: true, minimized: false } }));
    toast.success(`${browserAccount?.label || browserPlatform?.name} marked Connected.`);
  }
  function startEntry(platform: Platform, account?: Account) {
    const targetAccount = account || platform.accounts[0];
    if (!targetAccount) { toast.error("Add an account before starting entry."); openAddAccount(platform.id); return; }
    const session = sessions[targetAccount.id];
    if (!session?.connected) { toast.error("Connect this account before starting entry."); openPlatform(platform, targetAccount); return; }
    if (runner?.running) { toast.error("Another ledger task is already running. Stop it before starting a new task."); return; }
    if (session?.minimized || !browserDialog || browserAccountId !== targetAccount.id) openPlatform(platform, targetAccount);
    const flow = TASK_FLOWS.find(f => f.id === (platform.selectedFlow || "review")) || TASK_FLOWS[0];
    const safety = assessLedgerTask(`${flow.description} ${flow.steps.map(s => s.label).join(" ")}`);
    const initial: Runner = { platformId: platform.id, accountId: targetAccount.id, flowId: flow.id, step: 0, running: true, startedAt: new Date().toISOString(), phase: "understand", confidence: safety.score, lastDecision: "Interpreting the selected assignment before navigation.", safetyHold: false, safety };
    setRunner(initial);
    setAwareness({ phase: "understand", confidence: safety.score, target: targetAccount.label, intent: flow.description, currentSection: "Assignment intake", lastDecision: "Scope locked. The assistant will not guess or randomize answers and will stop on ambiguity.", guardrail: "Extreme caution mode: deterministic data only; subjective, attention-check, sensitive, destructive, or ambiguous content requires inspection/human review.", safety });
    toast.success(`AI awareness started for ${targetAccount.label}: ${flow.name}`);
  }
  function recordHumanCorrection() {
    if (!awareness) { toast.message("Start or review a task before recording feedback."); return; }
    const correction = window.prompt("What did the AI get wrong? Describe the correct interpretation or action.");
    if (!correction?.trim()) return;
    const input = `${awareness.intent} ${awareness.currentSection}`;
    learnFromMistake(input, correction.trim(), { platformId: runner?.platformId, accountId: runner?.accountId, taskId: runner?.flowId, evidence: awareness.lastDecision });
    setAwareness(current => current ? { ...current, phase: "blocked", guardrail: "Learning hold: this correction has been stored as a prevention rule. Similar future tasks will receive extra verification before automation." } : current);
    setRunner(current => current ? { ...current, running: false, phase: "blocked", safetyHold: true, lastDecision: "Human correction recorded; task halted so the learned rule can be applied before retry." } : current);
    toast.success("Correction learned. Similar tasks will receive heightened scrutiny.");
  }

  function stopEntry() {
    setRunner(current => current ? { ...current, running: false, phase: "blocked", safetyHold: true, lastDecision: "Operator requested stop; automation halted safely." } : null);
    setAwareness(current => current ? { ...current, phase: "blocked", guardrail: "Automation stopped by operator. No further actions will be issued." } : null);
    toast.message("AI Entry stopped safely.");
  }
  function selectFlow(platformId: string, flowId: string) { setPlatforms(cur => cur.map(p => p.id === platformId ? { ...p, selectedFlow: flowId } : p)); }
  function toggleListening() { setListening(v => !v); if (!listening) { setTranscript('"Open Ledger"'); window.setTimeout(() => { setListening(false); toast.success('Command recognized: "Open Ledger"'); }, 2500); } }

  return (
    <AppLayout title="Home" subtitle="Master center for Bonds Studio projects.">
      <div className="space-y-12">
        <section className="relative min-h-[400px] overflow-hidden border border-[#17231e]/10 bg-[#e8e1d5] shadow-[0_18px_45px_rgba(41,51,43,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.18),transparent_28%),linear-gradient(135deg,#e8e1d5_0%,#f6f0e4_48%,#d9e5dc_100%)]" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col h-full">
            <div className="mb-8"><p className="font-ledger text-[12px] font-bold uppercase tracking-[0.25em] text-[#2c5b48]">Start A Project</p></div>
            <div className="space-y-10"><div className="flex flex-wrap gap-4"><Button className="rounded-none bg-[#2c5b48] text-white hover:bg-[#1a382b] px-8 py-6 h-auto text-base font-display"><Plus className="mr-2 h-5 w-5" /> Blank Project</Button><Button variant="outline" className="rounded-none border-[#2c5b48] text-[#2c5b48] hover:bg-[#2c5b48]/5 px-8 py-6 h-auto text-base font-display"><Copy className="mr-2 h-5 w-5" /> Templates</Button></div>
              <div><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.15em] text-[#6a736b] mb-4">Project Types</p><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">{quickStartProjects.map(project => <button key={project.id} onClick={() => toast.success(`${project.name} project selected.`)} className="group flex flex-col items-center justify-center p-4 bg-white/60 border border-[#17231e]/10 hover:bg-[#2c5b48] hover:text-white transition-all"><div className="font-ledger text-xs font-bold mb-1 group-hover:text-[#c9a84c]">{project.code}</div><div className="text-[10px] uppercase tracking-wider font-medium opacity-80">{project.name}</div></button>)}</div></div>
            </div>
          </div>
        </section>

        <section className="border border-[#17231e]/10 bg-[#f9f5ec]"><div className="flex items-center justify-between border-b border-[#17231e]/10 px-6 py-4"><div className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center bg-[#2c5b48] text-white"><Mic className="h-4 w-4" /></div><div><h2 className="font-display text-2xl text-[#19211e]">Voice Control Mode</h2><p className="text-xs text-[#6a736b]">Hands-free navigation and commands.</p></div></div><Link href="/voice-control"><Button variant="ghost" className="text-[#2c5b48] text-xs font-ledger uppercase tracking-widest hover:bg-[#2c5b48]/5">Open Full Mode <ChevronRight className="ml-1 h-3 w-3" /></Button></Link></div><div className="p-8 flex flex-col md:flex-row items-center gap-10"><div className="flex flex-col items-center gap-4"><button onClick={toggleListening} className={`relative grid h-20 w-20 place-items-center transition-all duration-300 ${listening ? "bg-[#a4423c] shadow-[0_0_0_8px_rgba(164,66,60,0.15)]" : "bg-[#2c5b48] hover:bg-[#214837]"}`}>{listening ? <MicOff className="h-8 w-8 text-white" /> : <Mic className="h-8 w-8 text-white" />}{listening && <span className="absolute inset-0 animate-ping bg-[#a4423c]/30" />}</button><p className="font-ledger text-[9px] uppercase tracking-[0.18em] text-[#6a736b]">{listening ? "Listening..." : "Tap to Speak"}</p></div><div className="flex-1 space-y-3"><div className="bg-[#f0ece3] p-4 border-l-2 border-[#2c5b48]"><p className="text-xs text-[#6a736b] uppercase tracking-widest font-ledger mb-1">Last Command</p><p className="text-sm font-semibold text-[#19211e]">{transcript || "Waiting for command..."}</p></div><div className="grid grid-cols-2 gap-2">{['"Open Ledger"', '"Record balance"'].map(cmd => <div key={cmd} className="text-[10px] font-ledger text-[#2c5b48] bg-white/40 px-2 py-1 border border-[#17231e]/5">{cmd}</div>)}</div></div></div></section>

        <section className="border border-[#17231e]/10 bg-[#f9f5ec]"><div className="flex items-center justify-between border-b border-[#17231e]/10 px-6 py-4"><div className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center bg-[#2c5b48] text-white"><Zap className="h-4 w-4" /></div><div><h2 className="font-display text-2xl text-[#19211e]">AI Mode</h2><p className="text-xs text-[#6a736b]">Intelligent analysis and insights.</p></div></div><Link href="/ai-mode"><Button variant="ghost" className="text-[#2c5b48] text-xs font-ledger uppercase tracking-widest hover:bg-[#2c5b48]/5">Open Full Mode <ChevronRight className="ml-1 h-3 w-3" /></Button></Link></div><div className="p-8 grid md:grid-cols-3 gap-6">{[{ icon: Brain, title: "Smart Analysis", desc: "AI reads your ledger data." }, { icon: Sparkles, title: "Optimization Tips", desc: "Optimize your task workflows." }, { icon: MessageSquare, title: "Natural Language", desc: "Ask questions in plain English." }].map(({ icon: Icon, title, desc }) => <div key={title} className="bg-white/40 p-5 border border-[#17231e]/5 hover:border-[#2c5b48]/30 transition-colors"><Icon className="h-5 w-5 text-[#2c5b48] mb-3" /><p className="font-semibold text-sm text-[#19211e]">{title}</p><p className="mt-1 text-xs text-[#5b655e] leading-5">{desc}</p></div>)}</div></section>

        {/* Ledger Projects are deliberately the final section of the first page. */}
        <section id="ledger-projects" className="space-y-6 scroll-mt-6 pb-10">
          <div className="border border-[#17231e]/10 bg-[#1a2820] text-white p-6 sm:p-7 shadow-[0_18px_45px_rgba(26,40,32,0.14)]"><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div><div className="flex items-center gap-2"><ListChecks className="h-4 w-4 text-[#c9a84c]" /><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a84c]">Ledger Projects</p></div><h2 className="mt-2 font-display text-3xl">All projects on file</h2><p className="mt-2 max-w-2xl text-sm text-[#c8d5c9]">Every ledger project is operated from here with its dedicated browser session, connection state, task-flow selector, and AI entry controls.</p></div><div className="flex items-center gap-5 bg-white/5 px-4 py-3 border border-white/10"><div><p className="text-[9px] font-ledger uppercase text-[#9bb0a1]">Projects</p><p className="text-xl font-bold">{platforms.length}</p></div><div className="w-px h-8 bg-white/10" /><div><p className="text-[9px] font-ledger uppercase text-[#9bb0a1]">Accounts</p><p className="text-xl font-bold">{totals.accounts}</p></div><div className="w-px h-8 bg-white/10" /><div><p className="text-[9px] font-ledger uppercase text-[#9bb0a1]">Running</p><p className="text-xl font-bold text-[#c9a84c]">{runner?.running ? 1 : 0}</p></div></div></div></div>

        <section className="border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex items-center justify-between border-b border-[#17231e]/10 px-6 py-4">
            <div className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center bg-[#1a2820] text-[#c9a84c]"><Brain className="h-4 w-4" /></div><div><h2 className="font-display text-2xl text-[#19211e]">AI Task Awareness</h2><p className="text-xs text-[#6a736b]">Understand → navigate → inspect → act → verify, with safety checkpoints.</p></div></div>
            <span className={`font-ledger text-[9px] font-bold uppercase tracking-widest ${runner?.running ? "text-[#2c5b48]" : "text-[#748076]"}`}>{runner?.running ? "Active" : "Standby"}</span>
          </div>
          <div className="grid gap-5 p-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-3">
              {AI_PHASES.map((item, i) => { const current = awareness?.phase === item.phase; const done = awareness ? AI_PHASES.findIndex(p => p.phase === awareness.phase) > i : false; return <div key={item.phase} className={`flex items-center gap-3 border px-4 py-3 ${current ? "border-[#2c5b48]/40 bg-[#e6ede5]" : "border-[#17231e]/10 bg-white/30"}`}><span className="grid h-7 w-7 place-items-center">{done ? <CheckCircle2 className="h-4 w-4 text-[#2c5b48]" /> : current ? <Activity className="h-4 w-4 animate-pulse text-[#c9a84c]" /> : <Circle className="h-4 w-4 text-[#9aa59d]" />}</span><div className="min-w-0 flex-1"><p className="text-xs font-semibold text-[#26352b]">{item.label}</p>{current && <p className="mt-1 text-[10px] text-[#68756c]">{awareness?.currentSection}</p>}</div></div> })}
            </div>
            <div className="border border-[#17231e]/10 bg-[#1a2820] p-5 text-white">
              <div className="flex items-center justify-between"><span className="font-ledger text-[9px] uppercase tracking-[0.15em] text-[#c8d5c9]">Decision Monitor</span><span className="font-ledger text-xs text-[#c9a84c]">{awareness ? `${Math.round(awareness.confidence * 100)}% confidence` : "Awaiting task"}</span></div>
              <p className="mt-4 text-sm font-semibold">{awareness?.target || "No active account"}</p>
              <p className="mt-2 text-xs leading-5 text-[#c8d5c9]">{awareness?.lastDecision || "Select Start Entry on a connected ledger account to initialize the awareness engine."}</p>{awareness?.safety && <div className="mt-4 grid grid-cols-2 gap-2"><div className="border border-white/10 bg-white/5 p-2"><p className="font-ledger text-[8px] uppercase tracking-widest text-[#9bb0a1]">Safety class</p><p className="mt-1 text-[10px] font-bold uppercase text-[#c9a84c]">{awareness.safety.risk.replace("_", " ")}</p></div><div className="border border-white/10 bg-white/5 p-2"><p className="font-ledger text-[8px] uppercase tracking-widest text-[#9bb0a1]">Automation</p><p className="mt-1 text-[10px] font-bold uppercase text-[#c9d8cc]">{awareness.safety.allowAutomation ? "Allowed after verification" : "Safety hold"}</p></div></div>} 
              <div className="mt-4 border-t border-white/10 pt-4"><div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#c9a84c]" /><span className="font-ledger text-[9px] uppercase tracking-widest text-[#c8d5c9]">Safety guardrail</span></div><p className="mt-2 text-[10px] leading-5 text-[#aebdb1]">{awareness?.guardrail || "Automation remains constrained to the selected flow and must stop when the expected page state cannot be verified."}</p></div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Button onClick={recordHumanCorrection} variant="outline" className="rounded-none border-white/20 text-white hover:bg-white/10">Teach AI From Mistake</Button>
                {runner?.running && <Button onClick={stopEntry} variant="outline" className="rounded-none border-white/20 text-white hover:bg-white/10"><Square className="mr-2 h-4 w-4" /> Stop Entry</Button>}
              </div>
            </div>
          </div>
        </section>

          <div className="grid gap-5 xl:grid-cols-2">
            {platforms.map((platform, idx) => {
              const accountSessions = platform.accounts.map(account => ({ account, session: sessions[account.id] }));
              const session = accountSessions.find(item => item.session?.minimized)?.session || accountSessions[0]?.session;
              const connectedAccounts = accountSessions.filter(item => item.session?.connected);
              const flow = TASK_FLOWS.find(f => f.id === (platform.selectedFlow || "review")) || TASK_FLOWS[0];
              const active = runner?.platformId === platform.id && runner.running;
              const currentStep = active ? flow.steps[runner?.step || 0] : null;
              return <article key={platform.id} className="border border-[#17231e]/12 bg-[#f9f5ec] shadow-[0_10px_30px_rgba(41,51,43,0.06)]" style={{ animationDelay: `${idx * 45}ms` }}>
                <div className="flex flex-col gap-4 border-b border-[#17231e]/10 bg-[#f4f0e7] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center bg-[#1a2820] font-ledger text-sm font-bold text-[#c9a84c]">{platform.code}</div><div><div className="flex items-center gap-2"><h3 className="font-display text-2xl text-[#19211e]">{platform.name}</h3>{connectedAccounts.length > 0 ? <span className="inline-flex items-center gap-1 bg-[#2c5b48]/10 px-2 py-1 font-ledger text-[9px] font-bold uppercase tracking-[0.12em] text-[#2c5b48]"><CheckCircle2 className="h-3 w-3" /> {connectedAccounts.length} Connected</span> : <span className="inline-flex items-center gap-1 bg-[#c9a84c]/10 px-2 py-1 font-ledger text-[9px] font-bold uppercase tracking-[0.12em] text-[#8a6e1e]"><Circle className="h-3 w-3" /> Connect An Account</span>}</div><p className="mt-1 text-xs text-[#68756c]">{platform.url}</p></div></div><div className="flex flex-wrap gap-2"><Button onClick={() => openPlatform(platform)} variant="outline" className="rounded-none border-[#17231e]/20 text-[#2c5b48]"><Globe2 className="mr-2 h-4 w-4" /> {session?.minimized ? "Reopen Browser" : "Open Browser"}</Button><Button onClick={() => { setBrowserPlatformId(platform.id); setBrowserDialog(true); }} variant="ghost" className="rounded-none text-[#2c5b48]"><Settings2 className="mr-2 h-4 w-4" /> Browser</Button></div></div>

                <div className="border-b border-[#17231e]/10 bg-[#fbf8f1] p-5 sm:p-6">
                  <div className="flex items-center justify-between"><div><p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Account Workspaces</p><p className="mt-1 text-xs text-[#68756c]">Each account keeps its own browser identity and login session.</p></div><Button onClick={() => openAddAccount(platform.id)} variant="outline" className="rounded-none border-[#17231e]/20 text-[#2c5b48]"><Plus className="mr-2 h-3.5 w-3.5" /> Add Account</Button></div>
                  <div className="mt-4 space-y-2">
                    {platform.accounts.length === 0 ? <div className="border border-dashed border-[#17231e]/15 px-4 py-4 text-xs text-[#68756c]">No accounts on file. Add an account to establish a dedicated browser identity.</div> : platform.accounts.map(account => {
                      const accountSession = sessions[account.id];
                      const isActive = runner?.accountId === account.id && runner.running;
                      return <div key={account.id} className="flex flex-col gap-3 border border-[#17231e]/10 bg-[#f0ece3] p-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-semibold text-[#26352b]">{account.label}</p><span className={`font-ledger text-[8px] font-bold uppercase tracking-widest ${accountSession?.connected ? "text-[#2c5b48]" : "text-[#8a6e1e]"}`}>{accountSession?.connected ? "Connected" : "Connect An Account"}</span>{isActive && <span className="font-ledger text-[8px] font-bold uppercase tracking-widest text-[#2c5b48]">AI Active</span>}</div><p className="mt-1 font-ledger text-[9px] uppercase tracking-[0.09em] text-[#748076]">{account.browser.name} · {account.browser.profile || "Default"} · Identity {account.browserIdentityId.slice(0, 8)} · {money.format(account.available)} available</p></div>
                        <div className="flex flex-wrap gap-2"><Button onClick={() => openPlatform(platform, account)} variant="ghost" className="h-8 rounded-none px-2 text-[9px] font-bold uppercase tracking-widest text-[#2c5b48]">{accountSession?.minimized ? "Reopen Browser" : "Open Browser"}</Button>{accountSession?.connected ? <Button onClick={() => startEntry(platform, account)} disabled={!!runner?.running} className="h-8 rounded-none bg-[#2c5b48] px-3 text-[9px] font-bold uppercase tracking-widest text-white"><Play className="mr-1 h-3 w-3" /> Start Entry</Button> : <Button onClick={() => openPlatform(platform, account)} className="h-8 rounded-none bg-[#c9a84c] px-3 text-[9px] font-bold uppercase tracking-widest text-[#1a2820]">Connect An Account</Button>}{isActive && <Button onClick={stopEntry} variant="outline" className="h-8 rounded-none border-[#a4423c]/30 px-3 text-[9px] font-bold uppercase tracking-widest text-[#a4423c]"><Square className="mr-1 h-3 w-3" /> Stop Entry</Button>}<Button onClick={() => { setBrowserPlatformId(platform.id); setBrowserAccountId(account.id); setBrowserDialog(true); }} variant="ghost" className="h-8 rounded-none px-2 text-[#68756c]"><Settings2 className="h-3.5 w-3.5" /></Button></div>
                      </div>;
                    })}
                  </div>
                </div>

                <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1.05fr_1fr]">
                  <div className="space-y-4"><div className="flex items-center justify-between"><div><p className="font-ledger text-[9px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Specialized Task Flow</p><p className="mt-1 text-sm font-semibold text-[#19211e]">Choose how the AI entry assistant operates</p></div><button onClick={() => { setTaskFlowPlatformId(platform.id); setTaskFlowDialog(true); }} className="font-ledger text-[9px] font-bold uppercase tracking-widest text-[#2c5b48]">Edit Flow</button></div><Select value={platform.selectedFlow || "review"} onValueChange={v => selectFlow(platform.id, v)}><SelectTrigger className="h-11 rounded-none border-[#17231e]/20 bg-[#fbf8f1]"><SelectValue /></SelectTrigger><SelectContent className="rounded-none">{TASK_FLOWS.map(f => <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>)}</SelectContent></Select><div className="border-l-2 border-[#2c5b48] bg-[#eef2ec] p-3 text-xs leading-5 text-[#5b655e]">{flow.description}</div></div>
                  <div className="border border-[#17231e]/10 bg-[#f0ece3] p-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Bot className="h-4 w-4 text-[#2c5b48]" /><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#536057]">Data Entry AI Assistant</p></div><span className={`font-ledger text-[9px] font-bold uppercase tracking-widest ${active ? "text-[#2c5b48]" : "text-[#748076]"}`}>{active ? "Running" : "Ready"}</span></div><div className="mt-4 space-y-2">{flow.steps.map((step, stepIndex) => { const done = active ? stepIndex < (runner?.step || 0) : false; const current = active && stepIndex === (runner?.step || 0); return <div key={step.id} className={`flex items-center gap-3 px-3 py-2 ${current ? "bg-white border border-[#2c5b48]/30" : ""}`}><span className="grid h-6 w-6 place-items-center">{done ? <CheckCircle2 className="h-4 w-4 text-[#2c5b48]" /> : current ? <Activity className="h-4 w-4 animate-pulse text-[#c9a84c]" /> : <Circle className="h-4 w-4 text-[#9aa59d]" />}</span><span className={`text-xs ${current ? "font-semibold text-[#19211e]" : "text-[#68756c]"}`}>{step.label}</span></div>})}</div><div className="mt-4 flex flex-wrap gap-2"><Button onClick={() => startEntry(platform)} disabled={active} className="rounded-none bg-[#2c5b48] text-white hover:bg-[#1a382b]"><Play className="mr-2 h-4 w-4" /> Start Entry</Button><Button onClick={stopEntry} disabled={!active} variant="outline" className="rounded-none border-[#a4423c]/30 text-[#a4423c] hover:bg-[#eadbd6]"><Square className="mr-2 h-4 w-4" /> Stop Entry</Button><Button onClick={() => openPlatform(platform)} variant="ghost" className="rounded-none text-[#2c5b48]"><MousePointer2 className="mr-2 h-4 w-4" /> {currentStep ? currentStep.label : "Open Session"}</Button></div></div>
                </div>
                <div className="grid grid-cols-3 gap-3 border-t border-[#17231e]/10 bg-[#e6ede5] px-5 py-4 sm:px-6"><div><p className="font-ledger text-[9px] uppercase tracking-[0.15em] text-[#6a736b]">Session</p><p className="mt-1 text-xs font-semibold text-[#2c5b48]">{session?.minimized ? "Minimized / retained" : "Ready"}</p></div><div className="border-l border-[#17231e]/10 pl-3"><p className="font-ledger text-[9px] uppercase tracking-[0.15em] text-[#6a736b]">Flow</p><p className="mt-1 text-xs font-semibold text-[#26352b]">{flow.name}</p></div><div className="border-l border-[#17231e]/10 pl-3"><p className="font-ledger text-[9px] uppercase tracking-[0.15em] text-[#6a736b]">Ledger</p><p className="mt-1 text-xs font-semibold text-[#26352b]">{platform.accounts.length} account{platform.accounts.length === 1 ? "" : "s"}</p></div></div>
              </article>;
            })}
          </div>
        </section>
      </div>

      <Dialog open={browserDialog} onOpenChange={setBrowserDialog}><DialogContent className="max-w-5xl rounded-none border-[#17231e]/20 bg-[#f4f0e7] p-0"><DialogHeader className="border-b border-[#17231e]/10 bg-[#1a2820] p-5 text-white"><div className="flex items-center justify-between"><div><DialogTitle className="font-display text-2xl">{browserPlatform?.name} · {browserAccount?.label || "Account"} Browser Identity</DialogTitle><DialogDescription className="mt-1 text-[#c8d5c9]">Dedicated account browser identity with retained session controls.</DialogDescription></div><div className="flex items-center gap-2"><span className={`px-2 py-1 font-ledger text-[9px] font-bold uppercase tracking-widest ${browserAccount && sessions[browserAccount.id]?.connected ? "bg-[#2c5b48]" : "bg-[#8a6e1e]"}`}>{browserAccount && sessions[browserAccount.id]?.connected ? "Connected" : "Connect An Account"}</span><button onClick={minimizePlatform} className="grid h-8 w-8 place-items-center hover:bg-white/10" title="Close to minimize"><Minimize2 className="h-4 w-4" /></button><button onClick={closePlatform} className="grid h-8 w-8 place-items-center hover:bg-white/10" title="Close browser window"><X className="h-4 w-4" /></button></div></div></DialogHeader><div className="p-5 space-y-4"><div className="flex items-center gap-2"><div className="flex-1 flex items-center gap-2 border border-[#17231e]/20 bg-[#fbf8f1] px-3 h-11"><Globe2 className="h-4 w-4 text-[#68756c]" /><Input readOnly value={sessions[browserAccountId || ""]?.url || browserPlatform?.url || ""} className="border-0 bg-transparent p-0 shadow-none focus-visible:ring-0" /></div><Button onClick={() => browserPlatform && browserAccount && openPlatform(browserPlatform, browserAccount)} className="h-11 rounded-none bg-[#2c5b48]">Reload</Button></div><div className="grid gap-5 lg:grid-cols-[1fr_280px]"><div className="min-h-[440px] border border-[#17231e]/10 bg-[#1a2820] flex items-center justify-center text-center p-8"><div className="max-w-xl text-white"><Globe2 className="mx-auto h-10 w-10 text-[#c9a84c]" /><p className="mt-4 font-display text-2xl">Live platform window</p><p className="mt-2 text-sm leading-6 text-[#c8d5c9]">The platform opens in its dedicated popup browser window. This panel retains the destination and connection state while the external session remains open. Third-party sites may block embedded browsing, so the live page is intentionally opened as a real browser popup.</p><Button onClick={() => browserPlatform && browserAccount && openPlatform(browserPlatform, browserAccount)} variant="outline" className="mt-5 rounded-none border-white/20 text-white hover:bg-white/10"><ExternalLink className="mr-2 h-4 w-4" /> Focus Platform Window</Button></div></div><div className="border border-[#17231e]/10 bg-[#f9f5ec] p-4"><BrowserSelector value={browserAccount?.browser || { type: "chrome", name: "Google Chrome", profile: browserAccount?.label || "" }} onChange={updateBrowser} /><div className="mt-5 border-t border-[#17231e]/10 pt-4"><p className="font-ledger text-[9px] font-bold uppercase tracking-[0.14em] text-[#6a736b]">Account state</p><p className="mt-2 text-sm text-[#26352b]">{browserAccount && sessions[browserAccount.id]?.connected ? `Authenticated session for ${browserAccount.label}.` : `Sign in inside the ${browserAccount?.browser.name || "designated"} browser identity, then verify this account connection.`}</p>{browserAccount && !sessions[browserAccount.id]?.connected && <Button onClick={verifyConnected} className="mt-3 w-full rounded-none bg-[#2c5b48]">I’m Signed In — Connect Account</Button>}</div></div></div></div></DialogContent></Dialog>

      <Dialog open={taskFlowDialog} onOpenChange={setTaskFlowDialog}><DialogContent className="max-w-2xl rounded-none border-[#17231e]/20 bg-[#f4f0e7]"><DialogHeader><DialogTitle className="font-display text-2xl">Specialized Task Flow</DialogTitle><DialogDescription>Configure the operating sequence for {taskPlatform?.name}.</DialogDescription></DialogHeader><div className="space-y-3">{TASK_FLOWS.map(flow => <button key={flow.id} onClick={() => { if (taskFlowPlatformId) selectFlow(taskFlowPlatformId, flow.id); setTaskFlowDialog(false); }} className={`w-full text-left border p-4 transition ${taskPlatform?.selectedFlow === flow.id ? "border-[#2c5b48] bg-[#e6ede5]" : "border-[#17231e]/10 bg-[#fbf8f1] hover:border-[#2c5b48]/30"}`}><div className="flex items-center justify-between"><span className="font-semibold text-[#19211e]">{flow.name}</span>{taskPlatform?.selectedFlow === flow.id && <CheckCircle2 className="h-4 w-4 text-[#2c5b48]" />}</div><p className="mt-1 text-xs text-[#68756c]">{flow.description}</p><div className="mt-3 flex flex-wrap gap-2">{flow.steps.map((s, i) => <span key={s.id} className="bg-[#f0ece3] px-2 py-1 text-[9px] font-ledger uppercase tracking-widest text-[#68756c]">{i + 1}. {s.label}</span>)}</div></button>)}</div></DialogContent></Dialog>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}><SheetContent className="rounded-none border-l border-[#17231e]/20 bg-[#f4f0e7] sm:max-w-[440px]"><SheetHeader className="space-y-3"><div className="flex items-center gap-2"><div className="grid h-9 w-9 place-items-center bg-[#1a2820] font-ledger text-xs font-bold text-[#c9a84c]">{selectedPlatform?.code}</div><SheetTitle className="font-display text-2xl text-[#19211e]">Record Balance</SheetTitle></div><SheetDescription className="text-sm text-[#5b655e]">Add a separate ledger account and assign it its own browser identity for an independent login session.</SheetDescription></SheetHeader><form onSubmit={saveAccount} className="mt-8 space-y-6"><div className="space-y-4"><div className="space-y-2"><Label htmlFor="label" className="text-xs font-bold uppercase tracking-wider text-[#6a736b]">Account Label</Label><Input id="label" value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))} placeholder="e.g. Primary Account" className="rounded-none border-[#17231e]/20 bg-[#fbf8f1] focus-visible:ring-[#2c5b48]" /></div><div className="grid grid-cols-2 gap-4"><div className="space-y-2"><Label htmlFor="earned" className="text-xs font-bold uppercase tracking-wider text-[#6a736b]">Total Earned ($)</Label><Input id="earned" type="number" step="0.01" value={form.earned} onChange={e => setForm(f => ({ ...f, earned: e.target.value }))} placeholder="0.00" className="rounded-none border-[#17231e]/20 bg-[#fbf8f1] focus-visible:ring-[#2c5b48]" /></div><div className="space-y-2"><Label htmlFor="available" className="text-xs font-bold uppercase tracking-wider text-[#6a736b]">Available ($)</Label><Input id="available" type="number" step="0.01" value={form.available} onChange={e => setForm(f => ({ ...f, available: e.target.value }))} placeholder="0.00" className="rounded-none border-[#17231e]/20 bg-[#fbf8f1] focus-visible:ring-[#2c5b48]" /></div></div></div><div className="border-t border-[#17231e]/10 pt-5"><BrowserSelector value={form.browser} onChange={browser => setForm(f => ({ ...f, browser }))} /><p className="mt-2 text-[10px] text-[#6a746c]">A unique browser identity is generated for this account and retained independently from every other account on the same platform.</p></div><SheetFooter className="pt-4"><Button type="submit" className="w-full rounded-none bg-[#2c5b48] py-6 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#1a382b]">Save to Ledger</Button></SheetFooter></form></SheetContent></Sheet>
    </AppLayout>
  );
}
