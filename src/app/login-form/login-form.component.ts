import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.form = this.fb.group({
      name: ['',Validators.required],
      psw: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  submit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      console.log("Login successful");
      this.router.navigate(["/app-student-form"])
    
      
    }
  }

}
