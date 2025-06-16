import { Student } from '../types/student';

export const students: Student[] = [
  {
    id: 's1',
    name: 'Alice Johnson',
    avatar: 'https://i.pravatar.cc/150?img=4',
    enrolledCourses: [
      { courseId: '1', progress: 85 },
      { courseId: '2', progress: 40 },
    ],
    role: 'student',
    email: 'alice.johnson@example.com'
  },
  {
    id: 's2',
    name: 'Michael Lee',
    avatar: 'https://i.pravatar.cc/150?img=5',
    enrolledCourses: [
      { courseId: '2', progress: 100 },
    ],
    role: 'student',
    email: 'michael.lee@example.com'
  },
  {
    id: 's3',
    name: 'Emily Smith',
    avatar: 'https://i.pravatar.cc/150?img=6',
    enrolledCourses: [
      { courseId: '3', progress: 70 },
    ],
    role: 'student',
    email: 'emily.smith@example.com'
  },
  {
    id: 's4',
    name: 'James Brown',
    avatar: 'https://i.pravatar.cc/150?img=7',
    enrolledCourses: [
      { courseId: '1', progress: 90 },
    ],
    role: 'student',
    email: 'james.brown@example.com'
  },
];
