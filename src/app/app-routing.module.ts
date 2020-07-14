import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { UsersComponent } from './users/users.component';
import { combineLatest } from 'rxjs';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  { 
    path:'app-start-page', component: StartPageComponent
  },
  { 
    path:'app-login-form', component: LoginFormComponent
  },
  { 
    path:'app-student-form', component: StudentFormComponent
  },
  {
    path:'app-users', component: UsersComponent
  },
  {
    path:'app-user-details', component: UserDetailsComponent
  },
  { 
    path:'', redirectTo:'app-start-page', pathMatch:'full' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
