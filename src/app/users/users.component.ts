import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  name: string;
  job: string;
  users: Array<User> = [];
  students: Array<Student> = [
    { name: 'hamid', age: 12, isBlocked: true},
    { name: 'ali', age: 13, isBlocked: false},
    { name: 'akbar', age: 112, isBlocked: true},
    { name: 'junaid', age: 152, isBlocked: false}
  ];

  constructor(
    private router: Router,
    private userSerice: UserService,
    private httpClient: HttpClient
    ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  viewUserDetails(student: Student){
    this.router.navigate(['app-user-details',student]);
  }

  getAllUsers(){
    this.userSerice.getUsers().subscribe((res: any) =>{
      console.log(res);
      console.log("Calling HTTP Service from users component");
      this.users = res.data;
      console.log(this.users);
  })

  
  }

  addUser(name,job){
    const body = {name, job};
    this.httpClient.post('https://reqres.in/api/users', body).subscribe(res =>{
      console.log(res);
    })
  }

}
