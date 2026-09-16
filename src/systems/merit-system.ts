export class MeritSystem {
  addMerit(current: number, amount: number): number {
    return Math.max(0, current + amount);
  }

  calculateLevel(merit: number): string {
    if (merit >= 10000) return "大功德";
    if (merit >= 1000) return "功德深厚";
    if (merit >= 100) return "初具功德";
    return "凡尘积累";
  }
}
