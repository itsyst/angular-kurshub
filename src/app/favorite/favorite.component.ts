import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean = false;

  changeColor() {
    return this.isFavorite = !this.isFavorite;
  }


  ngOnInit(): void {

  }
}


