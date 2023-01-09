import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {InputTextModule} from 'primeng/inputtext';

import {PasswordModule} from 'primeng/password';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule
  ],
  exports:[
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }
