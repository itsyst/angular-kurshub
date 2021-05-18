import { Component} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  // Cleaner way to build the below implementation
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()

  //   }),
  //   topics: new FormArray([])
  // });
  form: FormGroup;
  constructor (fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control(['', Validators.required]),
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  addTopic(topic:HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }

  removeTopic(topic: AbstractControl): void {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }
}
