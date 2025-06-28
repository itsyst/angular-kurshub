import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../components/icon/icon.component';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
  // Signals for form data and state
  public formData = signal<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  public formSubmitted = signal(false);
  public submissionSuccess = signal(false);

  // Form validation
  private isFormValid(): boolean {
    const data = this.formData();
    return !!(
      data.name.trim() &&
      data.email.trim() &&
      data.subject.trim() &&
      data.message.trim() &&
      data.message.length >= 10 &&
      this.isValidEmail(data.email)
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Method to handle form submission
  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.formSubmitted.set(true);
    console.log('Form data:', this.formData());

    // Simulate API call
    setTimeout(() => {
      this.submissionSuccess.set(true);

      // Reset form after success
      setTimeout(() => {
        this.formData.set({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        this.formSubmitted.set(false);
        this.submissionSuccess.set(false);
      }, 3000);
    }, 1500);
  }
}
