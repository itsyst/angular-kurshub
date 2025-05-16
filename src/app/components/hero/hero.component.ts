import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../../types/category';
import { SearchIconComponent } from '../search-icon/search-icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchIconComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  categories: Category[] = [
    { id: 1, name: 'Webbutveckling', icon: '💻' },
    { id: 2, name: 'Datavetenskap', icon: '📊' },
    { id: 3, name: 'Design', icon: '🎨' },
    { id: 4, name: 'Marknadsföring', icon: '📈' },
    { id: 5, name: 'Affärer', icon: '💼' },
    { id: 6, name: 'Fotografering', icon: '📷' },
  ];
}
