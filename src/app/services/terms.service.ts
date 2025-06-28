import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Use observables for async simulation
import { terms } from '../data/terms';
import { TermsSection } from '../types/term';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  // Gets all terms, returns an observable
  getAllTerms(): Observable<TermsSection[]> {
    return of(terms);
  }

  // Gets a single term by its ID, returns an observable
  getTermsById(id: string): Observable<TermsSection | undefined> {
    const term = terms.find((c) => c.id === id);
    return of(term);
  }
}
