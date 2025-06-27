import { CourseLevel } from "./course";

export interface SortState {
  readonly value: string;
  readonly label: string;
}

export interface SelectState {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface FilterState {
  sortOption: string;
  selectedLevel: CourseLevel | null;
  selectedRating: number | null;
  selectedCategoryId: number | null;
  searchTerm: string;
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}
