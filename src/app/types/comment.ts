export interface Comment {
  id: number | string;
  courseId: number | string;
  userId: number | string;
  content: string;
  createdAt: Date;
}

export interface EnrichedComment extends Comment {
  userName: string;
  userAvatar?: string;
}
