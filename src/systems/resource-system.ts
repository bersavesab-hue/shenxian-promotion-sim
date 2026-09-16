import { ResourceChange, ResourceState } from '../domain/resource';

export class ResourceSystem {
  applyChange(state: ResourceState, change: ResourceChange): ResourceState {
    const next = { ...state };
    next[change.type] += change.amount;
    return next;
  }

  canAfford(state: ResourceState, type: keyof ResourceState, amount: number): boolean {
    return state[type] >= amount;
  }
}
