import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm, Validators, FormControl, FormGroup, NgModel, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  implements OnInit{
  integerRegex = /^\d+$/;
  mobileRegex = /^[7-9][0-9]{0,10}$/;
  emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  yearRegex = /^\d{4}$/
  public otp: any;
  public signUpInfo: any;
  private modalInstanceOtp: any;
  @ViewChild("otpModal") otpModal:any;
  otpString: any;
  
  constructor(
    private http: HttpClient,
    private authapiservice: AuthServiceService, 
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal
   
  ) {}

  ngOnInit() {
    this.signUpInfo = {
      name: '',
      mobileno: '',
      email: '',
      batchno: '',
    };
    this.otp = {
      first: '',
      second: '',
      third: '',
      fourth: ''
    }
  }

  ngAfterViewInit(): void {

  }


  signupForm = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(32),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(32),
        Validators.pattern(this.emailRegex),
      ]),
      mobile_number: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(this.mobileRegex),
      ]),
      batch_number: new FormControl('',[
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        // Validators.pattern(this.yearRegex),
      ]),
      // password: new FormControl('', [
      //   Validators.required,
      //   Validators.maxLength(32),
      //   Validators.minLength(8),
      // ]),
      // cPassword: new FormControl('', [
      //   Validators.required,
      //   Validators.maxLength(32),
      //   Validators.minLength(8),
      // ]),
    },
    // [passwordMatch('password', 'cPassword')]
  );

  getControl(name: any): AbstractControl | null {
    return this.signupForm.get(name);
  }

 
   
  signupFn() {
    console.log(this.signupForm.value);
    
    if (this.signupForm.valid) {
      const body = {
        name: this.signupForm.get('name')?.value,
        email:this.signupForm.get('email')?.value,
        mobile_number:"+91" + this.signupForm.get('mobile_number')?.value,
        batch_number: this.signupForm.get('batch_number')?.value
        // name: this.signupForm.get('name')?.value,
        // mobile_number: '9849978896',
        // batch_number: '2010',
        // email:this.signupForm.get('email')?.value,
      };
    
      this.authapiservice.signUp(body).subscribe((res: any) => {
          if(res.success){
          
           this.openOtpModal();

           
          }
          else{
            this.toastr.error("Something went wrong, Please try again!");

          }
         
        },
        (err: any) => {
          this.toastr.error(err?.error?.message ?? "Something went wrong, Please try again!");
         
        });
    }
    else{
      this.toastr.error("Please fill valid information.")
    }
  }
 
  signup(){
    this.router.navigateByUrl('auth/login');
   }
   openOtpModal() {
    this.modalInstanceOtp = this.modalService.open(this.otpModal, { size: 'sm', windowClass: 'modalHeight' });
   
  }
  openVerifyModal() {
    this.otpString = parseInt(this.otp.first + this.otp.second + this.otp.third + this.otp.fourth);
  
  }
   checkOTPLength() {
    let otpString = this.otp.first + this.otp.second + this.otp.third + this.otp.fourth;
    if (otpString.length == 4)
      return false;
    else
      return true;
  }
  
} 
  
 
