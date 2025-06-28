export interface Course {
  id: number | string;
  title?: string;
  description?: string;
  categoryId?: number;
  rating?: number;
  level?: CourseLevel;
  lessons?: number;
  duration?: string;
  students?: number;
  price?: number;
  discountPrice?: number | null;
  releaseDate?: Date;
  totalReviews?: number;
  thumbnail?: string;
  createdAt: string | number | Date;
  updatedAt: Date;
  authorId: number | string;
  featured: boolean;
  benefits?: CourseBenefit[];
  outcomes?: CourseOutcome[];
  curriculum?: CourseCurriculum[] | null;
}

export interface CourseBenefit {
  id: number;
  label: string;
}

export interface CourseOutcome {
  id: number;
  description: string;
}
export interface CourseCurriculum {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  preview: boolean;
}

export interface EnrolledCourse {
  courseId: string;
  progress: number;
  completed?: boolean;
  enrollmentDate?: string;
}

export interface EnrichedEnrollment extends EnrolledCourse {
  course?: Course;
  completedDate?: Date;
  lastAccessedDate?: Date;
}

export enum CourseLevel {
  BEGINNER = 'Nybörjare',
  INTERMEDIATE = 'Medelnivå',
  ADVANCED = 'Avancerad',
}

export interface ConfigLevel {
  color: string;
  aliases: (string | CourseLevel)[];
}
