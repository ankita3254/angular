import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children:[
      {
        path:'me',
        component:AboutMeComponent
      }
    ]
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'contact/:id',
    component:ContactComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'**',
    component:NoPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
