import { Component } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { UsernameValidators } from '../../common/validators/username.validators';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signUp: FormGroup = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace,
          UsernameValidators.shouldBeUnique
        ],
        nonNullable: true
      }),
      password: new FormControl('******', {
        validators: [
          Validators.required,
          Validators.minLength(6)
        ],
        nonNullable: true
      })
    })
  });

  login() {
    this.signUp.setErrors({
      invalidLogin: true
    });
  }

  get username(): AbstractControl | null {
    return this.signUp.get('account.username');
  }

  get password(): AbstractControl | null {
    return this.signUp.get('account.password');
  }
}
