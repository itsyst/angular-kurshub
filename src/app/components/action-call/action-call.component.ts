import { Component } from '@angular/core';
import { TitleCasePipe } from '../../pipes/title-case.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-action-call',
  imports: [TitleCasePipe, RouterModule],
  templateUrl: './action-call.component.html'
})
export class ActionCallComponent {

}
