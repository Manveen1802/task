import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  login:any;
  constructor(private router: Router,){}

  ngOnInit() {
    this.login = {
      email:'',
      password:'',
    }
   }
   submit(){
      this.router.navigate(['/dashboard']);
   }
}
