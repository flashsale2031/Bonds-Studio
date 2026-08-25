# Bonds Studio Ledger AI — Adaptive Learning v3.4+

The ledger assistant now has an experience-learning layer that prevents repeated mistakes without pretending to retrain a foundation model inside the browser.

## How it learns

1. **Safety holds** are stored as prior caution events.
2. **Verified completions** are stored as successful patterns.
3. **Human corrections** can be recorded with `Teach AI From Mistake`.
4. Similar future assignments are compared against prior events using normalized task signatures.
5. A prior mistake/correction or repeated safety hold automatically raises scrutiny.
6. The safety engine requires extra verification and can block automation when the new task resembles a known failure pattern.

## Fail-closed behavior

Learned confidence never overrides safety. The assistant will not use memory to justify a risky action. A learned match can only increase caution, trigger verification, or require human review.

## Privacy

The learning memory is stored locally in the browser under `bonds-studio-ledger-ai-learning-v1`. It should not contain passwords, authentication codes, payment credentials, or other secrets. Production deployments should move this event store to an authenticated encrypted backend if cross-device learning is required.

## Future model training

This layer is deliberately separated from model training. If a future Bonds Studio deployment adds a trainable model, these events can become a reviewed dataset, but only after redaction, consent, validation, and quality controls.
