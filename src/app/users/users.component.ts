import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  students: Array<Student> = [
    { name: 'hamid', age: 12, isBlocked: true},
    { name: 'ali', age: 13, isBlocked: false},
    { name: 'akbar', age: 112, isBlocked: true},
    { name: 'junaid', age: 152, isBlocked: false}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewUserDetails(student: Student){
    this.router.navigate(['app-user-details',student]);
  }

}
