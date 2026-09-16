export interface PromotionContext {
  merit: number;
  reputation: number;
  rank: string;
}

export interface PromotionResult {
  success: boolean;
  nextRank?: string;
  reason: string;
}

export class PromotionSystem {
  evaluate(context: PromotionContext): PromotionResult {
    if (context.merit > 100 && context.reputation > 50) {
      return {
        success: true,
        nextRank: "待定仙阶",
        reason: "满足基础晋升条件"
      };
    }

    return {
      success: false,
      reason: "当前修为、功德或声望不足"
    };
  }
}
