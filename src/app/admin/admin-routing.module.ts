import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogedComponent } from './loged/loged.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  {
    path:'loged',component:LogedComponent
  },
  {
    path:'list',component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
