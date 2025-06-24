import { Comment } from "../types/comment";

export const comments: Comment[] = [
  {
    id: 'c1',
    courseId: '1', // React Grunderna
    userId: 's1',
    content: 'Denna kurs är fantastisk! Jag förstår slutligen React på djupet.',
    createdAt: new Date('2024-08-05')
  },
  {
    id: 'c2',
    courseId: '2', // Avancerad Python
    userId: 's2',
    content: 'Väl strukturerad och mycket informativ om avancerade Python-koncept. Rekommenderas varmt!',
    createdAt: new Date('2024-08-08')
  },
  {
    id: 'c3',
    courseId: '3', // Datavetenskap Grunderna
    userId: 's3',
    content: 'Utmanande men värd varje minut. Förklarade datastrukturer otroligt bra.',
    createdAt: new Date('2024-08-10'),
  },
  {
    id: 'c4',
    courseId: '1', // React Grunderna
    userId: 's4',
    content: 'Bra lärare och utmärkt material. Lärde mig otroligt mycket om komponentlivscykeln.',
    createdAt: new Date('2024-08-12'),
  },
  {
    id: 'c5',
    courseId: '4', // JavaScript Mästerskap
    userId: 's5',
    content: 'En mycket omfattande kurs som täcker det mesta av modern JavaScript. Krävande men givande.',
    createdAt: new Date('2024-08-15'),
  },
  {
    id: 'c6',
    courseId: '10', // AI med TensorFlow
    userId: 's6',
    content: 'TensorFlow-delen var solid. Behövde dock komplettera med extern information för djupare förståelse.',
    createdAt: new Date('2024-08-18')
  },
  {
    id: 'c7',
    courseId: '8', // Python för Finans
    userId: 's7',
    content: 'Python för Finans är otroligt specifik och relevant. Fantastiska praktiska exempel!',
    createdAt: new Date('2024-08-20')
  },
  {
    id: 'c8',
    courseId: '1', // React Grunderna
    userId: 's8',
    content: 'Jag älskar hur denna kurs byggde upp kunskapen steg för steg. Perfekt för visuella studenter.',
    createdAt: new Date('2024-08-22')
  },
  {
    id: 'c9',
    courseId: '5', // Maskininlärning A–Ö
    userId: 's9',
    content: 'Maskininlärningskursen är en mammut! Mycket information, men välstrukturerad.',
    createdAt: new Date('2024-08-25')
  },
  {
    id: 'c10',
    courseId: '7', // SQL för Dataanalys
    userId: 's10',
    content: 'SQL-kursen är bra för nybörjare, men jag önskar mer avancerade scenarier.',
    createdAt: new Date('2024-08-28')
  },
  {
    id: 'c11',
    courseId: '4', // JavaScript Mästerskap
    userId: 's8',
    content: 'Den här kursen tog mina JS-kunskaper till en helt ny nivå. Asynkron JS var kristallklar!',
    createdAt: new Date('2024-09-01')
  },
  {
    id: 'c12',
    courseId: '9', // HTML & CSS Grunderna
    userId: 's4',
    content: 'Perfekt för att komma igång med webbdesign. Jag känner mig säker på grunderna nu.',
    createdAt: new Date('2024-09-05')
  },
  {
    id: 'c13',
    courseId: '6', // Node.js för Nybörjare
    userId: 's1',
    content: 'En bra grund för Node.js, men kunde ha haft fler djupgående exempel på databasinteraktion.',
    createdAt: new Date('2024-09-07')
  },
  {
    id: 'c14',
    courseId: '2', // Avancerad Python
    userId: 's3',
    content: 'Avancerad Python levererade! Speciellt delen om dekoratörer var otroligt väl förklarad.',
    createdAt: new Date('2024-09-10')
  },
  {
    id: 'c15',
    courseId: '5', // Maskininlärning A–Ö
    userId: 's6',
    content: 'Jag hade lite svårt med vissa delar av ML-kursen, men instruktören var hjälpsam i Q&A.',
    createdAt: new Date('2024-09-12')
  },
  {
    id: 'c16',
    courseId: '3', // Datavetenskap Grunderna
    userId: 's7',
    content: 'Grundläggande Datavetenskap är en utmärkt startpunkt. Kommer definitivt att rekommendera den.',
    createdAt: new Date('2024-09-15')
  },
  {
    id: 'c17',
    courseId: '8', // Python för Finans
    userId: 's10',
    content: 'Mycket relevant och praktisk kurs för min karriär. Jag använder kunskaperna dagligen nu.',
    createdAt: new Date('2024-09-18')
  },
  {
    id: 'c18',
    courseId: '10', // AI med TensorFlow
    userId: 's9',
    content: 'TensorFlow-kursen är bra för att förstå grunderna i AI-modeller. Men jag behövde forska lite själv.',
    createdAt: new Date('2024-09-20')
  },
  {
    id: 'c19',
    courseId: '1', // React Grunderna
    userId: 's5',
    content: 'Mycket solid kurs. Förklarar Reacts koncept tydligt och med bra exempel.',
    createdAt: new Date('2024-09-22')
  },
  {
    id: 'c20',
    courseId: '4', // JavaScript Mästerskap
    userId: 's10',
    content: 'JS-mästerskap är en utmaning, men otroligt givande. Känner mig som en riktig JS-ninja nu!',
    createdAt: new Date('2024-09-25')
  },
  {
    id: 'c21',
    courseId: '7', // SQL för Dataanalys
    userId: 's2',
    content: 'Den här SQL-kursen är perfekt för att komma igång med dataanalys. Enkel att följa.',
    createdAt: new Date('2024-09-28')
  },
  {
    id: 'c22',
    courseId: '9', // HTML & CSS Grunderna
    userId: 's8',
    content: 'En bra introduktion till webbutveckling. Jag uppskattade de praktiska övningarna.',
    createdAt: new Date('2024-10-01')
  },
  {
    id: 'c23',
    courseId: '6', // Node.js för Nybörjare
    userId: 's9',
    content: 'Node.js-kursen gav mig en stabil grund att stå på för backend-utveckling. Mycket nöjd.',
    createdAt: new Date('2024-10-03')
  },
  {
    id: 'c24',
    courseId: '2', // Avancerad Python
    userId: 's7',
    content: 'Asynkron programmering med Python var ett komplext ämne, men kursen gjorde det begripligt.',
    createdAt: new Date('2024-10-05')
  },
  {
    id: 'c25',
    courseId: '5', // Maskininlärning A–Ö
    userId: 's1',
    content: 'ML-kursen är intensiv, men resultaten är otroliga. Jag känner mig mycket mer kompetent nu.',
    createdAt: new Date('2024-10-07')
  },
  {
    id: 'c26',
    courseId: '3', // Datavetenskap Grunderna
    userId: 's5',
    content: 'Datavetenskapens grunder var lite torr, men täckte viktiga ämnen väl.',
    createdAt: new Date('2024-10-09')
  },
  {
    id: 'c27',
    courseId: '8', // Python för Finans
    userId: 's4',
    content: 'En exceptionell kurs! De finansiella modellerna i Python är nu enkla att förstå.',
    createdAt: new Date('2024-10-11')
  },
  {
    id: 'c28',
    courseId: '10', // AI med TensorFlow
    userId: 's3',
    content: 'AI-kursen var mycket praktisk och gav mig bra förståelse för att bygga egna modeller.',
    createdAt: new Date('2024-10-13')
  },
  {
    id: 'c29',
    courseId: '1', // React Grunderna
    userId: 's9',
    content: 'Denna kurs är utmärkt för att kickstarta din React-resa. Mycket tydliga förklaringar.',
    createdAt: new Date('2024-10-15')
  },
  {
    id: 'c30',
    courseId: '4', // JavaScript Mästerskap
    userId: 's6',
    content: 'JavaScript Mästerskap är en utmaning för de som vill fördjupa sig. Fick verkligen tänka till.',
    createdAt: new Date('2024-10-17')
  },
];
