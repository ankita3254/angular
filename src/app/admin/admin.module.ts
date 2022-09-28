import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LogedComponent } from './loged/loged.component';
import { ListComponent } from './list/list.component';
console.log("admin works");

@NgModule({
  declarations: [
    LogedComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
