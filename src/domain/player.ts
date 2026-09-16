export interface Player {
  id: string;
  name: string;
  origin: string;
  identity: string;
  deityPosition: string | null;
  rank: string;
  attributes: {
    merit: number;
    incense: number;
    reputation: number;
    heavenlyMerit: number;
  };
  history: string[];
}
