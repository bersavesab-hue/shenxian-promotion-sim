import { Mission } from '../domain/mission';

export class MeritTaskSystem {
  completeMission(mission: Mission) {
    return {
      merit: mission.rewards.merit ?? 0,
      incense: mission.rewards.incense ?? 0,
      heavenlyCredit: mission.rewards.heavenlyCredit ?? 0,
      reputation: mission.rewards.reputation ?? 0
    };
  }
}
