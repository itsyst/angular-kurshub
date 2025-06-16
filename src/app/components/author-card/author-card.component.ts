import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [RouterModule, CommonModule, AvatarComponent],
  templateUrl: './author-card.component.html',
})
export class AuthorCardComponent {
  @Input() author!: {
    id: string;
    name: string;
    avatar?: string;
    bio?: string | undefined;
    expertise: string[];
    rating: number;
    courses: string[];
    email: string;
    role: string;
  };
}
