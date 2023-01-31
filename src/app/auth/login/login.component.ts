import { Component,OnInit  } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
  private rememberMe = true;
  public signinObject: any;
  constructor(private router: Router, private authapiservice: AuthServiceService, private toastr: ToastrService,){}

  loginForm = new FormGroup({
    
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    
  })

  ngOnInit() {
    this.signinObject = {
      email: '',
      password: ''
    };
  }
  getControl(name:any): AbstractControl | null
  {
    return this.loginForm.get(name)
  }
  loginFn(){
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const body = {

        email:this.loginForm.get('email')?.value,
        password:this.loginForm.get('password')?.value

      };
      JSON.stringify(body);
      this.authapiservice.login(body).subscribe(
        (res: any) => {
          if(res.success){
            this.toastr.success('Login Successfully!!!');
             this.router.navigateByUrl('admin/dashboard')
          }
          else{
            this.toastr.error("Something went wrong, Please try again!");
          }
          // debugger;
        },
        (err: any) => {
          this.toastr.error(err?.error?.message ?? "Something went wrong, Please try again!");
          // debugger;
        }
      );
    }

  }
  checkboxChangeEvent(event:any) {
    this.rememberMe = event.target.checked;
  }
  signUp(){
    this.router.navigateByUrl('auth/signup')
  }
}
