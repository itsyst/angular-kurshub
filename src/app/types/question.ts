export interface Question {
  id: number,
  answer: string,
  question: string
}

// Extends the base Question type with UI state
export interface FaqItem extends Question {
  isOpen: boolean;
}
