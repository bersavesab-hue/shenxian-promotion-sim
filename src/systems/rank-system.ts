export interface RankDefinition {
  name: string;
  level: number;
  description: string;
}

export class RankSystem {
  private ranks: RankDefinition[] = [];

  addRank(rank: RankDefinition): void {
    this.ranks.push(rank);
  }

  getRanks(): RankDefinition[] {
    return [...this.ranks];
  }
}
