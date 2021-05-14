import { Component, Input } from '@angular/core';
import { Tweet } from './types/like';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'})
export class AppComponent {
  title = 'angular-fundamentals';
  courses: number[] = [1, 2];

  tweet: Tweet = {
    body: 'Here is the body of the tweet',
    isLiked: true,
    likesCount: 10
  }

  lessons = [
    { id: 1, name: "lesson1" },
    { id: 2, name: "lesson2" },
    { id: 3, name: "lesson3" }
  ];
}
