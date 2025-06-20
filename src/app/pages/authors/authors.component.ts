import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthorCardComponent } from '../../components/author-card/author-card.component';
import { AuthorService } from '../../services/authors.service';
import { Author } from '../../types/author';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, AuthorCardComponent, FormsModule],
  templateUrl: './authors.component.html',
})
export class AuthorsComponent {
  authors: Author[] = [];
  filteredAuthors: Author[] = [];
  searchTerm = '';

  constructor (private authorService: AuthorService) {
    const allAuthors = this.authorService.getAuthors();
    this.authors = allAuthors.filter(author => author.role === 'author');
    this.filteredAuthors = [...this.authors]; // Initialize with all authors
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filteredAuthors = [...this.authors];
      return;
    }

    this.filteredAuthors = this.authors.filter(author =>
      author.name.toLowerCase().includes(term) ||
      author.expertise.some(skill => skill.domain.toLowerCase().includes(term))
    );
  }
}
