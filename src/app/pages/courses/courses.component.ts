import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

import { CourseCardComponent } from '../../components/course-card/course-card.component';
import {
  SelectComponent,
  SelectOption,
} from '../../components/select/select.component';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../types/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Needed for [(ngModel)] with signals
    TitleCasePipe,
    CourseCardComponent,
    SelectComponent,
  ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  private coursesService = inject(CoursesService);

  public searchTerm = signal('');
  public selectedCategory = signal<string | null>(null);
  public selectedLevel = signal<string | null>(null);
  public selectedRating = signal<number | null>(null);
  public sortOption = signal('popular');
  public showMobileFilters = signal(false);

  public readonly sortOptions: SelectOption[] = [
    { value: 'popular', label: 'Populärast' },
    { value: 'newest', label: 'Nyaste' },
    { value: 'price-low', label: 'Pris: Lågt till högt' },
    { value: 'price-high', label: 'Pris: Högt till lågt' },
    { value: 'rating', label: 'Högst betyg' },
  ];
  public readonly levels: string[] = ['beginner', 'intermediate', 'advanced'];
  public readonly ratingOptions: number[] = [4.5, 4, 3.5, 3];


  // 1. Fetch all courses and convert the Observable to a read-only signal.
  private allCourses = toSignal(this.coursesService.getCourses(), {
    initialValue: [] as Course[],
  });

  // 2. Derive unique categories automatically when `allCourses` changes.
  public categories = computed(() =>
    Array.from(new Set(this.allCourses().map((course) => course.category)))
  );

  // 3. Create a single computed signal that filters and sorts the courses.
  //    It automatically re-runs whenever any dependent signal (e.g., searchTerm, sortOption) changes.
  public filteredAndSortedCourses = computed(() => {
    const courses = this.allCourses();
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();
    const level = this.selectedLevel();
    const rating = this.selectedRating();
    const sort = this.sortOption();

    const filtered = courses.filter((course) => {
      const searchMatch = term
        ? (course.title ?? '').toLowerCase().includes(term) ||
        (course.description ?? '').toLowerCase().includes(term)
        : true;
      const categoryMatch = category ? course.category === category : true;
      const levelMatch = level ? course.level === level : true;
      const ratingMatch = rating ? (course.rating ?? 0) >= rating : true;
      return searchMatch && categoryMatch && levelMatch && ratingMatch;
    });

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case 'newest':
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case 'price-low':
          return (
            (a.discountPrice ?? a.price ?? 0) -
            (b.discountPrice ?? b.price ?? 0)
          );
        case 'price-high':
          return (
            (b.discountPrice ?? b.price ?? 0) -
            (a.discountPrice ?? a.price ?? 0)
          );
        case 'rating':
          return (b.rating ?? 0) - (a.rating ?? 0);
        case 'popular':
        default:
          return (b.totalReviews ?? 0) - (a.totalReviews ?? 0);
      }
    });
  });

  toggleCategory(category: string): void {
    this.selectedCategory.update((current) =>
      current === category ? null : category
    );
  }

  toggleLevel(level: string): void {
    this.selectedLevel.update((current) => (current === level ? null : level));
  }

  toggleRating(rating: number): void {
    this.selectedRating.update((current) =>
      current === rating ? null : rating
    );
  }

  clearAllFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set(null);
    this.selectedLevel.set(null);
    this.selectedRating.set(null);
    this.sortOption.set('popular');
  }

  trackByCourse(index: number, course: Course): number | string {
    return index || course.id;
  }
}
