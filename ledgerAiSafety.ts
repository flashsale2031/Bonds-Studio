export type TaskRisk = "routine" | "ambiguous" | "attention_check" | "subjective" | "destructive" | "sensitive";

import { assessLearnedRisk, curateAdaptiveStrategy } from "./ledgerAiLearning";

export type SafetyAssessment = {
  risk: TaskRisk;
  score: number;
  allowAutomation: boolean;
  requiresHumanReview: boolean;
  reasons: string[];
  recommendedAction: "proceed" | "inspect" | "hold" | "human_review";
  learnedRisk?: { similarity: number; priorMistakes: number; priorHolds: number; rules: string[]; requiresExtraVerification: boolean };
  adaptive?: ReturnType<typeof curateAdaptiveStrategy>;
};

const PATTERNS: Array<{ risk: TaskRisk; pattern: RegExp; reason: string }> = [
  { risk: "attention_check", pattern: /attention\s+check|select\s+(the\s+)?(following|specified)|choose\s+this\s+option|instruction\s+check|read\s+carefully|quality\s+check/i, reason: "Possible attention/instruction check detected; do not guess or randomize a response." },
  { risk: "subjective", pattern: /opinion|feel|prefer|favorite|how\s+(do|did)\s+you\s+feel|rate\s+how|satisfaction|agree\s+or\s+disagree|describe\s+your/i, reason: "Question appears subjective or preference-based and should not be answered on the user's behalf without explicit instructions." },
  { risk: "ambiguous", pattern: /best|most\s+appropriate|usually|typically|maybe|approximately|estimate|which\s+one\s+would\s+you/i, reason: "Wording may require interpretation; verify the objective and available evidence before acting." },
  { risk: "destructive", pattern: /delete|remove|close\s+account|cancel|submit|purchase|send\s+payment|transfer|withdraw|publish|finalize/i, reason: "Potentially consequential action detected; require explicit scope and final verification." },
  { risk: "sensitive", pattern: /password|passcode|security\s+code|social\s+security|bank\s+account|routing\s+number|credit\s+card|one[-\s]?time\s+code/i, reason: "Sensitive information detected; pause automation and require a protected/manual step." },
];

export function assessLedgerTask(input: string, context?: { expectedValue?: string; observedValue?: string; action?: string }): SafetyAssessment {
  const text = `${input} ${context?.action || ""}`.trim();
  const matches = PATTERNS.filter(item => item.pattern.test(text));
  const learnedRisk = assessLearnedRisk(text);
  const adaptive = curateAdaptiveStrategy(text);
  if (!text) return { adaptive, risk: "ambiguous", score: 0, allowAutomation: false, requiresHumanReview: true, reasons: ["No task content was supplied; the assistant must inspect before acting."], recommendedAction: "inspect", learnedRisk };
  if (matches.length === 0 && !learnedRisk.requiresExtraVerification) return { adaptive, risk: "routine", score: 0.96, allowAutomation: adaptive.recommendedStrategy === "direct", requiresHumanReview: adaptive.recommendedStrategy !== "direct", reasons: ["Task appears deterministic from the available text; verify the target and result before committing."], recommendedAction: "proceed", learnedRisk };
  const highest = ["sensitive", "destructive", "attention_check", "subjective", "ambiguous"].find(r => matches.some(m => m.risk === r)) as TaskRisk;
  const reasons = matches.map(m => m.reason);
  if (learnedRisk.requiresExtraVerification) {
    reasons.push(`Adaptive memory found a similar prior case (${Math.round(learnedRisk.similarity * 100)}% similarity) with ${learnedRisk.priorMistakes} prior mistake/correction event(s). Extra verification is mandatory.`);
    reasons.push(...learnedRisk.rules.slice(0, 2));
  }
  if (adaptive.reasons.length) reasons.push(...adaptive.reasons.slice(0, 3));
  const human = highest !== "routine" || learnedRisk.requiresExtraVerification || adaptive.recommendedStrategy !== "direct";
  return { adaptive, risk: highest, score: Math.max(0.12, 0.72 - matches.length * 0.08 - (learnedRisk.requiresExtraVerification ? 0.18 : 0)), allowAutomation: false, requiresHumanReview: human, reasons, recommendedAction: "human_review", learnedRisk };
}

export function shouldCommitEntry(assessment: SafetyAssessment, expected: string, observed: string): boolean {
  if (!assessment.allowAutomation || assessment.requiresHumanReview) return false;
  if (!expected.trim() || !observed.trim()) return false;
  return expected.trim().toLowerCase() === observed.trim().toLowerCase();
}
