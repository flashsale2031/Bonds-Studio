import { AppLayout } from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { handoffVoiceTranscript } from "@/lib/voiceAiHandoff";
import type { VoiceCommand } from "@shared/voiceCommands";
import { AlertCircle, ArrowUpRight, Check, Loader2, Mic, MicOff, Settings2, Volume2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

const COMMANDS = [
  { cmd: '"Open Ledger"', desc: "Navigate to the main ledger view" },
  { cmd: '"Show Monetize"', desc: "Open the Monetize platform manager" },
  { cmd: '"Record balance"', desc: "Open the record balance form" },
  { cmd: '"Mark reviewed"', desc: "Mark current platform as reviewed" },
  { cmd: '"Show trends"', desc: "Navigate to the Trends page" },
  { cmd: '"New note"', desc: "Create a new review note" },
];

export function VoiceRequestHandoffButton({ transcript, onNavigate, storage = window.sessionStorage }: { transcript: string; onNavigate: (path: string) => void; storage?: Pick<Storage, "setItem"> }) {
  return <Button onClick={() => { if (handoffVoiceTranscript(transcript, storage)) onNavigate("/ai-mode"); }} disabled={!transcript.trim()} className="mt-4 rounded-none bg-[#2c5b48] text-white hover:bg-[#214837]"><ArrowUpRight className="mr-2 h-3.5 w-3.5" />Send to AI Mode</Button>;
}

export function VoiceCommandAction({ command, onExecute, status = "ready" }: { command: VoiceCommand; onExecute: () => void; status?: "routing" | "ready" | "executing" | "complete" | "failed" }) {
  const description = command.kind === "unknown" ? command.reason : command.kind === "confirmation_required" ? command.reason : command.kind === "navigate" ? `Ready to open ${command.path}.` : "Ready to send this request to AI Mode.";
  const actionLabel = command.kind === "confirmation_required" ? "Review safely in AI Mode" : command.kind === "navigate" ? "Open workspace" : "Run in AI Mode";
  return <div className={`mt-4 border p-3 text-xs leading-5 ${command.kind === "confirmation_required" || status === "failed" ? "border-[#a4423c]/25 bg-[#eadbd6] text-[#7b302d]" : "border-[#2c5b48]/20 bg-[#f9f5ec] text-[#425047]"}`}><p className="font-semibold">{status === "routing" ? "Classifying command…" : status === "executing" ? "Executing command…" : status === "complete" ? "Command complete" : status === "failed" ? "Command failed" : command.label}</p><p className="mt-1">{description}</p>{command.kind !== "unknown" && <Button onClick={onExecute} disabled={status === "routing" || status === "executing" || status === "complete"} className="mt-3 rounded-none bg-[#2c5b48] text-white hover:bg-[#214837]">{status === "complete" ? "Completed" : actionLabel}</Button>}</div>;
}

function blobToBase64(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(new Error("Could not read the recording."));
    reader.readAsDataURL(blob);
  });
}

export default function VoiceControlPage(props?: any) {
  const initialTranscript = props?.initialTranscript ?? "";
  const [, setLocation] = useLocation();
  const [listening, setListening] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const [transcript, setTranscript] = useState(initialTranscript);
  const [error, setError] = useState("");
  const [command, setCommand] = useState<VoiceCommand | null>(props?.initialCommand ?? null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [commandStatus, setCommandStatus] = useState<"routing" | "ready" | "executing" | "complete" | "failed">(props?.initialCommand ? "ready" : "routing");
  const aiConversations = trpc.ai.conversations.useQuery(undefined, { refetchInterval: 1000 });
  const latestAiRun = aiConversations.data?.[0];
  const routeCommand = trpc.voice.routeCommand.useMutation({
    onMutate: () => { setCommandStatus("routing"); },
    onSuccess: result => { setCommand(result); setCommandStatus("ready"); setError(""); },
    onError: mutationError => { setCommand(null); setCommandStatus("failed"); setError(mutationError.message); },
  });
  const transcribe = trpc.voice.transcribe.useMutation({
    onSuccess: result => {
      setTranscript(result.text);
      setError("");
      routeCommand.mutate({ transcript: result.text });
      toast.success("Voice request transcribed. Review it before sending to AI Mode.");
    },
    onError: mutationError => {
      setError(mutationError.message);
      toast.error(mutationError.message);
    },
    onSettled: () => setTranscribing(false),
  });

  async function startListening() {
    setError("");
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setError("This browser does not support microphone recording. Try a current Chrome, Safari, or Firefox browser.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"].find(type => MediaRecorder.isTypeSupported(type)) ?? "";
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      chunksRef.current = [];
      recorder.ondataavailable = event => { if (event.data.size) chunksRef.current.push(event.data); };
      recorder.onstop = async () => {
        stream.getTracks().forEach(track => track.stop());
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        if (blob.size > 16 * 1024 * 1024) {
          setError("This recording is larger than the 16 MB transcription limit.");
          return;
        }
        try {
          setTranscribing(true);
          transcribe.mutate({ audioBase64: await blobToBase64(blob), mimeType: (blob.type.split(";")[0] || "audio/webm") as "audio/webm" | "audio/mp3" | "audio/mpeg" | "audio/wav" | "audio/ogg" | "audio/mp4", language: "en" });
        } catch (captureError) {
          setTranscribing(false);
          setError(captureError instanceof Error ? captureError.message : "Could not process the recording.");
        }
      };
      recorderRef.current = recorder;
      recorder.start();
      setListening(true);
      toast.success("Microphone active. Speak your request, then press stop.");
    } catch (captureError) {
      setError(captureError instanceof DOMException && captureError.name === "NotAllowedError" ? "Microphone permission was denied. Allow microphone access in your browser settings and try again." : "Could not access the microphone.");
    }
  }

  function stopListening() {
    recorderRef.current?.stop();
    recorderRef.current = null;
    setListening(false);
  }

  function toggleListening() {
    if (listening) stopListening();
    else void startListening();
  }

  function sendToAiMode(prompt = transcript) {
    if (!prompt.trim()) return;
    if (handoffVoiceTranscript(prompt, window.sessionStorage)) setLocation("/ai-mode");
  }

  function executeCommand() {
    if (!command) return;
    setCommandStatus("executing");
    if (command.kind === "navigate") { setLocation(command.path); setCommandStatus("complete"); }
    else if (command.kind === "ai_prompt") { sendToAiMode(command.prompt); setCommandStatus("complete"); }
    else if (command.kind === "confirmation_required") { sendToAiMode(`I want to perform this requested write operation: ${transcript}. Explain the exact changes and ask me for confirmation before modifying anything.`); setCommandStatus("complete"); }
  }

  return (
    <AppLayout title="Voice Control" subtitle="Capture a spoken request, review the transcript, and send it to Bonds Studio AI.">
      <div className="max-w-3xl space-y-8">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <div className={`grid h-10 w-10 place-items-center text-white transition-colors ${listening ? "bg-[#a4423c]" : "bg-[#2c5b48]"}`}><Mic className="h-5 w-5" /></div>
            <h1 className="font-display text-4xl tracking-[-0.03em] text-[#19211e]">Voice Control</h1>
          </div>
          <p className="text-sm text-[#5b655e]">Use your microphone to submit natural-language requests to the persistent AI Mode agent.</p>
        </div>

        <div className="flex flex-col items-center gap-5 border border-[#17231e]/10 bg-[#f9f5ec] p-8">
          <button aria-label={listening ? "Stop recording" : "Start recording"} onClick={toggleListening} disabled={transcribing} className={`relative grid h-24 w-24 place-items-center transition-all duration-300 ${listening ? "bg-[#a4423c] shadow-[0_0_0_8px_rgba(164,66,60,0.15)]" : "bg-[#2c5b48] hover:bg-[#214837]"} disabled:cursor-not-allowed disabled:opacity-60`}>
            {transcribing ? <Loader2 className="h-10 w-10 animate-spin text-white" /> : listening ? <MicOff className="h-10 w-10 text-white" /> : <Mic className="h-10 w-10 text-white" />}
            {listening && <span className="absolute inset-0 animate-ping bg-[#a4423c]/30" />}
          </button>
          <p className="font-ledger text-[10px] uppercase tracking-[0.18em] text-[#6a736b]">{transcribing ? "Transcribing your request…" : listening ? "Recording… press stop when finished" : "Click to record a request"}</p>
          {error && <div role="alert" className="max-w-xl border border-[#a4423c]/25 bg-[#eadbd6] px-4 py-3 text-xs leading-5 text-[#7b302d]"><AlertCircle className="mr-1.5 inline h-3.5 w-3.5" />{error}</div>}
          {transcript && <div className="w-full max-w-xl border-l-2 border-[#2c5b48] bg-[#e6ede6] px-4 py-3 text-sm leading-6 text-[#19211e]"><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Transcript ready for review</p><p className="mt-1">{transcript}</p>{routeCommand.isPending && !command && <div role="status" className="mt-4 border border-[#2c5b48]/20 bg-[#f9f5ec] p-3 text-xs text-[#425047]">Classifying command…</div>}{commandStatus === "failed" && <div role="alert" className="mt-4 border border-[#a4423c]/25 bg-[#eadbd6] p-3 text-xs text-[#7b302d]">Command classification failed. You can still send the transcript to AI Mode.</div>}{command && <VoiceCommandAction command={command} onExecute={executeCommand} status={commandStatus} />}<VoiceRequestHandoffButton transcript={transcript} onNavigate={setLocation} /></div>}
          {latestAiRun && latestAiRun.executionStatus !== "idle" && <div className="w-full max-w-xl border border-[#2c5b48]/20 bg-[#f9f5ec] px-4 py-4" role="status"><div className="flex items-center justify-between gap-3"><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#2c5b48]">Live AI run</p><span className="text-[11px] uppercase tracking-[0.1em] text-[#6a736b]">{latestAiRun.executionSource} · {latestAiRun.executionProgress}%</span></div><p className="mt-2 text-sm font-semibold text-[#19211e]">{latestAiRun.executionStep}</p><div className="mt-3 h-2 bg-[#e6ede6]"><div className="h-2 bg-[#2c5b48] transition-all" style={{ width: `${latestAiRun.executionProgress}%` }} /></div><p className="mt-2 text-xs text-[#5b655e]">{latestAiRun.executionStatus === "completed" ? "Run complete. Open AI Mode to continue or review the report." : latestAiRun.executionStatus === "failed" ? latestAiRun.executionError ?? "The run failed. Open AI Mode to retry." : "The agent is working. You can keep this page open while it progresses."}</p><Button onClick={() => setLocation("/ai-mode")} className="mt-3 rounded-none bg-[#2c5b48] text-white hover:bg-[#214837]">Open live run</Button></div>}
        </div>

        <div className="border border-[#17231e]/10 bg-[#f9f5ec]">
          <div className="flex items-center gap-2 border-b border-[#17231e]/10 px-5 py-3"><Volume2 className="h-4 w-4 text-[#2c5b48]" /><p className="font-ledger text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a736b]">Voice requests can ask the agent to</p></div>
          <div className="divide-y divide-[#17231e]/8">{COMMANDS.map(({ cmd, desc }) => <div key={cmd} className="flex items-center justify-between px-5 py-3"><p className="font-ledger text-sm font-medium text-[#2c5b48]">{cmd}</p><p className="text-xs text-[#6a736b]">{desc}</p></div>)}<div className="flex items-center justify-between px-5 py-3"><p className="font-ledger text-sm font-medium text-[#2c5b48]">"Summarize my workspace"</p><p className="text-xs text-[#6a736b]">Ask AI Mode to inspect and explain workspace data</p></div></div>
        </div>

        <div className="flex items-center gap-3 border border-[#17231e]/10 bg-[#f9f5ec] p-5"><Settings2 className="h-5 w-5 shrink-0 text-[#2c5b48]" /><div><p className="text-sm font-semibold text-[#19211e]">Microphone permissions required</p><p className="mt-0.5 text-xs text-[#5b655e]">Audio is uploaded for transcription, then the transcript is handed to your guest-isolated AI Mode workspace. Recordings are not displayed as public content.</p></div></div>
      </div>
    </AppLayout>
  );
}
