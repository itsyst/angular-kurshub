import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { InputFormatDirective } from '../../directives/input-format.directive';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ContactFormComponent,
    ChangePasswordComponent,
    InputFormatDirective,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  canSave = true;
}
