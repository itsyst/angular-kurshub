import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input('likesCount') likesCount!: number | 0;
  @Input('isActive') isActive!: boolean | false;


  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = ! this.isActive
  }
}
