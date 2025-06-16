import { Injectable } from '@angular/core';
import { Course } from '../types/course';
import { courses } from './../data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Array<Course> = courses;

  getCourses() {
    return this.courses;
  }
}
