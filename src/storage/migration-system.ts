export interface Migration {
  from: string;
  to: string;
  migrate(data: unknown): unknown;
}

export class MigrationSystem {
  private migrations: Migration[] = [];

  register(migration: Migration) {
    this.migrations.push(migration);
  }

  migrate(data: unknown, fromVersion: string, targetVersion: string): unknown {
    let result = data;
    for (const migration of this.migrations) {
      if (migration.from === fromVersion && migration.to === targetVersion) {
        result = migration.migrate(result);
      }
    }
    return result;
  }
}
