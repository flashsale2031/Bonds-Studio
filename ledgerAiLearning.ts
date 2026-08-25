/**
 * Adaptive Ledger AI memory.
 *
 * This is an on-device experience-learning layer, not a claim of model training.
 * It remembers prior mistakes/holds, extracts reusable prevention rules, and
 * raises scrutiny whenever a new task resembles a previously unsafe case.
 */
export type LearningOutcome = "success" | "mistake" | "safety_hold" | "human_correction";

export type LearningEvent = {
  id: string;
  timestamp: string;
  platformId?: string;
  accountId?: string;
  taskId?: string;
  input: string;
  normalizedSignature: string;
  outcome: LearningOutcome;
  mistake?: string;
  correction?: string;
  evidence?: string;
  preventionRule?: string;
};

export type LearnedRisk = {
  similarity: number;
  priorMistakes: number;
  priorHolds: number;
  rules: string[];
  requiresExtraVerification: boolean;
};

const STORAGE_KEY = "bonds-studio-ledger-ai-learning-v1";
const MAX_EVENTS = 500;

function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter(w => !["the", "a", "an", "to", "of", "and", "or", "for", "with", "on", "in"].includes(w))
    .slice(0, 120)
    .join(" ");
}

function tokens(input: string) { return new Set(normalize(input).split(" ").filter(Boolean)); }

function similarity(a: string, b: string) {
  const aa = tokens(a), bb = tokens(b);
  if (!aa.size || !bb.size) return 0;
  let intersection = 0;
  aa.forEach(t => { if (bb.has(t)) intersection++; });
  return intersection / Math.max(1, aa.size + bb.size - intersection);
}

export function loadLearningEvents(): LearningEvent[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function save(events: LearningEvent[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events.slice(-MAX_EVENTS)));
}

export function rememberLearningEvent(event: Omit<LearningEvent, "id" | "timestamp" | "normalizedSignature">) {
  const next: LearningEvent = {
    ...event,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    normalizedSignature: normalize(event.input),
  };
  save([...loadLearningEvents(), next]);
  return next;
}

export function learnFromMistake(input: string, correction: string, context?: Omit<LearningEvent, "id" | "timestamp" | "input" | "normalizedSignature" | "outcome" | "correction">) {
  const preventionRule = `When a task resembles this case, pause before acting; verify the target, evidence, and exact instruction against the prior correction: ${correction}`;
  return rememberLearningEvent({
    ...context,
    input,
    outcome: "mistake",
    correction,
    preventionRule,
  });
}

export function assessLearnedRisk(input: string): LearnedRisk {
  const events = loadLearningEvents();
  const matches = events
    .map(event => ({ event, similarity: similarity(input, event.input) }))
    .filter(x => x.similarity >= 0.32)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 12);

  const priorMistakes = matches.filter(x => x.event.outcome === "mistake" || x.event.outcome === "human_correction").length;
  const priorHolds = matches.filter(x => x.event.outcome === "safety_hold").length;
  const rules = [...new Set(matches.map(x => x.event.preventionRule).filter(Boolean) as string[])].slice(0, 5);
  const strongest = matches[0]?.similarity || 0;

  return {
    similarity: strongest,
    priorMistakes,
    priorHolds,
    rules,
    requiresExtraVerification: priorMistakes > 0 || priorHolds > 1 || strongest >= 0.58,
  };
}

export function recordSafetyHold(input: string, reason: string, context?: { platformId?: string; accountId?: string; taskId?: string }) {
  return rememberLearningEvent({
    ...context,
    input,
    outcome: "safety_hold",
    evidence: reason,
    preventionRule: `Re-check this task family before proceeding. Previous safety hold: ${reason}`,
  });
}

export function recordSuccessfulVerification(input: string, context?: { platformId?: string; accountId?: string; taskId?: string }) {
  return rememberLearningEvent({ ...context, input, outcome: "success", evidence: "Verified result matched the scoped objective." });
}

export function clearLearningMemory() { localStorage.removeItem(STORAGE_KEY); }

// Adaptive task-familiarity layer v3.6.
// This is a deterministic on-device memory/retrieval system, not unsupervised
// model training. It is designed to improve consistency without allowing
// prior experience to override the current task or safety policy.
export type TaskFeature = {
  tokens: string[];
  intent: string;
  entities: string[];
  action: string;
  riskSignals: string[];
};

export type AdaptiveGuidance = {
  familiarity: number;
  novelty: number;
  predictedDifficulty: number;
  extraChecks: number;
  recommendedStrategy: "direct" | "inspect_then_act" | "human_review" | "stop";
  matchedExperiences: number;
  repeatedFailure: boolean;
  reasons: string[];
};

function extractFeatures(input: string): TaskFeature {
  const text = input.toLowerCase();
  const toks = [...tokens(text)].slice(0, 80);
  const entities = toks.filter(t => /\$|usd|balance|account|survey|entry|date|email|amount|status|order|transaction/.test(t));
  const action = /submit|save|enter|record|update|send|transfer|delete|select|choose|answer|complete/.exec(text)?.[0] || "inspect";
  const intent = /balance|ledger|reconcil|account/.test(text) ? "ledger" : /survey|question|answer/.test(text) ? "questionnaire" : "general";
  const riskSignals = [
    /attention|carefully|instruction|specified|exactly/.test(text) ? "attention" : "",
    /random|any|either|choose one/.test(text) ? "random-choice" : "",
    /submit|final|send|delete|transfer|withdraw/.test(text) ? "consequential" : "",
    /password|code|ssn|routing|card/.test(text) ? "sensitive" : "",
  ].filter(Boolean);
  return { tokens: toks, intent, entities, action, riskSignals };
}

function featureSimilarity(a: TaskFeature, b: TaskFeature) {
  const overlap = (aa: string[], bb: string[]) => {
    if (!aa.length || !bb.length) return 0;
    const bset = new Set(bb);
    return aa.filter(x => bset.has(x)).length / Math.max(aa.length, bb.length);
  };
  const token = overlap(a.tokens, b.tokens);
  const entity = overlap(a.entities, b.entities);
  const intent = a.intent === b.intent ? 1 : 0;
  const action = a.action === b.action ? 1 : 0;
  const risk = overlap(a.riskSignals, b.riskSignals);
  return token * 0.45 + entity * 0.2 + intent * 0.15 + action * 0.1 + risk * 0.1;
}

export function curateAdaptiveStrategy(input: string): AdaptiveGuidance {
  const current = extractFeatures(input);
  const events = loadLearningEvents();
  const scored = events.map(event => ({ event, score: featureSimilarity(current, extractFeatures(event.input)) }))
    .filter(x => x.score >= 0.18)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30);

  const mistakes = scored.filter(x => x.event.outcome === "mistake" || x.event.outcome === "human_correction");
  const holds = scored.filter(x => x.event.outcome === "safety_hold");
  const successes = scored.filter(x => x.event.outcome === "success");
  const repeatedFailure = mistakes.length >= 2;
  const familiarity = Math.min(1, (successes.length * 0.12) + (scored[0]?.score || 0) * 0.65);
  const novelty = Math.max(0, 1 - familiarity);
  const predictedDifficulty = Math.min(1, novelty * 0.55 + mistakes.length * 0.12 + holds.length * 0.08);
  const extraChecks = Math.min(6, Math.ceil(predictedDifficulty * 4) + (repeatedFailure ? 2 : 0));
  const reasons: string[] = [];

  if (novelty > 0.65) reasons.push("Task is novel relative to remembered experience; inspect the page and objective before acting.");
  if (mistakes.length) reasons.push(`${mistakes.length} similar prior mistake/correction experience(s) found; reuse the prevention lessons, not the prior answer.`);
  if (holds.length) reasons.push(`${holds.length} similar safety hold(s) found; increase verification before committing.`);
  if (repeatedFailure) reasons.push("Repeated failure pattern detected; do not repeat the prior action. Require fresh evidence and human review.");
  if (current.riskSignals.includes("random-choice")) reasons.push("Task contains choice/randomization language; never infer that randomness is the objective without explicit evidence.");
  if (current.riskSignals.includes("attention")) reasons.push("Potential attention/instruction check; answer only from the exact instruction and verified context.");

  let recommendedStrategy: AdaptiveGuidance["recommendedStrategy"] = "direct";
  if (current.riskSignals.includes("sensitive") || repeatedFailure) recommendedStrategy = "stop";
  else if (current.riskSignals.includes("attention") || current.riskSignals.includes("consequential")) recommendedStrategy = "human_review";
  else if (extraChecks > 0 || novelty > 0.45) recommendedStrategy = "inspect_then_act";

  return { familiarity, novelty, predictedDifficulty, extraChecks, recommendedStrategy, matchedExperiences: scored.length, repeatedFailure, reasons };
}
