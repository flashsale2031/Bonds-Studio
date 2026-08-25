export type LedgerDataEntryEvent =
  | { type: "inspection"; payload: Record<string, unknown> }
  | { type: "run_started"; payload: { command: string } }
  | { type: "run_completed"; payload: Record<string, unknown> }
  | { type: "run_failed"; payload: { error: string } };

const REQUEST_SOURCE = "bonds-studio-ledger";

export function requestDataEntryAgent(command: string) {
  window.postMessage(
    { source: REQUEST_SOURCE, type: "RUN_DATA_ENTRY_AGENT", command },
    window.location.origin,
  );
}

export function subscribeToDataEntryAgent(
  listener: (event: LedgerDataEntryEvent) => void,
) {
  const handler = (event: MessageEvent) => {
    if (event.source !== window) return;
    const data = event.data;
    if (!data || data.source !== "ai-data-entry-agent") return;
    listener(data as LedgerDataEntryEvent);
  };
  window.addEventListener("message", handler);
  return () => window.removeEventListener("message", handler);
}
