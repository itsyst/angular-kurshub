import { Student } from '../types/student';

export const students: Student[] = [
  {
    id: 's1',
    name: 'Alice Johnson',
    avatar: 'https://i.pravatar.cc/150?img=4',
    enrolledCourses: [
      {
        courseId: '1',
        progress: 85,
        completed: false,
        enrollmentDate: '2024-01-10T00:00:00Z',
      },
      {
        courseId: '6',
        progress: 100,
        completed: true,
        enrollmentDate: '2023-11-05T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'alice.johnson@kurshub.com',
    testimonials: [
      {
        id: 1,
        content:
          'Kursen i Angular-utveckling var precis vad jag behövde för att ta mina färdigheter till nästa nivå. Läraren var kunnig och innehållet välstrukturerat.',
      },
    ],
  },
  {
    id: 's2',
    name: 'Michael Lee',
    avatar: 'https://i.pravatar.cc/150?img=5',
    enrolledCourses: [
      {
        courseId: '2',
        progress: 100,
        completed: false,
        enrollmentDate: '2024-02-15T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'michael.lee@kurshub.com',
    testimonials: [
      { id: 1, content: 'Jag kunde byta karriär tack vare kurserna här!' },
    ],
  },
  {
    id: 's3',
    name: 'Emily Smith',
    avatar: 'https://i.pravatar.cc/150?img=6',
    enrolledCourses: [
      {
        courseId: '3',
        progress: 70,
        completed: false,
        enrollmentDate: '2023-12-20T00:00:00Z',
      },
      {
        courseId: '7',
        progress: 25,
        completed: false,
        enrollmentDate: '2024-01-28T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'emily.smith@kurshub.com',
    testimonials: [],
  },
  {
    id: 's4',
    name: 'James Brown',
    avatar: 'https://i.pravatar.cc/150?img=7',
    enrolledCourses: [
      {
        courseId: '6',
        progress: 90,
        completed: false,
        enrollmentDate: '2024-01-28T00:00:00Z',
      },
      {
        courseId: '9',
        progress: 100,
        completed: false,
        enrollmentDate: '2024-01-28T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'james.brown@kurshub.com',
    testimonials: [
      {
        id: 1,
        content: 'Lärarna är engagerade och materialet är alltid uppdaterat.',
      },
    ],
  },
  {
    id: 's5',
    name: 'Olivia Martinez',
    avatar: 'https://i.pravatar.cc/150?img=8',
    enrolledCourses: [
      {
        courseId: '4',
        progress: 50,
        completed: false,
        enrollmentDate: '2023-12-10T00:00:00Z',
      },
      {
        courseId: '5',
        progress: 15,
        completed: false,
        enrollmentDate: '2023-12-10T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'olivia.martinez@kurshub.com',
    testimonials: [],
  },
  {
    id: 's6',
    name: 'Daniel Garcia',
    avatar: 'https://i.pravatar.cc/150?img=9',
    enrolledCourses: [
      {
        courseId: '10',
        progress: 65,
        completed: false,
        enrollmentDate: '2023-10-10T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'daniel.garcia@kurshub.com',
    testimonials: [],
  },
  {
    id: 's7',
    name: 'Sophia Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=10',
    enrolledCourses: [
      {
        courseId: '8',
        progress: 95,
        completed: false,
        enrollmentDate: '2025-12-10T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'sophia.rodriguez@kurshub.com',
    testimonials: [],
  },
  {
    id: 's8',
    name: 'Liam Wilson',
    avatar: 'https://i.pravatar.cc/150?img=11',
    enrolledCourses: [
      {
        courseId: '1',
        progress: 100,
        completed: false,
        enrollmentDate: '2023-12-20T00:00:00Z',
      },
      {
        courseId: '4',
        progress: 100,
        completed: false,
        enrollmentDate: '2024-09-10T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'liam.wilson@kurshub.com',
    testimonials: [
      {
        id: 1,
        content:
          'Jag har testat många onlineplattformar, men CourseHub har de bästa kurserna. Python Bootcamp hjälpte mig att byta karriär till data science!',
      },
    ],
  },
  {
    id: 's9',
    name: 'Isabella Anderson',
    avatar: 'https://i.pravatar.cc/150?img=12',
    enrolledCourses: [
      {
        courseId: '5',
        progress: 80,
        completed: false,
        enrollmentDate: '2023-08-10T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'isabella.anderson@kurshub.com',
    testimonials: [],
  },
  {
    id: 's10',
    name: 'Noah Taylor',
    avatar: 'https://i.pravatar.cc/150?img=13',
    enrolledCourses: [
      {
        courseId: '7',
        progress: 55,
        completed: false,
        enrollmentDate: '2023-07-10T00:00:00Z',
      },
    ],
    role: 'student',
    email: 'noah.taylor@kurshub.com',
    testimonials: [],
  },
];
