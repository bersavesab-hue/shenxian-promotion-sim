import { CURRENT_SAVE_VERSION, SaveSchema } from "./save-schema";

export class SaveManager {
  createSave(data: Omit<SaveSchema, "version" | "createdAt" | "updatedAt">): SaveSchema {
    const now = new Date().toISOString();
    return {
      ...data,
      version: CURRENT_SAVE_VERSION,
      createdAt: now,
      updatedAt: now,
    };
  }

  updateSave(save: SaveSchema): SaveSchema {
    return {
      ...save,
      updatedAt: new Date().toISOString(),
    };
  }
}
