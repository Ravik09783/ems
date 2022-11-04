import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { AuthGuardGuard } from './Authentication/guard/auth-guard.guard';
import { LoginComponent } from './authentication/login/login.component';
import { NotFoundComponent } from './authentication/not-found/not-found.component';
import { SignupComponent } from './authentication/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'dashboard', canActivate:[AuthGuardGuard], loadChildren:()=>import('./dashboard/dashboard.module').then((res)=>res.DashboardModule)},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
