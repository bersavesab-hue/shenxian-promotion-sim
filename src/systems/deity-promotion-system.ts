export interface PromotionRequirement {
  requiredMerit: number;
  requiredIncense: number;
  requiredEvaluation: number;
}

export function canPromote(
  merit: number,
  incense: number,
  evaluation: number,
  requirement: PromotionRequirement
): boolean {
  return (
    merit >= requirement.requiredMerit &&
    incense >= requirement.requiredIncense &&
    evaluation >= requirement.requiredEvaluation
  );
}
