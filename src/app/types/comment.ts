export interface Comment {
  rating: number;
  id: number | string;
  courseId: number | string;
  userId: number | string;
  content: string;
  createdAt: Date;
}

export interface EnrichedComment extends Comment {
  authorName: string;
  authorAvatar?: string;
}
