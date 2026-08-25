# Bonds Studio Unified Ledger Platform UX v3

## First-page placement
The Ledger Projects section is intentionally the final content section on the Home/Master Center page. It lists every ledger project currently configured in the application and exposes the platform operation controls in place.

## Platform operation
Each ledger project includes:
- Connect An Account / Connected state
- Dedicated platform URL
- Dedicated popup browser launch
- Browser/profile selector using the existing Bonds Studio BrowserSelector
- Retained session metadata in localStorage
- Close-to-minimize state
- Reopen Browser / Open Session
- Specialized task-flow selector
- Start Entry / Stop Entry
- Visible AI task-step progress
- Existing ledger balance/account controls

## Browser security boundary
The application launches a real popup window instead of embedding third-party pages in an iframe. Cross-origin security prevents the Bonds Studio web page from inspecting arbitrary third-party DOM/login state. Therefore the UI includes an explicit signed-in confirmation action before changing a project to Connected. A production desktop/extension automation bridge can replace that confirmation with provider-specific session detection without changing the page-level workflow.

## AI entry boundary
The page-level runner visualizes and controls the task orchestration state. Actual manipulation of a third-party platform requires a permitted automation bridge (desktop app, browser extension, or provider-specific API). The web UI does not claim to control arbitrary cross-origin pages directly.
