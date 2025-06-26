import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Course } from '../../types/course';
import { Category } from '../../types/category';
import { BadgeComponent } from '../badge/badge.component';

// Define the specific type for a valid course level
type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

// A "Type Guard" function to check if a string is a valid CourseLevel
function isCourseLevel(value: any): value is CourseLevel {
  return ['beginner', 'intermediate', 'advanced'].includes(value);
}

@Component({
  standalone: true,
  selector: 'app-course-card',
  imports: [CommonModule, RouterModule, BadgeComponent],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input() categories: Category[] = [];

  // This getter finds the category object, which was already correct.
  public get category(): Category | undefined {
    return this.categories.find(cat => cat.id === this.course.categoryId);
  }

  // This getter acts as the "bridge" between the string and the specific CourseLevel type.
  public get courseLevel(): CourseLevel | null {
    if (isCourseLevel(this.course.level)) {
      // If the string is 'beginner', 'intermediate', or 'advanced', return it.
      return this.course.level;
    }
    return null;
  }
}
