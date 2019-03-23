import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { LandingComponent } from './components/main/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LandingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
