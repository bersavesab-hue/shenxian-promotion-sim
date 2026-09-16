export type IdentityType = 'mortal' | 'deity' | 'official';

export interface Identity {
  type: IdentityType;
  name: string;
  title: string;
  grade: number;
  authority: number;
}
