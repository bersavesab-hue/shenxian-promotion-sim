export type ResourceType = 'merit' | 'incense' | 'heavenlyMerit' | 'salary' | 'materials' | 'faith';

export interface ResourceState {
  merit: number;
  incense: number;
  heavenlyMerit: number;
  salary: number;
  materials: number;
  faith: number;
}

export interface ResourceChange {
  type: ResourceType;
  amount: number;
  reason: string;
}
