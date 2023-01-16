import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  student: any;
  constructor(private router: Router) { }
  ngOnInit() {
    this.student = [
      { Name: "aman", rollno: "1", course: "bca", batch: "2019" },
      { Name: "priya", rollno: "2", course: "bca", batch: "2019" },
      { Name: "madhav", rollno: "3", course: "bca", batch: "2019" },
      { Name: "muskan", rollno: "4", course: "bca", batch: "2019" },
    ]
  
  }
}
