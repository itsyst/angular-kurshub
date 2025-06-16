export interface Course {
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
}
