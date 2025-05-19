import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturedCoursesComponent } from '../../components/featured-courses/featured-courses.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { LikeComponent } from '../../components/like/like.component';
import { PanelComponent } from '../../components/panel/panel.component';
import { StatusComponent } from '../../components/status/status.component';
import { ZippyComponent } from '../../components/zippy/zippy.component';
import { InputFormatDirective } from '../../directives/input-format.directive';
import { Task } from '../../types/task';
import { Tweet } from '../../types/tweet';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedCoursesComponent,
    LikeComponent,
    PanelComponent,
    StatusComponent,
    ZippyComponent,
    InputFormatDirective,
    CommonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
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
