import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleCasePipe } from '../../pipes/title-case.pipe';
import { AuthorCardComponent } from '../author-card/author-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { Author } from '../../types/author';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-top-instructor',
  imports: [CommonModule, TitleCasePipe, RouterModule, AuthorCardComponent],
  templateUrl: './top-instructor.component.html',
})
export class TopInstructorComponent {
  private authorsService = inject(AuthorsService);

  public searchTerm = signal('');

  private allAuthors = toSignal(this.authorsService.getAuthors(), {
    initialValue: [] as Author[],
  });

  public topInstructors = computed(() => {
    const authors = this.allAuthors().filter((author) => author.role === 'author' || !author.role);

    const sortedInstructors = authors.sort((a, b) => b.rating - a.rating);

    // Filter by name or expertise
    return sortedInstructors.slice(0, 4);
  });
}
