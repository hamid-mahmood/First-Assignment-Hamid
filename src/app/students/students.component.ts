import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  val : string = 'abc';
  ageVal: number = 1;
  students= [
    {name: "Name A", age: 12},
    {name: "Name B", age: 12},
    {name: "Name C", age: 12},
    {name: "Name D", age: 12},
    {name: "Name E", age: 12}
  ]
  constructor() { }

  ngOnInit() {
  }

  submit(event,name, age){
    //this.val = event.val;
    console.log(name);
    console.log(age);
    this.val = name;
    this.ageVal = age;

  }

}
