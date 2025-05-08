import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  // form = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   contact: new FormGroup({
      //     email: new FormControl(),
      //     phone: new FormControl()

      //   }),
      //   topics: new FormArray([])
      // });
    // Cleaner way to build the above implementation
  form: FormGroup;
   constructor (private fb: FormBuilder) {
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
