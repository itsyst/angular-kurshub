import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
  @Input('title') title!: string;
  isExpanded: boolean = false;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

}
