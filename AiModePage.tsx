import { AppLayout } from "@/components/AppLayout";
import { VoicePromptSubmissionBridge } from "@/components/VoicePromptSubmissionBridge";
import { AIChatBox, type Message } from "@/components/AIChatBox";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { AlertCircle, Brain, Check, Cpu, Loader2, Plus, Sparkles, Trash2, Wrench, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { DataEntryAutomationPanel } from "@/components/DataEntryAutomationPanel";

const SUGGESTIONS = [
  "Give me an overview of this workspace",
  "List my registered domains",
  "Inspect the DNS records for my active domain",
  "Explain how I should configure an authoritative zone",
];

const FALLBACK_MODELS = ["gpt-5-mini", "gpt-5", "claude-sonnet-4-6"];

export default function AiModePage() {
  const utils = trpc.useUtils();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [model, setModel] = useState<string>(FALLBACK_MODELS[0]);
  const [reasoningLevel, setReasoningLevel] = useState<"minimal" | "low" | "medium" | "high">("low");
  const [executionStyle, setExecutionStyle] = useState<"fast" | "architect">("fast");
  const [lastActivity, setLastActivity] = useState<Array<{ name: string; status: string }>>([]);
  const [toolRounds, setToolRounds] = useState(0);
  const [executionSource, setExecutionSource] = useState<"typed" | "voice">("typed");
  const [executionStartedAt, setExecutionStartedAt] = useState<number | null>(null);
  const [executionCompleted, setExecutionCompleted] = useState(false);

  const conversations = trpc.ai.conversations.useQuery();
  const models = trpc.ai.models.useQuery();
  const conversation = trpc.ai.getConversation.useQuery(
    { id: selectedId ?? 0 },
    { enabled: selectedId !== null, refetchInterval: selectedId !== null ? 800 : false },
  );
  const createConversation = trpc.ai.createConversation.useMutation({
    onSuccess: created => {
      setSelectedId(created.id);
      setModel(created.model ?? FALLBACK_MODELS[0]);
      setReasoningLevel(created.reasoningLevel);
      void utils.ai.conversations.invalidate();
      void utils.ai.getConversation.invalidate({ id: created.id });
    },
    onError: error => toast.error(error.message),
  });
  const deleteConversation = trpc.ai.deleteConversation.useMutation({
    onSuccess: () => {
      setSelectedId(null);
      void utils.ai.conversations.invalidate();
      toast.success("Conversation deleted.");
    },
    onError: error => toast.error(error.message),
  });
  const sendMessage = trpc.ai.send.useMutation({
    onSuccess: result => {
      setExecutionCompleted(true);
      setLastActivity(result.activity);
      setToolRounds(result.rounds ?? 0);
      void utils.ai.getConversation.invalidate({ id: selectedId ?? 0 });
      void utils.ai.conversations.invalidate();
    },
    onError: error => { setExecutionCompleted(false); toast.error(error.message); },
  });

  useEffect(() => {
    const first = conversations.data?.[0];
    if (selectedId === null && first) {
      setSelectedId(first.id);
      setModel(first.model ?? FALLBACK_MODELS[0]);
      setReasoningLevel(first.reasoningLevel);
    }
    if (selectedId === null && conversations.data && conversations.data.length === 0 && !createConversation.isPending) {
      createConversation.mutate({ model: FALLBACK_MODELS[0], reasoningLevel: "low" });
    }
  }, [conversations.data, selectedId]);

  const chatMessages = useMemo<Message[]>(() => {
    const rows = conversation.data?.messages ?? [];
    return rows
      .filter(row => row.role === "user" || row.role === "assistant")
      .map(row => ({ role: row.role as "user" | "assistant", content: row.content }));
  }, [conversation.data?.messages]);

  const availableModels = models.data?.length ? models.data.map(item => item.id) : FALLBACK_MODELS;
  const selectedConversation = conversations.data?.find(item => item.id === selectedId);
  const liveExecution = conversation.data?.conversation;
  const executionPhase = liveExecution?.executionStatus === "planning" ? 0 : liveExecution?.executionStatus === "inspecting" ? 1 : liveExecution?.executionStatus === "synthesizing" ? 2 : liveExecution?.executionStatus === "reporting" ? 3 : liveExecution?.executionStatus === "completed" ? 4 : -1;

  function handleSend(content: string) {
    if (selectedId === null) return;
    setExecutionSource("typed");
    setExecutionStartedAt(Date.now());
    setExecutionCompleted(false);
    setLastActivity([]);
    const prompt = executionStyle === "architect"
      ? `Use Architect mode for this request. First outline the goal, constraints, dependencies, and an ordered implementation plan. Then carry out the safe read-only investigation needed and clearly separate confirmed facts from recommendations.\n\nUser request:\n${content}`
      : content;
    sendMessage.mutate({ conversationId: selectedId, content: prompt, model, reasoningLevel });
  }

  function startNewConversation() {
    createConversation.mutate({ model, reasoningLevel });
  }

  return (
    <AppLayout title="AI Mode" subtitle="A persistent agent workspace for analysis, research, and Bond Studio operations.">
      <VoicePromptSubmissionBridge conversationId={selectedId} model={model} reasoningLevel={reasoningLevel} isPending={sendMessage.isPending} send={input => { setExecutionSource("voice"); setExecutionStartedAt(Date.now()); setExecutionCompleted(false); setLastActivity([]); sendMessage.mutate(input); toast.success("Voice request started as a live AI run."); }} />
      <div className="mb-4 border border-[#2c5b48]/20 bg-[#e6ede6] px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#2c5b48]">Live project execution</p><p className="mt-1 text-xs text-[#425047]">Typed and spoken requests use the same resumable run: plan, inspect, synthesize, and report.</p>{liveExecution?.executionStep && <p className="mt-1 text-[11px] text-[#2c5b48]">{liveExecution.executionStep}</p>}</div>
          <span className="font-ledger text-[10px] uppercase tracking-[0.12em] text-[#6a736b]">{liveExecution?.executionSource === "voice" || executionSource === "voice" ? "Voice run" : "Typed run"}{liveExecution?.executionProgress ? ` · ${liveExecution.executionProgress}%` : ""}</span>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-4">
          {["Plan", "Inspect", "Synthesize", "Report"].map((phase, index) => {
            const active = executionPhase === index && liveExecution?.executionStatus !== "completed";
            const complete = executionPhase > index || liveExecution?.executionStatus === "completed";
            return <div key={phase} className={`border px-3 py-2 text-xs ${active ? "border-[#2c5b48] bg-white text-[#2c5b48]" : complete ? "border-[#2c5b48]/20 bg-[#f9f5ec] text-[#2c5b48]" : "border-[#17231e]/10 bg-white/50 text-[#7d877f]"}`}><span className="font-ledger text-[9px] uppercase tracking-[0.12em]">0{index + 1}</span><p className="mt-1 font-semibold">{phase}{complete ? " ✓" : active ? " …" : ""}</p></div>;
          })}
        </div>
      </div>
      <DataEntryAutomationPanel />
      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[175px_minmax(0,1fr)_220px]">
        <aside className="flex min-h-[520px] flex-col border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex items-center justify-between border-b border-[#17231e]/10 px-4 py-3">
            <div>
              <p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Sessions</p>
              <p className="mt-1 text-xs text-[#7d877f]">Guest-isolated history</p>
            </div>
            <Button onClick={startNewConversation} disabled={createConversation.isPending} size="sm" className="h-8 rounded-none bg-[#2c5b48] text-white hover:bg-[#214837]">
              <Plus className="mr-1 h-3.5 w-3.5" /> New
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.error ? <div className="m-4 border border-[#a4423c]/25 bg-[#eadbd6] p-3 text-xs leading-5 text-[#7b302d]"><AlertCircle className="mr-1.5 inline h-3.5 w-3.5" />Unable to load sessions. Refresh and try again.</div> : conversations.isLoading ? <div className="p-5 text-xs text-[#6a736b]">Loading sessions…</div> : conversations.data?.map(item => (
              <button key={item.id} onClick={() => { setSelectedId(item.id); setModel(item.model ?? FALLBACK_MODELS[0]); setReasoningLevel(item.reasoningLevel); setLastActivity([]); }} className={`w-full border-b border-[#17231e]/8 px-4 py-3 text-left transition-colors ${selectedId === item.id ? "border-l-2 border-l-[#2c5b48] bg-[#e6ede6]" : "hover:bg-[#f0ece3]"}`}>
                <p className="truncate text-sm font-semibold text-[#19211e]">{item.title}</p>
                <p className="mt-1 font-ledger text-[9px] uppercase tracking-[0.1em] text-[#748076]">{new Date(item.updatedAt).toLocaleString()}</p>
              </button>
            ))}
          </div>
          <div className="border-t border-[#17231e]/10 p-4 text-[11px] leading-5 text-[#6a736b]">
            <span className="font-semibold text-[#2c5b48]">Guest workspace.</span> Conversation history is isolated by your Bonds Studio browser cookie. Sign in later to add a durable account workflow.
          </div>
        </aside>

        <section className="flex min-h-[520px] min-w-0 flex-col border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#17231e]/10 px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center bg-[#2c5b48] text-white"><Zap className="h-4 w-4" /></div>
              <div><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Bonds Studio Agent</p><p className="text-sm font-semibold text-[#19211e]">{selectedConversation?.title ?? "Preparing a session…"}</p></div>
            </div>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor="ai-model">Model</label>
              <select id="ai-model" value={model} onChange={e => setModel(e.target.value)} className="h-8 max-w-[180px] border border-[#17231e]/15 bg-[#fbf8f1] px-2 text-xs text-[#19211e] outline-none focus:border-[#2c5b48]">
                {availableModels.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
              <label className="sr-only" htmlFor="ai-reasoning">Reasoning</label>
              <select id="ai-reasoning" value={reasoningLevel} onChange={e => setReasoningLevel(e.target.value as typeof reasoningLevel)} className="h-8 border border-[#17231e]/15 bg-[#fbf8f1] px-2 text-xs text-[#19211e] outline-none focus:border-[#2c5b48]">
                <option value="minimal">Minimal</option><option value="low">Balanced</option><option value="medium">Deep</option><option value="high">Max</option>
              </select>
              <label className="sr-only" htmlFor="ai-execution-style">Execution style</label>
              <select id="ai-execution-style" value={executionStyle} onChange={e => setExecutionStyle(e.target.value as typeof executionStyle)} className="h-8 border border-[#17231e]/15 bg-[#fbf8f1] px-2 text-xs text-[#19211e] outline-none focus:border-[#2c5b48]">
                <option value="fast">Fast lane</option><option value="architect">Architect mode</option>
              </select>
            </div>
          </div>
          {models.error && <div className="mx-4 mt-4 border border-[#a4423c]/25 bg-[#eadbd6] px-4 py-3 text-xs leading-5 text-[#7b302d]"><AlertCircle className="mr-1.5 inline h-3.5 w-3.5" />Model discovery is unavailable. The agent will use its default model if you send a message.</div>}
          <div className="flex-1 p-4">
            {conversation.error ? <div className="flex min-h-[430px] items-center justify-center border border-[#a4423c]/25 bg-[#eadbd6] p-8 text-center text-sm leading-6 text-[#7b302d]"><div><AlertCircle className="mx-auto mb-3 h-7 w-7" /><p className="font-semibold">This conversation could not be loaded.</p><p className="mt-1 text-xs">It may have been removed or belongs to another guest workspace.</p></div></div> : <AIChatBox messages={chatMessages} onSendMessage={handleSend} isLoading={sendMessage.isPending || conversation.isLoading} height="100%" className="min-h-[430px] rounded-none border-[#17231e]/10 bg-[#fbf8f1] shadow-none" emptyStateMessage="Ask the Bonds Studio agent to inspect, explain, or plan." suggestedPrompts={SUGGESTIONS} placeholder="Ask the agent anything about your workspace…" />}
          </div>
        </section>

        <aside className="space-y-4">
          <div className="border border-[#17231e]/10 bg-[#f9f5ec] p-5">
            <div className="flex items-center gap-2"><Brain className="h-4 w-4 text-[#2c5b48]" /><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Agent capabilities</p></div>
            <div className="mt-4 space-y-3 text-xs leading-5 text-[#5b655e]">
              <p><Check className="mr-2 inline h-3.5 w-3.5 text-[#2c5b48]" />Workspace summaries</p>
              <p><Check className="mr-2 inline h-3.5 w-3.5 text-[#2c5b48]" />Domain and DNS inspection</p>
              <p><Check className="mr-2 inline h-3.5 w-3.5 text-[#2c5b48]" />Markdown explanations</p>
              <p><Check className="mr-2 inline h-3.5 w-3.5 text-[#2c5b48]" />Model and reasoning controls</p>
              <p><Check className="mr-2 inline h-3.5 w-3.5 text-[#2c5b48]" />Fast lane and architect planning</p>
            </div>
          </div>
          <div className="border border-[#17231e]/10 bg-[#f9f5ec] p-5">
            <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-[#2c5b48]" /><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Tool activity</p></div>{sendMessage.isPending && <Loader2 className="h-3.5 w-3.5 animate-spin text-[#2c5b48]" />}</div>
            {toolRounds > 0 && <p className="mt-3 text-[11px] text-[#2c5b48]">Completed {toolRounds} parallel tool round{toolRounds === 1 ? "" : "s"}.</p>}
            {lastActivity.length ? <div className="mt-4 space-y-2">{lastActivity.map((item, index) => <div key={`${item.name}-${index}`} className="flex items-center justify-between gap-2 border border-[#17231e]/8 bg-[#fbf8f1] px-3 py-2 text-xs text-[#5b655e]"><span className="truncate">{item.name}</span><span className={item.status === "completed" ? "text-[#2c5b48]" : "text-[#a4423c]"}>{item.status}</span></div>)}</div> : <p className="mt-4 text-xs leading-5 text-[#7d877f]">Read-only workspace tools appear here when the agent uses them.</p>}
          </div>
          {selectedId !== null && <Button variant="outline" onClick={() => deleteConversation.mutate({ id: selectedId })} disabled={deleteConversation.isPending} className="w-full rounded-none border-[#a4423c]/30 text-[#a4423c] hover:bg-[#eadbd6]"><Trash2 className="mr-2 h-3.5 w-3.5" />Delete session</Button>}
          <div className="border border-[#17231e]/10 bg-[#e8e1d5] p-5 text-xs leading-5 text-[#5b655e]"><Cpu className="mb-2 h-4 w-4 text-[#2c5b48]" /><strong className="text-[#19211e]">Agent boundary.</strong> This version provides server-side model calls, persistent sessions, and safe read-only Bond Studio tools. It does not reproduce proprietary Manus platform internals or unrestricted computer/browser automation.</div>
        </aside>
      </div>
    </AppLayout>
  );
}
