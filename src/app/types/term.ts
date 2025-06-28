export interface TermsSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: 'legal' | 'usage' | 'rights' | 'liability';
  content: string;
  keyPoints: string[];
  userResponsibilities?: string[];
  examples?: string[];
}
