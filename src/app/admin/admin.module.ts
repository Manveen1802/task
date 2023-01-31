import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {AnimateModule} from 'primeng/animate';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    DashboardComponent,
  
  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    TableModule,
    DialogModule,
    AnimateModule,
    InputTextModule,
    DropdownModule,
    FormsModule

  ],
  exports: [RouterModule]
})
export class AdminModule { }
