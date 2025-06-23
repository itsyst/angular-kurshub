import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
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

  private allCourses = toSignal(this.coursesService.getCourses(), {
    initialValue: [] as Course[],
  });

  public featuredCourses = computed(() =>
    this.allCourses().filter((course) => course.featured)
  );
}
