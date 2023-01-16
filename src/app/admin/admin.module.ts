import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';





@NgModule({
  declarations: [
    DashboardComponent,
  
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    TableModule,
    DialogModule
  ],
  exports: [RouterModule]
})
export class AdminModule { }
