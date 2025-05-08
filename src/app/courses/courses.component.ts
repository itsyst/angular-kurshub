import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from '../favorite/favorite.component';
import { TitleCasePipe } from '../pipes/title-case.pipe';
import { Course } from '../types/course';
import { FavoriteChangedEventArgs } from '../types/event';
import { CoursesService } from './courses.service';
import { SummaryPipe } from '../pipes/summary.pipe';

@Component({
  selector: 'courses',
  standalone: true,
  imports: [CommonModule, FormsModule, FavoriteComponent, SummaryPipe, TitleCasePipe],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  title: string = 'List of courses';
  courses: Array<Course>;
  text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium, magnam autem, impedit eaque non doloremque necessitatibus quisquam, vel debitis pariatur. Repellendus, fugiat! Suscipit minima incidunt hic reprehenderit ad at, assumenda velit. Beatae id nulla eaque temporibus ipsa. Enim aspernatur doloremque quisquam consectetur reiciendis vero cum neque necessitatibus assumenda a?';
  inputText!: string;

  post: { title: string; isFavorite: boolean } = {
    title: 'Title',
    isFavorite: true,
  };

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp() {
    console.log(this.inputText);
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed:', eventArgs);
  }

  submit(form: any) {
    console.log(form);
  }

  ngOnInit(): void {}
}
