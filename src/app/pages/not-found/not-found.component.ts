import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-not-found',
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-red-700">404 - Page Not Found</h1>
      <p class="mt-4 text-gray-700">The page you are looking for does not exist.</p>
    </div>
  `,
  styles: []
})
export class NotFoundComponent { }
