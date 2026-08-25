# Ledger AI Data Entry Automation Integration

The Ledger AI Mode now includes the AI Data Entry Agent v3.0 integration.

## Architecture

- `integrations/ai-data-entry-agent/` contains the complete Manifest V3 browser agent.
- `components/DataEntryAutomationPanel.tsx` provides the Ledger AI Mode control surface.
- `lib/dataEntryAgentBridge.ts` defines the browser-extension bridge.
- `integrations/ai-data-entry-agent/src/content/agent-content.js` listens for Ledger requests and forwards them to the extension service worker.
- The extension remains responsible for page inspection, workflow classification, planning, research, visual fallback, queueing, verified interaction, and safety stops.

## Capabilities integrated

Page and website:
- page/current-state awareness
- navigation and wrong-page detection
- broken/error page and link detection
- selector identification and control metadata
- obstruction, popup, advertisement and validation detection

Survey/workflow:
- survey description, consent and qualification pages
- full/closed/disqualified/timed-out states
- secondary/follow-up surveys
- completion and incentive-page awareness

Interaction/media:
- sliders, radio/multiple-choice controls and rating buttons
- verified click/fill/select/check operations
- ordinary UI button holding with completion verification
- normal drag/drop picture assignments
- picture/image interpretation through visual fallback
- video/audio assignment playback and interpretation
- organized browser research

Timing and safety:
- content-complexity reading/stability waits
- state reinspection after meaningful changes
- queue retries and checkpoints
- bot/CAPTCHA/human-verification/anti-automation detection as hard stops
- no bypass or evasion of security controls

## Using the integration

1. Load `integrations/ai-data-entry-agent/` as an unpacked Chrome/Chromium extension.
2. Configure the extension's AI settings/API key in its options page.
3. Open Ledger Studio and navigate to **AI Mode**.
4. Use **Ledger Browser Data Entry** to inspect the active page or submit a browser task.
5. The extension returns inspection/run state to the Ledger UI through a same-origin `postMessage` bridge.

The bridge never sends the extension's API key to the Ledger page.

## Safety boundary

The integrated assistant may detect bot protection, CAPTCHA, human verification, consent boundaries, disqualification, closed/full surveys, and other terminal states. It stops instead of bypassing security, impersonating a human, or defeating anti-automation controls.
