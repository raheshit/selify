import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {SigninComponent} from  './components/auth/signin/signin.component';
import  {SignupComponent} from "./components/auth/signup/signup.component";

import {from} from "rxjs";
const routes: Routes = [
  {
    path:'auth/signin',
    component:SigninComponent
  },
  {
    path:'auth/signup',
    component:SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
