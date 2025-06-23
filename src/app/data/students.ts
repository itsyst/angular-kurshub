import { Student } from '../types/student';

export const students: Student[] = [
  {
    id: 's1',
    name: 'Alice Johnson',
    avatar: 'https://i.pravatar.cc/150?img=4',
    enrolledCourses: [
      { courseId: '1', progress: 85 },
      { courseId: '6', progress: 40 },
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
      { courseId: '7', progress: 25 },
    ],
    role: 'student',
    email: 'emily.smith@example.com'
  },
  {
    id: 's4',
    name: 'James Brown',
    avatar: 'https://i.pravatar.cc/150?img=7',
    enrolledCourses: [
      { courseId: '6', progress: 90 },
      { courseId: '9', progress: 100 },
    ],
    role: 'student',
    email: 'james.brown@example.com'
  },
  {
    id: 's5',
    name: 'Olivia Martinez',
    avatar: 'https://i.pravatar.cc/150?img=8',
    enrolledCourses: [
      { courseId: '4', progress: 50 },
      { courseId: '5', progress: 15 },
    ],
    role: 'student',
    email: 'olivia.martinez@example.com'
  },
  {
    id: 's6',
    name: 'Daniel Garcia',
    avatar: 'https://i.pravatar.cc/150?img=9',
    enrolledCourses: [
      { courseId: '10', progress: 65 },
    ],
    role: 'student',
    email: 'daniel.garcia@example.com'
  },
  {
    id: 's7',
    name: 'Sophia Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=10',
    enrolledCourses: [
      { courseId: '8', progress: 95 },
    ],
    role: 'student',
    email: 'sophia.rodriguez@example.com'
  },
  {
    id: 's8',
    name: 'Liam Wilson',
    avatar: 'https://i.pravatar.cc/150?img=11',
    enrolledCourses: [
      { courseId: '1', progress: 100 },
      { courseId: '4', progress: 100 },
    ],
    role: 'student',
    email: 'liam.wilson@example.com'
  },
  {
    id: 's9',
    name: 'Isabella Anderson',
    avatar: 'https://i.pravatar.cc/150?img=12',
    enrolledCourses: [
      { courseId: '5', progress: 80 },
    ],
    role: 'student',
    email: 'isabella.anderson@example.com'
  },
  {
    id: 's10',
    name: 'Noah Taylor',
    avatar: 'https://i.pravatar.cc/150?img=13',
    enrolledCourses: [
      { courseId: '7', progress: 55 },
    ],
    role: 'student',
    email: 'noah.taylor@example.com'
  },
];
