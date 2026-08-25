// @vitest-environment jsdom
import { readFileSync } from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createElement } from "react";

const voiceUiMocks = vi.hoisted(() => ({ navigate: vi.fn() }));
const aiRunMock = vi.hoisted(() => ({ data: [] as Array<Record<string, unknown>> }));
vi.mock("@/components/AppLayout", () => ({ AppLayout: ({ children }: { children: unknown }) => createElement("div", null, children) }));
vi.mock("@/lib/trpc", () => ({ trpc: { voice: { transcribe: { useMutation: () => ({ mutate: vi.fn(), isPending: false }) }, routeCommand: { useMutation: () => ({ mutate: vi.fn(), isPending: false }) } }, ai: { conversations: { useQuery: () => ({ data: aiRunMock.data, isLoading: false, error: null }) } } } }));
vi.mock("wouter", () => ({ useLocation: () => ["/voice-control", voiceUiMocks.navigate] }));

vi.mock("./storage", () => ({
  storagePut: vi.fn(async () => ({ key: "voice/test.webm", url: "/manus-storage/voice/test.webm" })),
}));
vi.mock("./_core/voiceTranscription", () => ({
  transcribeAudio: vi.fn(async () => ({ task: "transcribe", language: "en", duration: 1, text: "Summarize my workspace", segments: [] })),
}));

import { appRouter } from "./routers";
import { consumeVoicePrompt, handoffVoiceTranscript, submitVoicePrompt, VOICE_AI_HANDOFF_KEY as AI_PAGE_HANDOFF_KEY } from "../client/src/lib/voiceAiHandoff";
import { parseVoiceCommand } from "../shared/voiceCommands";
import VoiceControlPage, { VoiceCommandAction, VoiceRequestHandoffButton } from "../client/src/pages/VoiceControlPage";
import { VoicePromptSubmissionBridge } from "../client/src/components/VoicePromptSubmissionBridge";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
afterEach(() => cleanup());
const VOICE_PAGE_HANDOFF_KEY = AI_PAGE_HANDOFF_KEY;
import type { TrpcContext } from "./_core/context";

describe("Voice Control to AI Mode", () => {
  it("shows explicit command action status labels", () => {
    const onExecute = vi.fn();
    const command = { kind: "navigate", path: "/domains", label: "Open Developer / Domains workspace", confirmationRequired: false } as const;
    render(createElement(VoiceCommandAction, { command, onExecute, status: "executing" }));
    expect(screen.getByText("Executing command…")).toBeTruthy();
  });

  it("routes AI, developer, navigation, and confirmation commands safely", async () => {
    expect(parseVoiceCommand("open developer mode")).toMatchObject({ kind: "navigate", path: "/domains" });
    expect(parseVoiceCommand("summarize my workspace")).toMatchObject({ kind: "ai_prompt", prompt: "summarize my workspace" });
    expect(parseVoiceCommand("register example.bonds")).toMatchObject({ kind: "confirmation_required", confirmationRequired: true });
    expect(parseVoiceCommand("nonsense command").kind).toBe("unknown");
    const caller = appRouter.createCaller({ user: null, guestKey: `voice-route-${Date.now()}`, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    await expect(caller.voice.routeCommand({ transcript: "open dns lookup" })).resolves.toMatchObject({ kind: "navigate", path: "/domains/lookup" });
  });

  it("transcribes a guest recording through the server procedure", async () => {
    const caller = appRouter.createCaller({ user: null, guestKey: `voice-${Date.now()}`, req: { protocol: "https", get: () => "example.test" } as unknown as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const result = await caller.voice.transcribe({ audioBase64: Buffer.from("audio").toString("base64"), mimeType: "audio/webm", language: "en" });
    expect(result.text).toBe("Summarize my workspace");
    expect(result.language).toBe("en");
  });

  it("rejects recordings larger than the transcription limit", async () => {
    const caller = appRouter.createCaller({ user: null, guestKey: `voice-large-${Date.now()}`, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] });
    const oversized = Buffer.alloc(16 * 1024 * 1024 + 1).toString("base64");
    await expect(caller.voice.transcribe({ audioBase64: oversized, mimeType: "audio/webm" })).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });

  it("renders server-backed live AI run progress in Voice Control", () => {
    aiRunMock.data = [{ executionStatus: "inspecting", executionStep: "Inspecting workspace context", executionProgress: 45, executionSource: "voice", executionError: null }];
    render(createElement(VoiceControlPage));
    expect(screen.getByText("Live AI run")).toBeTruthy();
    expect(screen.getByText("Inspecting workspace context")).toBeTruthy();
    expect(screen.getByText("voice · 45%")).toBeTruthy();
    aiRunMock.data = [];
  });

  it("renders the Voice Control route review state and navigates to AI Mode", () => {
    voiceUiMocks.navigate.mockClear();
    render(createElement(VoiceControlPage, { initialTranscript: "Summarize my workspace" }));
    fireEvent.click(screen.getByRole("button", { name: "Send to AI Mode" }));
    expect(voiceUiMocks.navigate).toHaveBeenCalledWith("/ai-mode");
  });

  it("executes a classified developer navigation command from the Voice Control page", () => {
    voiceUiMocks.navigate.mockClear();
    render(createElement(VoiceControlPage, { initialTranscript: "open developer mode", initialCommand: { kind: "navigate", path: "/domains", label: "Open Developer / Domains workspace", confirmationRequired: false } }));
    fireEvent.click(screen.getByRole("button", { name: "Open workspace" }));
    expect(voiceUiMocks.navigate).toHaveBeenCalledWith("/domains");
    expect(screen.getByText("Command complete")).toBeTruthy();
  });

  it("executes a classified AI command and stores the expected prompt for AI Mode", () => {
    voiceUiMocks.navigate.mockClear();
    window.sessionStorage.clear();
    render(createElement(VoiceControlPage, { initialTranscript: "summarize my workspace", initialCommand: { kind: "ai_prompt", prompt: "summarize my workspace", label: "Send request to AI Mode", confirmationRequired: false } }));
    fireEvent.click(screen.getByRole("button", { name: "Run in AI Mode" }));
    expect(voiceUiMocks.navigate).toHaveBeenCalledWith("/ai-mode");
    expect(window.sessionStorage.getItem("bonds-ai-voice-prompt")).toBe("summarize my workspace");
  });

  it("clicks the reviewed transcript CTA and navigates to AI Mode", () => {
    const storage = new Map<string, string>();
    const paths: string[] = [];
    render(createElement(VoiceRequestHandoffButton, { transcript: "Summarize my workspace", onNavigate: (path: string) => paths.push(path), storage: { setItem: (key: string, value: string) => storage.set(key, value) } }));
    fireEvent.click(screen.getByRole("button", { name: "Send to AI Mode" }));
    expect(paths).toEqual(["/ai-mode"]);
    expect(storage.get(VOICE_PAGE_HANDOFF_KEY)).toBe("Summarize my workspace");
  });

  it("mounts the AI Mode voice bridge and invokes the active conversation send mutation", async () => {
    const storage = new Map([[AI_PAGE_HANDOFF_KEY, "Summarize my workspace"]]);
    const sent: unknown[] = [];
    render(createElement(VoicePromptSubmissionBridge, { conversationId: 42, model: "gpt-5-mini", reasoningLevel: "low", isPending: false, storage: { getItem: key => storage.get(key) ?? null, removeItem: key => storage.delete(key) }, send: input => sent.push(input) }));
    await waitFor(() => expect(sent).toEqual([{ conversationId: 42, content: "Summarize my workspace", model: "gpt-5-mini", reasoningLevel: "low", source: "voice" }]));
    expect(storage.has(AI_PAGE_HANDOFF_KEY)).toBe(false);
  });

  it("hands a reviewed transcript to AI Mode and consumes it once for the active send flow", () => {
    const storage = new Map<string, string>();
    const testStorage = { setItem: (key: string, value: string) => storage.set(key, value), getItem: (key: string) => storage.get(key) ?? null, removeItem: (key: string) => storage.delete(key) };
    expect(VOICE_PAGE_HANDOFF_KEY).toBe(AI_PAGE_HANDOFF_KEY);
    expect(handoffVoiceTranscript("  Summarize my workspace  ", testStorage)).toBe(true);
    expect(storage.get(VOICE_PAGE_HANDOFF_KEY)).toBe("Summarize my workspace");
    expect(consumeVoicePrompt(testStorage)).toBe("Summarize my workspace");
    expect(storage.has(VOICE_PAGE_HANDOFF_KEY)).toBe(false);
    expect(consumeVoicePrompt(testStorage)).toBe("");
    const sent: unknown[] = [];
    expect(submitVoicePrompt("  Summarize my workspace  ", 42, "gpt-5-mini", "low", input => sent.push(input))).toBe(true);
    expect(sent).toEqual([{ conversationId: 42, content: "Summarize my workspace", model: "gpt-5-mini", reasoningLevel: "low", source: "voice" }]);

    const voicePage = readFileSync(path.resolve(process.cwd(), "client/src/pages/VoiceControlPage.tsx"), "utf8");
    expect(voicePage).toContain("trpc.voice.transcribe.useMutation");
    expect(voicePage).toContain("handoffVoiceTranscript");
    expect(voicePage).toContain("Send to AI Mode");
    expect(voicePage).toContain("trpc.ai.conversations.useQuery");
    expect(voicePage).toContain("Live AI run");
    expect(voicePage).toContain("executionProgress");
    const aiPage = readFileSync(path.resolve(process.cwd(), "client/src/pages/AiModePage.tsx"), "utf8");
    expect(aiPage).toContain("VoicePromptSubmissionBridge");
    expect(aiPage).toContain("Voice request started as a live AI run.");
  });
});
