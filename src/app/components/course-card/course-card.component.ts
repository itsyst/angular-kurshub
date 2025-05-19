import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Course } from '../../types/course';

@Component({
  standalone: true,
  selector: 'app-course-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: Course;

  // Function to determine text color based on category
  getTextColorClass(category: string): string {
    if (category === 'Webbutveckling' || category === 'AI') {
      return 'text-indigo-900';
    } else if (category === 'Programmering' || category === 'Dataanalys') {
      return 'text-indigo-600';
    }
    return 'text-gray-600';
  }

  // Translate course level to Swedish
  translateLevel(level: string): string {
    switch (level) {
      case 'beginner': return 'Nybörjare';
      case 'intermediate': return 'Medel';
      case 'advanced': return 'Avancerad';
      default: return level;
    }
  }
}
