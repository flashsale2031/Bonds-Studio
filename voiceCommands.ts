export type VoiceCommand =
  | { kind: "navigate"; path: string; label: string; confirmationRequired: false }
  | { kind: "ai_prompt"; prompt: string; label: string; confirmationRequired: false }
  | { kind: "confirmation_required"; label: string; reason: string; confirmationRequired: true }
  | { kind: "unknown"; label: string; reason: string; confirmationRequired: false };

const NAVIGATION_COMMANDS: Array<{ matches: string[]; path: string; label: string }> = [
  { matches: ["open ledger", "show ledger", "go to ledger"], path: "/ledger", label: "Open Ledger" },
  { matches: ["open accounts", "show accounts"], path: "/accounts", label: "Open Accounts" },
  { matches: ["open trends", "show trends"], path: "/trends", label: "Open Trends" },
  { matches: ["open notes", "show notes", "new note"], path: "/notes", label: "Open Notes" },
  { matches: ["open monetize", "show monetize"], path: "/monetize", label: "Open Monetize" },
  { matches: ["open settings", "show settings"], path: "/settings", label: "Open Settings" },
  { matches: ["open domains", "show domains", "developer mode", "open developer mode", "open developer tools"], path: "/domains", label: "Open Developer / Domains workspace" },
  { matches: ["open zones", "show zones", "manage zones"], path: "/domains/zones", label: "Open DNS Zones" },
  { matches: ["open records", "show records", "manage records"], path: "/domains/records", label: "Open DNS Records" },
  { matches: ["open dns settings", "show dns settings"], path: "/domains/settings", label: "Open DNS Settings" },
  { matches: ["dns lookup", "look up dns", "open dns lookup"], path: "/domains/lookup", label: "Open DNS Lookup" },
  { matches: ["open ai mode", "show ai mode", "go to ai mode"], path: "/ai-mode", label: "Open AI Mode" },
  { matches: ["open voice control", "show voice control"], path: "/voice-control", label: "Open Voice Control" },
];

export function parseVoiceCommand(transcript: string): VoiceCommand {
  const normalized = transcript.trim().toLowerCase().replace(/[?!.,]+$/g, "");
  if (!normalized) return { kind: "unknown", label: "No command", reason: "Record a spoken request first.", confirmationRequired: false };
  const matchedNavigation = NAVIGATION_COMMANDS.find(command => command.matches.some(match => normalized === match || normalized.includes(match)));
  if (matchedNavigation) return { kind: "navigate", path: matchedNavigation.path, label: matchedNavigation.label, confirmationRequired: false };
  if (normalized.includes("register") || normalized.includes("delete") || normalized.includes("remove") || normalized.includes("create record") || normalized.includes("update record") || normalized.includes("change dns")) {
    return { kind: "confirmation_required", label: "Potential write operation", reason: "Voice Control will not perform domain or DNS writes without an explicit confirmation step.", confirmationRequired: true };
  }
  if (normalized.includes("overview") || normalized.includes("summarize") || normalized.includes("inspect") || normalized.includes("explain") || normalized.includes("ask ai") || normalized.includes("agent")) {
    return { kind: "ai_prompt", prompt: transcript.trim(), label: "Send request to AI Mode", confirmationRequired: false };
  }
  return { kind: "unknown", label: "Unrecognized command", reason: "You can open a workspace, ask AI Mode a question, or request a DNS inspection.", confirmationRequired: false };
}
