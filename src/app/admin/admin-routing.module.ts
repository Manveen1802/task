import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


export const AdminRoutes: Routes = [{

  path: '',
  redirectTo: 'login',
  pathMatch: 'full'

},
{
  path: 'dashboard',
  component: DashboardComponent
}];



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AdminRoutingModule { }
