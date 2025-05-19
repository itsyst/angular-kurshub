export interface Course {
  id: number,
  title?: string;
  description?: string;
  rating?: number;
  level?: string;
  thumbnail?: string;
  totalReviews?: number;
  lessons?: number;
  duration?: string;
  students?: number;
  price?: number;
  discountPrice?: number;
  releaseDate?: Date;
  category?: string
}
