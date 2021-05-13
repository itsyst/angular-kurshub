import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean = false;
  @Output() change:EventEmitter<Object> = new EventEmitter();


  changeColor() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }

  constructor(){}

  ngOnInit(): void {

  }
}


