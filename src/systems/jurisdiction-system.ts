export interface Jurisdiction {
  name: string;
  level: string;
  population: number;
  stability: number;
  incense: number;
}

export function updateJurisdiction(
  jurisdiction: Jurisdiction,
  stabilityChange: number,
  incenseChange: number
): Jurisdiction {
  return {
    ...jurisdiction,
    stability: Math.max(0, Math.min(100, jurisdiction.stability + stabilityChange)),
    incense: Math.max(0, jurisdiction.incense + incenseChange)
  };
}
