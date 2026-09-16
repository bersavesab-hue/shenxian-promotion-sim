export interface Jurisdiction {
  id: string;
  name: string;
  level: 'village' | 'town' | 'city' | 'region' | 'heaven';
  population: number;
  stability: number;
  prosperity: number;
  incense: number;
  disasters: number;
  governorId?: string;
}
