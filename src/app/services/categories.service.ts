import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Use observables for async simulation
import { categories } from '../data/category';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  // Gets all categories, returns an observable
  getCategories(): Observable<Category[]> {
    return of(categories);
  }

  // Gets a single category by its ID, returns an observable
  getCategoryById(id: number): Observable<Category | undefined> {
    const category = categories.find((c) => c.id === id);
    return of(category);
  }
}
