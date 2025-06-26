import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full flex flex-col justify-between">
      <div>
        <div class="flex items-center text-yellow-500 mb-3">
          <ng-container *ngFor="let star of [1,2,3,4,5]">
            <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </ng-container>
        </div>
        <p class="text-gray-700 mb-4">"{{ testimonial }}"</p>
      </div>
      <div class="flex items-center mt-4">
        <img [src]="avatar" [alt]="name" class="h-10 w-10 rounded-full mr-3 object-cover" />
        <div>
          <h4 class="font-medium">{{ name }}</h4>
          <p class="text-xs text-gray-500">{{ role }}</p>
        </div>
      </div>
    </div>
  `
})
export class TestimonialCardComponent {
  @Input() testimonial!: string;
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() role!: string;
}
