# Bonds Studio Ledger AI — Adaptive Reasoning v3.6

This release advances the prior learning-memory layer into a task-familiarity and strategy-curation system.

## What it learns
- recurring task shapes and intents
- successful verified workflows
- prior mistakes and human corrections
- safety holds and their causes
- repeated-failure patterns
- task novelty and difficulty
- which verification strategy was appropriate for similar tasks

## What it does not do
This is not autonomous deep-learning model training. The client-side layer uses deterministic feature extraction, retrieval, similarity scoring, outcome weighting, and safety policy. It does not change its own safety rules or silently train on sensitive credentials.

## Randomized objectives
A randomized or novel task is treated as a new objective until the exact instruction is understood. The system does not infer that “random” means arbitrary selection. It first determines whether the task is asking for randomness, testing attention, or asking for a specific factual response.

## Efficiency without unsafe shortcuts
Familiarity reduces unnecessary exploration only after verified experience. A prior successful answer is never copied merely because it worked before. The current page, objective, account, and expected result remain authoritative.

Repeated mistakes increase scrutiny and can force a stop/human-review strategy. Safety holds and sensitive/consequential tasks cannot be overridden by familiarity.

## Adaptive loop
Understand → fingerprint → retrieve similar experience → estimate novelty/difficulty → choose strategy → inspect → act only if policy allows → verify → record outcome → recalibrate.
