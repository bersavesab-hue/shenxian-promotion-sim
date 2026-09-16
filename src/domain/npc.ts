export interface NPC {
  id: string;
  name: string;
  identity: string;
  office?: string;
  rank: number;
  personality: string[];
  goals: string[];
  faction?: string;
}
