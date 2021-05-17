import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
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
