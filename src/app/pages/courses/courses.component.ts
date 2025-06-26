import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

// Child Components
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { SelectComponent } from '../../components/select/select.component';

// Services and Types
import { CoursesService } from '../../services/courses.service';
import { CategoriesService } from '../../services/categories.service';
import { Course } from '../../types/course';
import { Category } from '../../types/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TitleCasePipe,
    CourseCardComponent,
    SelectComponent,
  ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  // --- 1. Services and Raw Data Signals ---
  private coursesService = inject(CoursesService);
  private categoriesService = inject(CategoriesService);
  private route = inject(ActivatedRoute);

  public allCourses = toSignal(this.coursesService.getCourses(), {
    initialValue: [] as Course[],
  });
  public allCategories = toSignal(this.categoriesService.getCategories(), {
    initialValue: [] as Category[],
  });

  // --- 2. State Management with Writable Signals  ---
  public searchTerm = signal('');
  public sortOption = signal('popular');
  public selectedLevel = signal<string | null>(null);
  public selectedRating = signal<number | null>(null);
  public selectedCategoryId = signal<number | null>(null);

  // --- 3. Static Data for Filters ---
  public readonly levels = ['Beginner', 'Intermediate', 'Advanced'];
  public readonly ratingOptions = [4, 3, 2, 1];
  public readonly sortOptions = [
    { value: 'popular', label: 'Popularitet' },
    { value: 'newest', label: 'Nyast' },
    { value: 'price-low', label: 'Pris (Lågt till Högt)' },
    { value: 'price-high', label: 'Pris (Högt till Lågt)' },
    { value: 'rating', label: 'Betyg' },
  ];

  // Constructor to react to query parameters on component initialization
  constructor () {
    this.route.queryParamMap.subscribe(params => {
      // Get the 'categoryId' from the URL, e.g., "?categoryId=1"
      const categoryIdStr = params.get('categoryId');


      if (categoryIdStr) {
        const categoryId = Number(categoryIdStr);
        if (!isNaN(categoryId)) {
          this.selectedCategoryId.set(categoryId);
        } else {
          this.selectedCategoryId.set(null); // Reset if invalid
        }
      } else {
        this.selectedCategoryId.set(null); // Reset if param is removed
      }
    });
  }

  // --- 4. Main Computed Signal for Filtering and Sorting (Corrected) ---
  public filteredAndSortedCourses = computed(() => {
    const courses = this.allCourses();
    const term = this.searchTerm().toLowerCase();
    const categoryId = this.selectedCategoryId(); // Use the ID here
    const selectedLevel = this.selectedLevel();
    const selectedRatingFilter = this.selectedRating();
    const sort = this.sortOption();

    const filtered = courses.filter((course) => {
      const searchMatch = term
        ? (course.title ?? '').toLowerCase().includes(term) ||
        (course.description ?? '').toLowerCase().includes(term)
        : true;
      const categoryMatch = categoryId ? course.categoryId === categoryId : true;
      const levelMatch = selectedLevel
        ? (course.level ?? '').toLowerCase() === selectedLevel.toLowerCase()
        : true;
      const ratingMatch = (() => {
        // If no rating filter is selected, all courses match this criterion.
        if (selectedRatingFilter === null) {
          return true;
        }
        // If a rating filter is selected, but the course itself has no rating, it doesn't match.
        if (course.rating === undefined || course.rating === null) {
          return false;
        }
        // Otherwise, compare the course's rating against the selected filter (X+).
        return (
          course.rating >= selectedRatingFilter &&
          course.rating < selectedRatingFilter + 1
        );
      })();
      return searchMatch && categoryMatch && levelMatch && ratingMatch;
    });

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case 'newest':
          // Using createdAt for 'newest' as it often represents creation date
          return (
            new Date(b.createdAt ?? '').getTime() - new Date(a.createdAt ?? '').getTime()
          );
        case 'price-low':
          // Prioritize discountPrice if available, otherwise regular price
          const priceA = a.discountPrice ?? a.price ?? 0;
          const priceB = b.discountPrice ?? b.price ?? 0;
          return priceA - priceB;
        case 'price-high':
          const priceAHigh = a.discountPrice ?? a.price ?? 0;
          const priceBHigh = b.discountPrice ?? b.price ?? 0;
          return priceBHigh - priceAHigh;
        case 'rating':
          return (b.rating ?? 0) - (a.rating ?? 0);
        case 'popular':
        default:
          return (b.totalReviews ?? 0) - (a.totalReviews ?? 0); // Popular is based on total reviews
      }
    });
  });

  // 5. Event Handlers (Corrected)
  // Method now accepts a number (the category ID)
  public toggleCategory(categoryId: number): void {
    this.selectedCategoryId.set(
      this.selectedCategoryId() === categoryId ? null : categoryId
    );
  }

  public toggleLevel(level: string): void {
    this.selectedLevel.set(this.selectedLevel() === level ? null : level);
  }

  public toggleRating(rating: number): void {
    this.selectedRating.set(this.selectedRating() === rating ? null : rating);
  }


  public clearAllFilters(): void {
    this.searchTerm.set('');
    this.selectedCategoryId.set(null); // Reset the ID
    this.selectedLevel.set(null);
    this.selectedRating.set(null);
    this.sortOption.set('popular');
  }

  public trackByCourse(index: number, course: Course): number | string {
    return index || course.id;
  }
}
