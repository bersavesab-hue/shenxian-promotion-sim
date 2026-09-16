export type MissionType = 'daily' | 'annual' | 'special' | 'heavenly';

export interface Mission {
  id: string;
  name: string;
  type: MissionType;
  description: string;
  requirements: Record<string, number>;
  rewards: {
    merit?: number;
    incense?: number;
    heavenlyCredit?: number;
    reputation?: number;
  };
}
