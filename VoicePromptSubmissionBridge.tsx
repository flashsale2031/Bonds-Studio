import { consumeVoicePrompt, submitVoicePrompt } from "@/lib/voiceAiHandoff";
import { useEffect } from "react";

export function VoicePromptSubmissionBridge({ conversationId, model, reasoningLevel, isPending, send, storage = window.sessionStorage }: { conversationId: number | null; model: string; reasoningLevel: "minimal" | "low" | "medium" | "high"; isPending: boolean; send: (input: { conversationId: number; content: string; model: string; reasoningLevel: "minimal" | "low" | "medium" | "high"; source: "voice" }) => void; storage?: Pick<Storage, "getItem" | "removeItem"> }) {
  useEffect(() => {
    if (conversationId === null || isPending) return;
    const prompt = consumeVoicePrompt(storage);
    if (prompt) submitVoicePrompt(prompt, conversationId, model, reasoningLevel, send);
  }, [conversationId]);
  return null;
}
