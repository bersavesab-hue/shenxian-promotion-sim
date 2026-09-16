export type EventCategory =
  | 'appointment'
  | 'assessment'
  | 'petition'
  | 'competition'
  | 'disaster'
  | 'merit';

export interface DeityEvent {
  id: string;
  category: EventCategory;
  title: string;
  description: string;
  requiredPosition?: string;
  effects: {
    merit?: number;
    incense?: number;
    reputation?: number;
    relationshipChange?: number;
  };
}
