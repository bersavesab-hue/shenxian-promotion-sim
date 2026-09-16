import { DeityEvent } from '../domain/event';

export class DeityEventSystem {
  private events: DeityEvent[] = [];

  register(event: DeityEvent) {
    this.events.push(event);
  }

  getAvailableEvents(position?: string) {
    return this.events.filter((event) => {
      return !event.requiredPosition || event.requiredPosition === position;
    });
  }

  resolve(event: DeityEvent) {
    return event.effects;
  }
}
