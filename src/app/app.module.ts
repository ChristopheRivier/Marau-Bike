import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from "@angular/material/icon"
import { MatMenuModule } from "@angular/material/menu"
import { MatButtonModule } from "@angular/material/button"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignuppageComponent } from './auth/signuppage/signuppage.component';
import { EmailComponent } from './auth/email/email.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firebaseConfig } from 'src/environments/env_firebase';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignuppageComponent,
    EmailComponent,
    SignInComponent,
    DashboardComponent,
    ForgotPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
