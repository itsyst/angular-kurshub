import { Injectable } from '@angular/core';
import { courses } from '../data/courses'; // Import the enriched data
import { Course } from '../types/course';
import { of, Observable } from 'rxjs'; // Use observables for async simulation

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor () { }

  // Gets all courses, returns an observable
  getCourses(): Observable<Course[]> {
    return of(courses);
  }

  // Gets a single course by its ID, returns an observable
  getCourseById(id: number): Observable<Course | undefined> {
    const course = courses.find((c) => c.id === id);
    return of(course);
  }
}
