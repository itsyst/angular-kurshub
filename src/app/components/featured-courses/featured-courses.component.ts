import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CoursesService } from '../../services/courses.service';
import { Category } from '../../types/category';
import { Course } from '../../types/course';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, RouterModule],
  templateUrl: './featured-courses.component.html',
})
export class FeaturedCoursesComponent {
  private coursesService = inject(CoursesService);
  private categoriesService = inject(CategoriesService);

  private allCourses = toSignal(this.coursesService.getCourses(), {
    initialValue: [] as Course[],
  });

  public allCategories = toSignal(this.categoriesService.getCategories(), {
    initialValue: [] as Category[],
  });

  public featuredCourses = computed(() =>
    this.allCourses().filter((course) => course.featured)
  );
}
