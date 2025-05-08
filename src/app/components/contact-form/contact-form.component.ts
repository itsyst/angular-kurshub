import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods:Array<{id:number, name:string}> = [
    { id:1, name: 'Email'},
    { id:2, name: 'Phone'}
  ];

  log(item: any) {
    console.log(item)
  }

  submit(form:any) {
    console.log(form.value)
  }
}
