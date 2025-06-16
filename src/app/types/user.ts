export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'author' | 'admin';
  avatar?: string;
  bio?: string;
}
