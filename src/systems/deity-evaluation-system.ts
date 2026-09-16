export interface DeityEvaluation {
  merit: number;
  incense: number;
  governance: number;
  recommendation: number;
  finalScore: number;
}

export function evaluateDeity(input: Omit<DeityEvaluation, 'finalScore'>): DeityEvaluation {
  const finalScore =
    input.merit * 0.4 +
    input.incense * 0.25 +
    input.governance * 0.2 +
    input.recommendation * 0.15;

  return { ...input, finalScore };
}
