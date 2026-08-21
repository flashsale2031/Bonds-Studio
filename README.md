# Bonds Studio

Bonds Studio is an interactive Earth-and-orbit creative systems experience. The page now includes **Bonds Agent**, a browser-safe task orchestrator for multi-step investigations and issue resolution.

## Bonds Agent

The assistant follows an **understand → plan → execute → verify → checkpoint** loop. It can inspect the current page, run health diagnostics, control the orbital simulation, open a mapped location, and persist the latest workflow state in `localStorage`. The panel is available through the **Open Bonds Agent** launcher in the lower-right corner of the page.

The built-in tools are intentionally safe for a static site: they inspect page state and interact with existing UI controls rather than executing arbitrary code. Tool results are shown as evidence in the assistant feed, while the checklist communicates progress for larger tasks.

| Capability | Example request | Result |
|---|---|---|
| Workspace inspection | “Inspect the workspace” | Reports module, WebGL, map, and offline capabilities. |
| Issue resolution | “Diagnose the workspace and report any issues” | Runs health checks and identifies failed subsystems. |
| Orbital control | “Focus the orbital view on Mars” | Updates the existing orbital focus control. |
| Map exploration | “Open London on the map” | Selects the matching location in the location explorer. |
| Checkpointing | Any completed workflow | Saves the command, evidence, and timestamp locally. |

## Connecting a larger model

The frontend supports an optional server-side agent endpoint. Before loading the page, configure `window.BONDS_ASSISTANT_ENDPOINT` to a same-origin or appropriately CORS-enabled `POST` endpoint. The endpoint receives a JSON payload containing the user command and the current checkpoint state. If the endpoint is unavailable, the assistant continues using its local tools and clearly reports that it fell back to local execution.

A production endpoint should validate input, enforce authentication and rate limits, keep tool permissions allow-listed, stream progress where appropriate, and require confirmation before any irreversible external action. The current static implementation deliberately does not perform posting, payment, account changes, arbitrary shell execution, or unrestricted network actions.

## Local verification

Run the following checks from the repository root:

```bash
node --check assistant.js
git diff --check
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/` and try the built-in shortcuts **Diagnose workspace**, **Focus Mars**, and **Open London**.
