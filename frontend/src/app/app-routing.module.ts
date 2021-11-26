import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ClientsComponent } from './clients/clients.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';



const routes: Routes = [
  {
    path :'',
    component:HomeComponent,
    pathMatch: 'full' 
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'menu', component: SidebarMenuComponent
  },
  {
    path: 'map', component: MapComponent
  },
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'routes', component: RoutesComponent
  },
  {
    path: 'planning', component: PlanningComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
