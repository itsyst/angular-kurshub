import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signUp: FormGroup = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique
      ]) ,
      password: new FormControl('******', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  });

  // login() {
  //   let isValid = authService.login(this.signUp.value)
  //   if (!isValid) {
  //     this.signUp.setErrors({
  //        invalidLogin:true
  //      })
  //    }
  // }

  login() {
    this.signUp.setErrors({
      invalidLogin: true
    });
  }

  get username(){
    return this.signUp?.get('account.username');
  };

  get password(){
  return this.signUp.get('account.password');
  };
}
