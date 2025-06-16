import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html'
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() name: string = '';
  @Input() @HostBinding('class') className: string = 'h-10 w-10';

  // Method to generate initials
  getInitials(): string {
    return this.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
