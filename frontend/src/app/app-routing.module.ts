import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path :'',
    component:AppComponent,
    children:[
      {
        path:'',
        component:LoginComponent
      }
    ]
  },
  {
    path: 'menu', component: SidebarMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
