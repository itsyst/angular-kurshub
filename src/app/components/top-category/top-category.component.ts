import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { TitleCasePipe } from '../../pipes/title-case.pipe';
import { CategoriesService } from '../../services/categories.service';
import { CoursesService } from '../../services/courses.service';
import { Category } from '../../types/category';
import { Course } from '../../types/course';

@Component({
  selector: 'app-top-category',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, RouterModule],
  templateUrl: './top-category.component.html',
})
export class TopCategoryComponent {
  private categoryService = inject(CategoriesService);
  private coursesService = inject(CoursesService);

  public allCategories = toSignal(this.categoryService.getCategories(), {
    initialValue: [] as Category[],
  });

  public allCourses = toSignal(this.coursesService.getCourses(), {
    initialValue: [] as Course[],
  });

  // Compute categories with course counts
  public categoriesWithCounts = computed(() => {
    const categories = this.allCategories();
    const courses = this.allCourses();

    // Build a map: categoryId -> count
    const countsMap = new Map<number, number>();
    for (const category of categories) {
      countsMap.set(category.id, 0);
    }
    for (const course of courses) {
      if (course.categoryId && countsMap.has(course.categoryId)) {
        countsMap.set(
          course.categoryId,
          (countsMap.get(course.categoryId) ?? 0) + 1
        );
      }
    }

    // Return categories enriched with count
    return categories.map((cat) => ({
      ...cat,
      count: countsMap.get(cat.id) ?? 0,
    })).slice(0, 6);
  });
}
