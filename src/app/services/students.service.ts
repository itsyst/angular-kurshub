import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Use observables for async simulation
import { students } from '../data/students'; // Import the enriched data
import { Student } from '../types/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor () { }

  // Gets all courses, returns an observable
  getStudents(): Observable<Student[]> {
    return of(students);
  }

  // Gets a single student by its ID, returns an observable
  getStudentById(id: string): Observable<Student | undefined> {
    const student = students.find((c) => c.id === id);
    return of(student);
  }
}
