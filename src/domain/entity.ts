export interface Entity {
  id: string;
  name: string;
  type: string;
}

export interface NpcEntity extends Entity {
  realm: string;
  rank: string;
  attitude: number;
}
