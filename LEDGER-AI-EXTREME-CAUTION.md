# Ledger AI Extreme Caution Mode

The ledger assistant now treats accuracy as more important than completion speed.

## Core rules

1. Never invent an answer or choose randomly to satisfy a task.
2. Never answer subjective or preference questions on a user's behalf without explicit instructions and evidence.
3. Detect likely attention checks, instruction checks, and trap-like wording and enter a safety hold.
4. Require deterministic evidence before committing a ledger value.
5. Treat delete, cancel, transfer, purchase, payment, withdrawal, publish, and similar actions as consequential and require explicit scope plus verification.
6. Treat passwords, security codes, financial credentials, and similar sensitive data as protected/manual steps.
7. Stop on unexpected navigation, authentication changes, missing evidence, conflicting values, or unverifiable results.
8. Separate inspection from action. A page may be inspected without granting permission to commit an action.
9. A high confidence score never overrides a hard safety hold.
10. Stop Entry immediately changes the runner to a blocked safety state.

## Safety classes

- `routine`: deterministic task; automation may proceed after normal verification.
- `ambiguous`: interpretation is required; inspect and hold until the objective is clear.
- `attention_check`: likely quality/instruction check; do not guess or randomize.
- `subjective`: preference/opinion response; require human direction.
- `destructive`: consequential operation; require explicit authorization and final verification.
- `sensitive`: protected information; require a protected/manual workflow.

The browser/extension automation layer should pass observed task text and expected/observed values to the safety engine before any external interaction is committed. The web UI cannot reliably inspect arbitrary third-party DOM content without a browser extension or native automation bridge, so the current system deliberately fails closed when that evidence is unavailable.
