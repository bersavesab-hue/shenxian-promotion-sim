export type EventHandler<T = unknown> = (payload: T) => void;

export class EventBus {
  private handlers: Map<string, EventHandler[]> = new Map();

  on<T>(event: string, handler: EventHandler<T>): void {
    const list = this.handlers.get(event) ?? [];
    list.push(handler as EventHandler);
    this.handlers.set(event, list);
  }

  emit<T>(event: string, payload: T): void {
    for (const handler of this.handlers.get(event) ?? []) {
      handler(payload);
    }
  }
}
