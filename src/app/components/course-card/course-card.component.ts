import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Course, CourseLevel } from '../../types/course';
import { BadgeComponent } from '../badge/badge.component';
import { Category } from '../../types/category';

@Component({
  standalone: true,
  selector: 'app-course-card',
  imports: [CommonModule, RouterModule, BadgeComponent],
  templateUrl: './course-card.component.html',
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input() categories: Category[] = [];

  // This getter finds the category object.
  public get category(): Category | undefined {
    return this.categories.find((cat) => cat.id === this.course.categoryId);
  }

  public get courseLevel(): string  {
    if (!this.course.level) return '';

    // Convert enum to expected string
    switch (this.course.level) {
      case CourseLevel.BEGINNER:
        return 'beginner';
      case CourseLevel.INTERMEDIATE:
        return 'intermediate';
      case CourseLevel.ADVANCED:
        return 'advanced';
      default:
        return this.course.level || String(this.course.level).toLowerCase();
    }
  }
}
