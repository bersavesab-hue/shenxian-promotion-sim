export interface GameEvent {
  id: string;
  title: string;
  description: string;
}

export class EventSystem {
  private events: GameEvent[] = [];

  register(event: GameEvent): void {
    this.events.push(event);
  }

  getEvents(): GameEvent[] {
    return [...this.events];
  }
}
