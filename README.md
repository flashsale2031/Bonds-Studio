# AI Data Entry Agent — Full Browser JavaScript Edition

This edition is a Manifest V3 browser extension rather than a Node.js server application.

## Why browser-first?

The browser extension can inspect the exact live DOM, accessibility attributes, frames, controls, validation state, and rendered page that the inspector is working with. It also avoids maintaining a separate browser session on a server.

Advantages include:

- no Playwright server process
- no remote browser session
- direct access to the live page DOM
- local assignment state
- immediate page reinspection after every action
- side-panel UI
- browser-native permissions
- easier deployment to an individual workstation
- optional local-only storage
- support for user-triggered actions from the active tab

## Important API-key note

A browser extension cannot keep a client-side API key secret. If you put an OpenAI key into the extension, a sufficiently capable user or malicious extension/page environment can potentially extract it.

This project therefore treats the API key as a user-supplied local credential. For commercial/shared deployment, use a small authenticated server-side broker or an enterprise credential mechanism.

## Install

1. Open Chrome/Chromium.
2. Visit `chrome://extensions`.
3. Enable Developer mode.
4. Choose "Load unpacked".
5. Select this project directory.
6. Open the extension options and enter your API key.
7. Open the extension side panel on an authorized data-entry page.

## Workflow

1. Inspect page.
2. Simplify content.
3. Identify objective.
4. Identify fields and navigation.
5. Research when necessary.
6. Fill and verify.
7. Reinspect after navigation.
8. Recover from ordinary page errors.
9. Require explicit approval before final submission.

## Security boundaries

The agent does not bypass CAPTCHA, authentication, access controls, paywalls, or other security controls. Unknown destructive actions are not automatically executed.

## Files

- `src/content/agent-content.js` — page inspection and browser actions
- `src/background.js` — extension orchestration and AI calls
- `src/ai/planner.js` — structured planning
- `src/ai/researcher.js` — research
- `src/core/resilience.js` — resilient page analysis
- `src/core/state.js` — assignment state
- `ui/sidepanel.*` — operator interface
- `ui/options.*` — local settings


## Visual fallback

When DOM analysis appears incomplete — for example, very little readable text,
few controls, or significant script-error signals — the extension captures the
visible tab and sends the screenshot to a vision-capable model. The returned
visual analysis is fed into the planner alongside the DOM model.

The fallback is additive: it does not replace DOM inspection when DOM data is
healthy.

## Persistent assignment queue

Assignments can be added to a queue from the side panel with:
- URL
- command
- status
- attempt count
- last error
- completion result

Queue state is persisted with `chrome.storage.local`, so it survives extension
service-worker restarts and browser restarts. The runner processes queued
assignments sequentially and retries ordinary failures up to three attempts.

## Privacy

Screenshots are only captured when the fallback heuristic says the DOM model
may be incomplete. They are sent to the configured AI provider for analysis.
Do not use this feature on pages containing information you are not authorized
to transmit to that provider.


## Upgrade notes — v3.0 workflow awareness

This build adds a broader page/workflow state model and richer interaction inspection:

- page identity, navigation and workflow-state awareness
- wrong-page, broken-page, error-page, broken-navigation and obstruction detection
- popup/ad/modal/cookie obstruction awareness
- survey-full, disqualified, timed-out, closed and secondary-survey recognition
- consent, survey-description and qualification-page recognition
- bot/CAPTCHA/human-verification detection with an explicit safety stop
- visual fallback for picture-heavy and obstructed pages
- selector confidence/identification analysis
- native range/sliding-scale interaction with value verification
- radio/multiple-choice and button-rating inspection
- hold-until-release interaction for ordinary controls that explicitly require it
- ordinary drag-and-drop assignment support with source/target verification
- image/media inventory and video/audio assignment support
- content-complexity reading/stability waits rather than random human impersonation
- structured research results with headings and links
- repeated inspection after actions/navigation and stronger validation
- explicit final-submit approval boundary

### Safety boundary

The agent is intentionally **detection-aware, not detection-evasive**. It can recognize CAPTCHA, bot checks, anti-automation gates and human-verification pages, but it will not bypass, defeat, conceal, or optimize around them. Timing and interaction logic are for page stability and normal UI requirements, not for impersonating a human to evade detection.

For picture, audio, video, qualification, consent, and survey workflows, the planner uses available page/visual evidence and stops when the evidence is ambiguous or the workflow is terminal.
