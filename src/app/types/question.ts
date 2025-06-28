export interface Question {
  id: number;
  question: string;
  answer: string;
  categoryId: number;
  order?: number;
  tags?: string[];
  isPopular?: boolean;
  lastUpdated?: Date;
}

export interface FaqItem extends Question {
  isOpen: boolean;
}

export interface FaqCategory {
  id: number;
  name: string;
  description?: string;
  order?: number;
  icon?: string;
}
