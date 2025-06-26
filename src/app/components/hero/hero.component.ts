import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Category } from '../../types/category';
import { SearchIconComponent } from '../search-icon/search-icon.component';
import { Course } from '../../types/course';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SearchIconComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private courseService = inject(CoursesService);
  private router = inject(Router);

  public allCourses = toSignal(this.courseService.getCourses(), {
    initialValue: [] as Course[],
  });

  searchQuery: string = '';

  categories: Category[] = [
    { id: 1, name: 'Webbutveckling', icon: '💻' },
    { id: 2, name: 'Datavetenskap', icon: '📊' },
    { id: 3, name: 'Design', icon: '🎨' },
    { id: 4, name: 'Marknadsföring', icon: '📈' },
    // { id: 5, name: 'Affärer', icon: '💼' },
    // { id: 6, name: 'Fotografering', icon: '📷' },
  ];

  onSearch(): void {
    if (this.searchQuery.trim()) {
      // Only navigate if the search query is not empty or just whitespace
      this.router.navigate(['/courses'], { queryParams: { search: this.searchQuery.trim() } });
    }
  }
}
