export interface Course {
  createdAt: string | number | Date;
  id: number | string;
  title?: string;
  description?: string;
  category?: string;
  rating?: number;
  level?: string;
  lessons?: number;
  duration?: string;
  students?: number;
  price?: number;
  discountPrice?: number | null;
  releaseDate?: Date;
  totalReviews?: number;
  thumbnail?: string;
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
