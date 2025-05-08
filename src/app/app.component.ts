import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorsComponent } from './components/authors/authors.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { LikeComponent } from './components/like/like.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { Tweet } from './types/like';
import { Task } from './types/task';
import { ZippyComponent } from './components/zippy/zippy.component';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AuthorsComponent,
    CommonModule,
    CoursesComponent,
    RouterOutlet,
    ContactFormComponent,
    ChangePasswordComponent,
    LikeComponent,
    NewCourseFormComponent,
    PanelComponent,
    SignupFormComponent,
    ZippyComponent,
    InputFormatDirective,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-pipes-forms';
  courses: number[] = [1, 2];
  id = 1;
  canSave = true;

  tweet: Tweet = {
    body: 'Here is the body of the tweet',
    isLiked: true,
    likesCount: 10,
  };

  lessons: { id: number; name: string }[] = [
    { id: this.id, name: `lesson ${this.id}` },
  ];

  exercises: { id: number; name: string }[] = [];

  task: Task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith',
    },
  };

  onAdd(): void {
    this.id += 1;
    this.lessons.push({ id: this.id, name: `lesson ${this.id}` });
  }

  onRemove(lesson: { id: number; name: string }): void {
    const index = this.lessons.indexOf(lesson);
    this.lessons.splice(index, 1);
  }

  onChange(lesson: { id: number; name: string }) {
    lesson.name = `lesson ${lesson.id} UPDATED `;
  }

  loadExercises() {
    this.exercises = [
      { id: 1, name: 'exercise-1' },
      { id: 2, name: 'exercise-2' },
      { id: 3, name: 'exercise-3' },
      { id: 4, name: 'exercise-4' },
    ];
  }

  trackExercise(index: number, exercise: { id: number; name: string }) {
    return exercise ? exercise.id : undefined;
  }
}
