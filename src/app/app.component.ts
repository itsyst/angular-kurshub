import { Component } from '@angular/core';
import { Tweet } from './types/like';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'})
export class AppComponent {
  title = 'angular-fundamentals';
  courses: number[] = [1, 2];
  id: number = 1;

  tweet: Tweet = {
    body: 'Here is the body of the tweet',
    isLiked: true,
    likesCount: 10
  }

  lessons: {id:number, name:string}[] = [
    { id: this.id, name: `lesson ${this.id}` },
  ];

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
}
