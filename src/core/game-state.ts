export interface PlayerState {
  id: string;
  name: string;
  realm: string;
  rank: string;
  merit: number;
  reputation: number;
}

export interface GameState {
  version: string;
  day: number;
  year: number;
  player: PlayerState;
}

export function createDefaultGameState(): GameState {
  return {
    version: "0.1.0",
    day: 1,
    year: 1,
    player: {
      id: "player",
      name: "未命名修行者",
      realm: "凡人",
      rank: "无品",
      merit: 0,
      reputation: 0
    }
  };
}
