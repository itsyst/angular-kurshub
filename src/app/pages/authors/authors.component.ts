import { authors } from './../../data/authors';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthorCardComponent } from '../../components/author-card/author-card.component';
import { AuthorService } from '../../services/authors.service';
import { Author } from '../../types/author';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, AuthorCardComponent, FormsModule, RouterModule],
  templateUrl: './authors.component.html',
})
export class AuthorsComponent {
  private authorService = inject(AuthorService);

  public searchTerm = signal('');

  private allAuthors = signal<Author[]>(this.authorService.getAuthors());

  public filteredAuthors = computed(() => {
    const authors = this.allAuthors().filter((author) => author.role === 'author' || !author.role);
    const term = this.searchTerm().toLowerCase().trim();

    if (!term) {
      return authors; // If no search term, return the full list
    }

    // Filter by name or expertise
    return authors.filter(
      (author) =>
        author.name.toLowerCase().includes(term) ||
        author.expertise.some((skill) =>
          skill.domain.toLowerCase().includes(term)
        )
    );
  });
}
