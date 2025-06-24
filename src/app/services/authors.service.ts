import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'; // Use observables for async simulation
import { Author } from '../types/author';
import { authors } from '../data/authors';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor () { }

  // Gets all authors, returns an observable
  getAuthors(): Observable<Author[]> {
    return of(authors);
  }

  // Gets a single author by its ID, returns an observable
  getAuthorById(id: string): Observable<Author | undefined> {
    const author = authors.find((a) => a.id === id);
    return of(author);
  }
}
