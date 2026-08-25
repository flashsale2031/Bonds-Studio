# Project TODO

- [x] Inspect the initialized scaffold and preserve the provided DNSSystem archive concepts
- [x] Add domain registry data model with registration, search, status tracking, TLD support, and ownership
- [x] Add DNS zone model with SOA configuration and per-domain settings
- [x] Add DNS record model supporting A, AAAA, CNAME, MX, NS, TXT, PTR, SRV, CAA, TLSA, CERT, SMIMEA, SSHFP, and DNSKEY
- [x] Add authoritative nameserver, recursive resolver, TTL default, and DNSSEC settings management
- [x] Add dashboard overview statistics and recently modified entries
- [x] Add BIND9-compatible named.conf / db.domain zone-file export and download flow
- [x] Add stored-record DNS lookup/query tool by name and record type
- [x] Enforce owner/admin access to all domains and records while limiting regular users to their own domains
- [x] Build dark DashboardLayout shell with exactly five sidebar sections in order: Domains, Zones, Records, Settings, DNS Lookup
- [x] Apply blueprint-inspired visual language with grid surfaces, geometric diagrams, formulas, cyan/pink wireframe accents, and technical typography
- [x] Add loading, empty, error, and success states for management workflows
- [x] Generate and apply database migrations
- [x] Write Vitest coverage for validation, permissions, lookup behavior, and BIND9 export formatting
- [x] Run type checks, tests, and browser visual verification

- [x] Implement real TLD validation against active tlds data and expose TLD selection in registration UI
- [x] Add full type-specific DNS record fields and server-side validation for CAA, TLSA, CERT, SMIMEA, SSHFP, and DNSKEY
- [x] Fix zone export serialization for every supported type and include all authoritative nameservers
- [x] Add explicit query error states across dashboard sections
- [x] Regenerate a clean migration history that succeeds from scratch and document/apply it through the standard workflow
- [x] Add Vitest coverage for DNS lookup behavior and domain/record input validation

- [x] Register www.bondstech.com as an active domain and initialize its DNS zone and settings

- [x] Register bondsstudio.com as an active domain and initialize its DNS zone and settings

- [x] Rename the DNS registry application to Bonds Host across configuration and visible dashboard branding

- [x] Add hero registration shortcut with domain input, Enter-to-submit behavior, active status confirmation, and configuration handoff

- [x] Assess and plan public authoritative DNS serving, domain delegation, website connection, and forwarding capabilities

- [x] Add private .bonds namespace support with no-registrar registration, resolver boundary messaging, and configuration guidance

- [x] Add a public under-construction landing page for every registered domain with the provided Bonds Mall logo and exact Bonds Estates message

- [x] Make public landing routing verify the hostname exists in the registry before serving the Bonds Estates page
- [x] Return a not-found response for unknown public hostnames and test registered versus unregistered host behavior

- [x] Integrate the Bonds Host workspace into Bond Studio under a new header menu option named Domains

- [x] Make the uploaded Bond Studio archive the active application
- [x] Add a header-menu Domains option that opens the full Bonds Host domain-management workspace
- [x] Preserve Bond Studio pages, styles, routes, and header interactions while integrating Domains

- [x] Namespace Domains workspace routes under /domains without colliding with Bond Studio routes
- [x] Verify Bond Studio navigation and integrated Domains navigation across all primary pages
- [x] Add route-level test coverage for the Domains menu entry and namespaced workspace sections

- [x] Verify Bond Studio /ai-mode and /voice-control pages after integration
- [x] Verify /domains, /domains/zones, /domains/records, /domains/settings, and /domains/lookup render without collisions
- [x] Verify the header Domains menu entry and each Domains subsection navigation path in the browser

- [x] Verify the Bond Studio header menu exposes Domains and that the Domains item reaches /domains through the UI
- [x] Verify Domains subsection controls preserve /domains/zones, /domains/records, /domains/settings, and /domains/lookup navigation

- [x] Remove login gating from all Bond Studio pages and make the Domains workspace guest-accessible
- [x] Define guest ownership behavior for domain registry writes and preserve clear access/security messaging
- [x] Verify guest access across all Bond Studio routes and Domains workflows

- [x] Verify guest domain mutations end to end with a valid anonymous ownership strategy
- [x] Replace the implicit shared guest owner behavior with an explicit isolated anonymous workspace model
- [x] Add clear UI messaging for guest persistence, ownership, and security implications
- [x] Verify guest access on /trends, /notes, /monetize, /domains/records, and /domains/settings
- [x] Verify guest Domains subsection navigation through workspace controls

- [x] Verify guest registration, update, DNS record CRUD, and deletion behavior with guestKey isolation
- [x] Add a visible Domains guest-access notice covering cookie persistence, ownership, claiming, and security limitations
- [x] Add focused tests for guest mutation authorization and guestKey-scoped record access

- [x] Add explicit guest notice guidance for claiming or migrating a guest workspace to authenticated ownership
- [x] Add router-level cross-guest tests proving guestKey B cannot read, update, or delete guestKey A domains and records
- [x] Verify cross-guest denial for status, zone/settings, record CRUD, and domain deletion operations

- [x] Add cross-guest denial tests for zone update and DNS settings update mutations

- [x] Replace simulated AI Mode replies with server-side built-in LLM conversations
- [x] Add guest-isolated AI conversation persistence and conversation management
- [x] Add model discovery and model/reasoning controls with safe defaults
- [x] Add controlled AI tools for Bonds Studio data lookup and DNS workspace context
- [x] Add AI Mode workspace UI with message history, tool activity, model controls, and empty/loading/error states
- [x] Add Vitest coverage for AI authorization, persistence, model selection, and tool execution
- [x] Verify AI Mode visually, run tests/type-check/build, and save a checkpoint

- [x] Add explicit AI Mode query error panels for model, session list, and selected conversation failures
- [x] Add Vitest coverage for AI model discovery and a mocked tool-assisted send flow with persisted messages
- [x] Save a new checkpoint after the AI Mode implementation and final verification

- [x] Connect Voice Control microphone capture to AI Mode conversation submission
- [x] Add transcription review, submit, recording, and error states for voice requests
- [x] Add Vitest coverage for voice-to-AI routing and submission behavior
- [x] Verify voice-to-AI flow, run tests/type-check/build, and save a checkpoint

- [x] Add a UI-level test for Voice Control transcript handoff and `/ai-mode` navigation
- [x] Add a test proving AI Mode consumes the voice handoff and calls the active conversation send flow
- [x] Re-run the full voice-to-AI test suite after adding routing/submission coverage

- [x] Add a route-level Voice Control test that exercises the reviewed transcript CTA and verifies `/ai-mode` navigation
- [x] Add an AI Mode submission test that exercises the stored voice prompt and asserts the active conversation send mutation payload
- [x] Re-run full tests, type-check, build, and save the final voice-to-AI checkpoint

- [x] Add a page-level Voice Control test that renders the review state and verifies navigation to `/ai-mode`
- [x] Add a mounted AI Mode voice bridge test that consumes sessionStorage and invokes the active conversation send mutation
- [x] Save a new checkpoint after the final voice-to-AI implementation and verification

- [x] Define a safe voice command grammar for AI Mode and developer-mode operations
- [x] Add server-side voice command routing with guest-aware read-only actions and confirmation-gated writes
- [x] Connect voice commands to AI Mode prompts and supported developer workspace navigation/actions
- [x] Add command review, confirmation, execution status, and failure feedback in Voice Control
- [x] Add Vitest coverage for command parsing, guest isolation, confirmations, and AI/developer dispatch
- [x] Verify voice-operated AI/developer flows, run tests/type-check/build, and save a checkpoint

- [x] Add visible command routing and execution pending/success states in Voice Control
- [x] Add UI coverage for classified developer navigation command execution
- [x] Add UI coverage for classified AI command handoff with the expected prompt

- [x] Show a visible `Classifying command…` state while voice.routeCommand is pending before classification completes
- [x] Preserve and display a distinct command-routing failure state in Voice Control
- [x] Re-run voice command UI tests after fixing pending and failure states

- [x] Inspect Enhanced Transceiver Project Final archive and reconcile its phone concepts with Bonds Studio
- [x] Define guest-isolated phone contacts, call log, and text message data structures
- [x] Add Open5GS provider configuration and safe server-side call/text service boundary
- [x] Add phone procedures for contacts, call log, dialer calls, and text messages
- [x] Build Phone workspace with Call Log, Dialer, and Contacts tabs
- [x] Add Phone to the Bond Studio header menu and route map
- [x] Add Vitest coverage for guest isolation, phone CRUD, command validation, and provider boundary behavior
- [x] Verify Phone UI and flows, run tests/type-check/build, and save a checkpoint

- [x] Document self-hosted Open5GS WebUI versus the local IMS/SIP and SMS gateway endpoints needed by Phone
- [x] Support local/private gateway URLs in the Phone provider configuration without cloud-account assumptions
- [x] Verify the local-provider status and not-configured behavior with tests and a production build

- [x] Add explicit loading and error states for Phone status, contacts, calls, and messages queries
- [x] Add contact update support and full guest-isolated contact lifecycle coverage
- [x] Add route/menu and key Phone UI interaction tests for Dialer, Contacts, and Call Log

- [x] Save a new reviewable checkpoint after the completed Phone workspace verification
- [x] Add an explicit phone.status query error panel in PhonePage
- [x] Add a cross-guest Phone contact update denial test
- [x] Add real UI-level Phone tests for Dialer, Contacts, and Call Log interactions

- [x] Add Battery under System Settings with Battery Saver and Charging Mode options
- [x] Add safe browser battery telemetry with a fallback when Battery Status API is unavailable
- [x] Add 0–10,000 lux charging simulation with standard nit setting and charge-time estimate
- [x] Make the photovoltaic simulation explicit and prevent claims of software-only physical charging
- [x] Add Battery route/menu tests, responsive UI verification, build, and checkpoint

- [x] Save a new reviewable checkpoint after the Battery workspace implementation and verification
- [x] Perform and document responsive Battery UI verification at mobile and desktop breakpoints
- [x] Add a real interaction test for the Battery route/menu entry

- [x] Add a real UI navigation test from System Settings to Battery and verify the `/settings/battery` destination

- [x] Add a routed UI test that starts at `/settings`, clicks the Battery entry, and verifies `/settings/battery` renders BatteryPage through the app router
- [x] Add a header-menu System Settings > Battery interaction test if the shared menu can be mounted safely

- [x] Verify the real header-menu System Settings > Battery flow in the browser; document the Radix portal limitation for jsdom coverage
- [x] Fix the compact mobile header logo fallback so it does not show a broken image when the uploaded mark is unavailable
- [x] Replace Quick Start project options with Document, Web, Audio, Video, Animation, Game, and Code
- [x] Verify the updated Quick Start landing-page layout and save a reviewable checkpoint
- [x] Add Image immediately after Video in the Quick Start project menu and verify the category order
- [x] Save a new reviewable checkpoint after the Image Quick Start update
- [x] Upgrade AI Mode for complex-project planning, context management, tool orchestration, and faster interaction feedback while preserving guest isolation and safe boundaries
- [x] Add focused AI Mode tests, verify the upgraded workflow, and save a reviewable checkpoint
- [x] Upgrade AI Mode and Voice Control for live typed and spoken project execution with progress, resumable steps, and safe confirmations
- [x] Add focused execution tests, verify typed and voice flows, and save a reviewable checkpoint
- [x] Add persisted AI execution status, step, progress, and resumable run metadata to guest-isolated conversations
- [x] Stream or poll server-backed execution progress into AI Mode and Voice Control, replacing visual-only progress
- [x] Add tests and save a new checkpoint for genuine live execution state
- [x] Add server-backed live AI run status and progress polling to Voice Control after spoken handoff
