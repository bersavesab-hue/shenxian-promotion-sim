import { HeavenlyOrganization } from '../domain/organization';

export class OrganizationSystem {
  private organizations: HeavenlyOrganization[] = [];

  register(org: HeavenlyOrganization) {
    this.organizations.push(org);
  }

  getById(id: string) {
    return this.organizations.find(item => item.id === id);
  }

  getPositions(orgId: string) {
    return this.getById(orgId)?.positions ?? [];
  }
}
