import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignuppageComponent } from './auth/signuppage/signuppage.component';
import { EmailComponent } from './auth/email/email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'email-verif', component: EmailComponent },
  { path: 'sign-up', component: SignuppageComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPassComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
