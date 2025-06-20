import { Injectable } from '@angular/core';
import { Author } from '../types/author';
import { authors } from './../data/authors';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  authors: Array<Author> = authors;

  getAuthors() {
    return this.authors;
  }

  findAuthorById(id: string): Author | null {
    const foundAuthor = this.authors.find((author) => author.id === id);
    return foundAuthor || null;
  }
}
