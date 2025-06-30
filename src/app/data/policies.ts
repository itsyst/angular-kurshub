import { PolicyData } from "../types/policy";

export const policies: PolicyData[] = [
  {
    id: 1,
    lastUpdated: new Date('2024-06-24'),
    effectiveDate: new Date('2024-07-01'),
    version: '1.0',
    isActive: false
  },
  {
    id: 2,
    lastUpdated: new Date('2025-06-24'),
    effectiveDate: new Date('2025-07-01'),
    version: '2.0',
    isActive: true
  }
];
