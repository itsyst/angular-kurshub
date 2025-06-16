export interface Comment {
  id: number | string;
  courseId: number | string;
  userId: number | string;
  content: string;
  createdAt: Date;
}
