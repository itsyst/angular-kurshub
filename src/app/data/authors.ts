import { Author } from "../types/author";

export const authors: Author[] = [
  {
    id: 'a1',
    name: 'John Carter',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Erfaren mjukvaruingenjör med över 10 års erfarenhet av att bygga webbapplikationer.',
    expertise: ['JavaScript', 'Node.js', 'React'],
    rating: 4.8,
    courses: ['1', '3'],
    email: "john.carter@kurshub.com",
    role: "author"
  },
  {
    id: 'a2',
    name: 'Sarah Mitchell',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Frontendutvecklare som älskar att undervisa i modern UI/UX-teknik.',
    expertise: ['React', 'Redux', 'CSS'],
    rating: 4.7,
    courses: ['2'],
    email: "srah.mitchell@kurshub.com",
    role: "author"
  },
  {
    id: 'a3',
    name: 'David Kim',
    avatar: 'https://i.pravatar.cc/150?img=8',
    bio: 'Tech lead på ett toppföretag, älskar TypeScript och ren kodpraktik.',
    expertise: ['TypeScript', 'Angular', 'React'],
    rating: 4.9,
    courses: ['4'],
    email: "david.kim@kurshub.com",
    role: "author"
  },
  {
    id: 'a4',
    name: 'Emma Larsson',
    avatar: 'https://i.pravatar.cc/150?img=11',
    bio: 'UX-designer med passion för tillgänglighet och användarcentrerad design.',
    expertise: ['UX Design', 'Figma', 'Designsystem'],
    rating: 4.6,
    courses: ['5', '6'],
    email: "emma.larsson@kurshub.com",
    role: "author"
  },
  {
    id: 'a5',
    name: 'Jonas Berg',
    avatar: 'https://i.pravatar.cc/150?img=15',
    bio: 'Fullstackutvecklare med fokus på DevOps och molnlösningar.',
    expertise: ['Docker', 'AWS', 'Node.js'],
    rating: 4.8,
    courses: ['7'],
    email: "jonas.berg@kurshub.com",
    role: "author"
  },
  {
    id: 'a6',
    name: 'Linda Svensson',
    avatar: 'https://i.pravatar.cc/150?img=20',
    bio: 'Datalärare med specialisering inom maskininlärning och AI.',
    expertise: ['Python', 'Machine Learning', 'TensorFlow'],
    rating: 4.9,
    courses: ['8', '9'],
    email: "linda.svensson@kurshub.com",
    role: "author"
  }
];
