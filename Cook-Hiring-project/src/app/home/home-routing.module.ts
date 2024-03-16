import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { ContactComponent } from '../auth/components/contact/contact.component';
import { SignupComponent } from '../auth/components/signup/signup.component';
import { EmployesignupComponent } from '../auth/employesignup/employesignup.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
   {path : "login" , component : LoginComponent},
  {path : "contact" , component : ContactComponent},
  {path : "signup" , component : SignupComponent},
  {path : "employesignup" , component :EmployesignupComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
