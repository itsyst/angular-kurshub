import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SignupFormComponent],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

}
