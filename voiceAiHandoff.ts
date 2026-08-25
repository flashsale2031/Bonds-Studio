export const VOICE_AI_HANDOFF_KEY = "bonds-ai-voice-prompt";

export function handoffVoiceTranscript(transcript: string, storage: Pick<Storage, "setItem">) {
  const prompt = transcript.trim();
  if (!prompt) return false;
  storage.setItem(VOICE_AI_HANDOFF_KEY, prompt);
  return true;
}

export function consumeVoicePrompt(storage: Pick<Storage, "getItem" | "removeItem">) {
  const prompt = storage.getItem(VOICE_AI_HANDOFF_KEY)?.trim() ?? "";
  if (prompt) storage.removeItem(VOICE_AI_HANDOFF_KEY);
  return prompt;
}

export function submitVoicePrompt(prompt: string, conversationId: number | null, model: string, reasoningLevel: "minimal" | "low" | "medium" | "high", send: (input: { conversationId: number; content: string; model: string; reasoningLevel: "minimal" | "low" | "medium" | "high"; source: "voice" }) => void) {
  const content = prompt.trim();
  if (!content || conversationId === null) return false;
  send({ conversationId, content, model, reasoningLevel, source: "voice" });
  return true;
}
