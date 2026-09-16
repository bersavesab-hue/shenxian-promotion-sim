export interface HeavenlyOrganization {
  id: string;
  name: string;
  type: 'heaven' | 'local' | 'department';
  parentId?: string;
  responsibilities: string[];
  positions: string[];
  influence: number;
}
