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
}
