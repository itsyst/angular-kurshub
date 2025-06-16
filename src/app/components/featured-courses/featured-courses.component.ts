import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../types/course';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './featured-courses.component.html',
})
export class FeaturedCoursesComponent {
  courses: Array<Course>;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  get featuredCourses() {
    return this.courses.filter((courses) => courses.featured);
  }
}
