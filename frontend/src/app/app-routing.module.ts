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
import { AuthGaurdService } from './auth-gaurd.service';



const routes: Routes = [
  {
    path :'',
    component:HomeComponent,
    pathMatch: 'full' ,
    canActivate: [AuthGaurdService]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'menu', component: SidebarMenuComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'map', component: MapComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'routes', component: RoutesComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'planning', component: PlanningComponent,
    canActivate: [AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
