import { Comment } from "../types/comment";

export const comments: Comment[] = [
  {
    id: 'c1',
    courseId: '1',
    userId: 's1',
    content: 'Denna kurs är fantastisk! Jag förstår slutligen JavaScript ordentligt.',
    createdAt: new Date('2024-08-05'),
    rating: 5,
  },
  {
    id: 'c2',
    courseId: '2',
    userId: 's2',
    content: 'Väl strukturerad och mycket informativ. Rekommenderas varmt!',
    createdAt: new Date('2024-08-08'),
    rating: 5,
  },
  {
    id: 'c3',
    courseId: '3',
    userId: 's3',
    content: 'Utmanande men värd varje minut. Det sista projektet var otroligt bra.',
    createdAt: new Date('2024-08-10'),
    rating: 4,
  },
  {
    id: 'c4',
    courseId: '1',
    userId: 's4',
    content: 'Bra lärare och utmärkt material. Lärde mig mycket.',
    createdAt: new Date('2024-08-12'),
    rating: 5,
  },
];
