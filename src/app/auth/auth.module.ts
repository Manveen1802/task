import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth-routing.module';
// import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RouterModule.forChild(AuthRoutes),
   
   
  ],
  exports: [RouterModule]
})
export class AuthModule { }
