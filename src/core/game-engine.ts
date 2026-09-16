import { EventBus } from './event-bus';
import { SystemManager } from './system-manager';

export class GameEngine {
  readonly events = new EventBus();
  readonly systems = new SystemManager();

  start(): void {
    this.systems.initialize();
  }

  tick(): void {
    this.systems.update();
  }
}
