import { User } from './user';

export interface Author extends User {
  courses: string[]; // Course IDs
  expertise: string[];
  rating: number;
}
