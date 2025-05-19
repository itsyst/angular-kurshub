import { Component } from '@angular/core';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
