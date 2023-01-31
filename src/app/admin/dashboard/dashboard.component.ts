import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  student: any;
  display: boolean = false;
  constructor(private router: Router) { }
  ngOnInit() {
    
    this.student = [
      { Name: "aman", rollno: "1", course: "bca", batch: "2019" },
      { Name: "priya", rollno: "2", course: "bca", batch: "2019" },
      { Name: "muskan", rollno: "3", course: "bca", batch: "2019" },
      { Name: "madhav", rollno: "4", course: "bca", batch: "2019" },
    ]
  
  }
  addstudent() {
    this.display = true;
}

handleFormSubmit(form: NgForm): void {
	// value will print the JavaScript Object of the Form Values.
	console.log(form.value);
   }
}
