import { Jurisdiction } from '../domain/jurisdiction';

export class GovernanceSystem {
  evaluate(area: Jurisdiction) {
    return {
      stability: area.stability,
      prosperity: area.prosperity,
      incense: area.incense,
      score: area.stability + area.prosperity + area.incense - area.disasters
    };
  }

  applyDisaster(area: Jurisdiction, value: number) {
    area.disasters += value;
    area.stability = Math.max(0, area.stability - value);
  }

  improve(area: Jurisdiction, value: number) {
    area.prosperity += value;
    area.incense += Math.floor(value / 2);
  }
}
