import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'authors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authors.component.html',
})
export class AuthorsComponent implements OnInit {
  authors: string[];
  imageUrl =
    'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY';
  colSpan = 2;
  isActive = true;
  email!: string;

  onDivClick() {
    console.log('Div bubbling!');
  }
  onSave($event: MouseEvent) {
    $event.stopPropagation();
    console.log('Button was clicked!', $event.target);
  }

  onKeyUp() {
    console.log(this.email);
  }

  constructor (service: AuthorsService) {
    this.authors = service.getAuthors();
  }
  ngOnInit(): void { }
}
