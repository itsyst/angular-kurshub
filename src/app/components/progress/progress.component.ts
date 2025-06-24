import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  template: `
    <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        class="bg-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
        [style.width.%]="value">
      </div>
    </div>
  `,
})
export class ProgressComponent {
  @Input() value = 0;
}
