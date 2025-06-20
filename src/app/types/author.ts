import { User } from './user';

export interface Author extends User {
  courses: string[]; // Course IDs
  expertise: Expertise[];
  presentation: string;
  rating: number;
}

export interface Expertise {
  id: number;
  domain: string;
  company: string;
  date: string;
}
