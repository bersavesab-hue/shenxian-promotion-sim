export interface SaveSchema {
  version: string;
  createdAt: string;
  updatedAt: string;
  player: unknown;
  world: unknown;
}

export const CURRENT_SAVE_VERSION = "0.1.0";
