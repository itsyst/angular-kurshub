import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
  // Signals for form data
  public formData = signal({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  public formSubmitted = signal(false);
  public submissionSuccess = signal(false);

  // Method to handle form submission
  onSubmit(): void {
    this.formSubmitted.set(true);
    // In a real application, you would send this data to a backend service.
    // For now, we'll simulate a submission success after a short delay.
    console.log('Form data:', this.formData());

    setTimeout(() => {
      this.submissionSuccess.set(true);
      // Optionally reset form
      this.formData.set({ name: '', email: '', subject: '', message: '' });
      this.formSubmitted.set(false); // Reset submission state
    }, 1500);
  }
}
