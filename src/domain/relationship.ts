export interface Relationship {
  fromId: string;
  toId: string;
  trust: number;
  respect: number;
  favor: number;
  notes: string[];
}
