import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor (private router: Router) { }

  onSubmit(event: Event): void {
    event.preventDefault();

    // Simulating successful login
    this.showToast('Login successful', 'You are now logged in to your account.');

    // Would normally redirect to dashboard or homepage
    // this.router.navigate(['/dashboard']);
  }

  onGoogleLogin(): void {
    // Implement Google login logic
    console.log('Google login clicked');
  }

  onFacebookLogin(): void {
    // Implement Facebook login logic
    console.log('Facebook login clicked');
  }

  private showToast(title: string, description: string): void {
    // Simple toast implementation - you might want to use a proper toast service
    alert(`${title}: ${description}`);
  }
}
