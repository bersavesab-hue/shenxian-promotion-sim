export interface GameSystem {
  name: string;
  initialize?(): void;
  update?(): void;
}

export class SystemManager {
  private systems: GameSystem[] = [];

  register(system: GameSystem): void {
    this.systems.push(system);
  }

  initialize(): void {
    for (const system of this.systems) {
      system.initialize?.();
    }
  }

  update(): void {
    for (const system of this.systems) {
      system.update?.();
    }
  }
}
