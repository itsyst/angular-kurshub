import { Component } from '@angular/core';
import { Tweet } from './types/like';
import { Task } from './types/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'})
export class AppComponent {
  title = 'angular-fundamentals';
  courses: number[] = [1, 2];
  id: number = 1;
  canSave: boolean = true;

  tweet: Tweet = {
    body: 'Here is the body of the tweet',
    isLiked: true,
    likesCount: 10
  }

  lessons: {id:number, name:string}[] = [
    { id: this.id, name: `lesson ${this.id}` },
  ];

  exercises: { id: number; name: string; }[] = [];

  task: Task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }


  onAdd() {
    this.id += 1;
    this.lessons.push({ id: this.id, name: `lesson ${this.id}` });
  }

  onRemove(lesson: { id: number, name: string }) {
    let index = this.lessons.indexOf(lesson);
    this.lessons.splice(index, 1);
  }

  onChange(lesson: { id: number, name: string }) {
    lesson.name = `lesson ${lesson.id} UPDATED `
  }

  loadExercises() {
      this.exercises = [
       {id:1, name: "exercise-1"},
       {id:2, name: "exercise-2"},
       {id:3, name: "exercise-3"},
       {id:4, name: "exercise-4"}
    ];
  }

  trackExercise(index: number, exercise: {id:number, name: string}) {
    return exercise ? exercise.id : undefined;
  }
}
