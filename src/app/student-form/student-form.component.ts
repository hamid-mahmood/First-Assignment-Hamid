import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  form: FormGroup;
  student: Student;
  students: Array<Student> = [];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['Student 1',Validators.required],
      age: [null,Validators.compose([
        Validators.required,
        Validators.min(10)
      ])
    ],
      isBlocked: [true]
    });

   }

  ngOnInit() {
  }

  submit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      console.log(this.form.value);
      console.log(this.form.get('name').value);
      this.student=this.form.getRawValue();
      console.log(this.student);
      this.students.push(this.student);
      
    }
  }

}
