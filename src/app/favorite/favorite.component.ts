import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {

  isFavorite: boolean = false;

  changeColor() {
    return this.isFavorite = !this.isFavorite;
  }
  
  ngOnInit(): void {

  }
}


