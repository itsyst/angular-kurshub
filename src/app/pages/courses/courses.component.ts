import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';

// Child Components
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { SelectComponent } from '../../components/select/select.component';

// Services and Types
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { CategoriesService } from '../../services/categories.service';
import { CoursesService } from '../../services/courses.service';
import { Category } from '../../types/category';
import { Course, CourseLevel } from '../../types/course';
import { FilterState, PaginationState, SortState } from '../../types/states';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TitleCasePipe,
    CourseCardComponent,
    SelectComponent,
    PaginationComponent
  ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  private readonly coursesService = inject(CoursesService);
  private readonly categoriesService = inject(CategoriesService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  // --- Data Signals ---
  public readonly allCourses = toSignal(this.coursesService.getCourses(), {
    initialValue: [] as Course[],
  });

  public readonly allCategories = toSignal(
    this.categoriesService.getCategories(),
    {
      initialValue: [] as Category[],
    }
  );

  // --- Filter State Signals ---
  public readonly sortOption = signal<string>('popular');
  public readonly selectedLevel = signal<CourseLevel | null>(null);
  public readonly selectedRating = signal<number | null>(null);
  public readonly selectedCategoryId = signal<number | null>(null);
  public readonly searchTerm = signal<string>('');
  // Pagination state
  readonly currentPage = signal<number>(1);
  readonly pageSize = signal<number>(6);

  // --- 4. Query Parameters Signal ---
  private readonly queryParams = toSignal(
    this.route.queryParamMap.pipe(
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ),
    { initialValue: null }
  );

  // --- Static Configuration ---
  public readonly levels: readonly CourseLevel[] = [
    CourseLevel.BEGINNER.toLowerCase() as CourseLevel,
    CourseLevel.INTERMEDIATE.toLowerCase() as CourseLevel,
    CourseLevel.ADVANCED.toLowerCase() as CourseLevel,
  ] as const;
  public readonly ratingOptions: readonly number[] = [4, 3, 2, 1] as const;
  public readonly _sortOptions: readonly SortState[] = [
    { value: 'popular', label: 'Popularitet' },
    { value: 'newest', label: 'Nyast' },
    { value: 'price-low', label: 'Pris (Lågt till Högt)' },
    { value: 'price-high', label: 'Pris (Högt till Lågt)' },
    { value: 'rating', label: 'Betyg' },
  ] as const;

  // Getter that returns a mutable array for the template
  public get sortOptions() {
    return [...this._sortOptions];
  }

  // --- Constructor with Effects ---
  constructor () {
    // Effect to handle query parameter changes (read from URL)
    effect(() => {
      const params = this.queryParams();
      if (!params) return;

      // Handle categoryId parameter
      const categoryIdStr = params.get('categoryId');
      const categoryId = this.parseToNumberOrNull(categoryIdStr);
      this.selectedCategoryId.set(categoryId);

      // Handle level parameter
      const level = params.get('level');
      this.selectedLevel.set(level as CourseLevel | null);

      // Handle rating parameter
      const ratingStr = params.get('rating');
      const rating = this.parseToNumberOrNull(ratingStr);
      this.selectedRating.set(rating);

      // Handle search parameter
      const searchQuery = params.get('search');
      if (searchQuery) {
        // Check if search query is a number (might be a category ID)
        const searchAsNumber = this.parseToNumberOrNull(searchQuery);
        if (searchAsNumber !== null) {
          this.selectedCategoryId.set(searchAsNumber);
          this.searchTerm.set('');
        } else {
          this.searchTerm.set(searchQuery);
        }
      } else {
        this.searchTerm.set('');
      }

      // Handle sort parameter
      const sort = params.get('sort');
      if (sort && this.sortOptions.some((option) => option.value === sort)) {
        this.sortOption.set(sort);
      }
    });

    // Effect to update URL when filters change (write to URL)
    effect(() => {
      const queryParams: { [key: string]: string | null } = {};

      // Add non-null parameters to query params
      const categoryId = this.selectedCategoryId();
      if (categoryId !== null) {
        queryParams['categoryId'] = categoryId.toString();
      }

      const level = this.selectedLevel();
      if (level !== null) {
        queryParams['level'] = level;
      }

      const rating = this.selectedRating();
      if (rating !== null) {
        queryParams['rating'] = rating.toString();
      }

      const search = this.searchTerm();
      if (search.trim()) {
        queryParams['search'] = search.trim();
      }

      const sort = this.sortOption();
      if (sort !== 'popular') {
        // Only add if not default
        queryParams['sort'] = sort;
      }

      // Update URL without navigation
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'replace',
        replaceUrl: true,
      });
    });

    // Reset to first page when filters change
    effect(() => {
      // Watch filter changes
      this.searchTerm();
      this.selectedCategoryId();
      this.selectedLevel();
      this.selectedRating();
      this.sortOption();

      // Reset to first page
      this.currentPage.set(1);
    });
  }

  // --- Main Computed Signal for Filtering and Sorting ---
  public readonly filteredAndSortedCourses = computed(() => {
    const courses = this.allCourses();
    const categories = this.allCategories();
    const filters = this.getFilterState();

    const filtered = this.filterCourses(courses, categories, filters);
    return this.sortCourses(filtered, filters.sortOption);
  });

  // --- Public Event Handlers ---
  public toggleCategory(categoryId: number | null): void {
    if (categoryId === null) {
      this.selectedCategoryId.set(null);
    } else {
      const current = this.selectedCategoryId();
      this.selectedCategoryId.set(current === categoryId ? null : categoryId);
    }
  }

  public toggleLevel(level: string | null): void {
    if (level === null) {
      this.selectedLevel.set(null);
    } else {
      const current = this.selectedLevel();
      this.selectedLevel.set(current === level ? null : (level as CourseLevel));
    }
  }

  public toggleRating(rating: number | null): void {
    if (rating === null) {
      this.selectedRating.set(null);
    } else {
      const current = this.selectedRating();
      this.selectedRating.set(current === rating ? null : rating);
    }
  }

  public clearAllFilters(): void {
    this.searchTerm.set('');
    this.selectedCategoryId.set(null);
    this.selectedLevel.set(null);
    this.selectedRating.set(null);
    this.sortOption.set('popular');

    // Clear URL parameters
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      replaceUrl: true,
    });
  }

  public trackByCourse(index: number, course: Course): number | string {
    return course.id ?? index;
  }

  // --- 9. Private Helper Methods ---
  private getFilterState(): FilterState {
    return {
      sortOption: this.sortOption(),
      selectedLevel: this.selectedLevel(),
      selectedRating: this.selectedRating(),
      selectedCategoryId: this.selectedCategoryId(),
      searchTerm: this.searchTerm().toLowerCase(),
    };
  }

  private filterCourses(
    courses: Course[],
    categories: Category[],
    filters: FilterState
  ): Course[] {
    return courses.filter((course) => {
      return (
        this.matchesSearch(course, categories, filters.searchTerm) &&
        this.matchesCategory(course, filters.selectedCategoryId) &&
        this.matchesLevel(course, filters.selectedLevel) &&
        this.matchesRating(course, filters.selectedRating)
      );
    });
  }

  private matchesSearch(
    course: Course,
    categories: Category[],
    searchTerm: string
  ): boolean {
    if (!searchTerm) return true;

    const categoryName = this.getCategoryName(course, categories).toLowerCase();
    const title = (course.title ?? '').toLowerCase();
    const description = (course.description ?? '').toLowerCase();

    return (
      title.includes(searchTerm) ||
      description.includes(searchTerm) ||
      categoryName.includes(searchTerm)
    );
  }

  private matchesCategory(course: Course, categoryId: number | null): boolean {
    return categoryId === null || course.categoryId === categoryId;
  }

  private matchesLevel(course: Course, level: string | null): boolean {
    return (
      level === null ||
      (course.level ?? '').toLowerCase() === level.toLowerCase()
    );
  }

  private matchesRating(course: Course, ratingFilter: number | null): boolean {
    if (ratingFilter === null) return true;
    if (course.rating == null) return false;

    return course.rating >= ratingFilter && course.rating < ratingFilter + 1;
  }

  private getCategoryName(course: Course, categories: Category[]): string {
    const category = categories.find((c) => c.id === course.categoryId);
    return category?.name ?? '';
  }

  private sortCourses(courses: Course[], sortOption: string): Course[] {
    return [...courses].sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return this.compareByDate(b.createdAt, a.createdAt);

        case 'price-low':
          return this.compareByPrice(a, b);

        case 'price-high':
          return this.compareByPrice(b, a);

        case 'rating':
          return (b.rating ?? 0) - (a.rating ?? 0);

        case 'popular':
        default:
          return (b.totalReviews ?? 0) - (a.totalReviews ?? 0);
      }
    });
  }

  private compareByDate(
    dateA: string | number | Date | undefined,
    dateB: string | number | Date | undefined
  ): number {
    const timeA = dateA ? new Date(dateA).getTime() : 0;
    const timeB = dateB ? new Date(dateB).getTime() : 0;
    return timeA - timeB;
  }

  private compareByPrice(courseA: Course, courseB: Course): number {
    const priceA = courseA.discountPrice ?? courseA.price ?? 0;
    const priceB = courseB.discountPrice ?? courseB.price ?? 0;
    return priceA - priceB;
  }

  private parseToNumberOrNull(value: string | null): number | null {
    if (!value) return null;
    const parsed = Number(value);
    return isNaN(parsed) ? null : parsed;
  }


  // Paginated courses - detta är vad som faktiskt visas
  readonly paginatedCourses = computed(() => {
    const courses = this.filteredAndSortedCourses();
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return courses.slice(start, end);
  });

  // Pagination event handlers
  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.scrollToTop();
  }

  onPageSizeChange(newSize: number): void {
    this.pageSize.set(newSize);
    this.currentPage.set(1); // Reset to first page
  }

  onPaginationStateChange(state: PaginationState): void {
    this.currentPage.set(state.currentPage);
    this.pageSize.set(state.pageSize);
    this.scrollToTop();
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
