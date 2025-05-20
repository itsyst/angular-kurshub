import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import { InputFormatDirective } from '../../directives/input-format.directive';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ChangePasswordComponent,
    InputFormatDirective,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  canSave = true;
}
