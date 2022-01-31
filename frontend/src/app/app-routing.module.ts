import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ClientsComponent } from './clients/clients.component';
import { RoutesComponent } from './routes/routes.component';
import { PlanningComponent } from './admin/planning/planning.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { AddclientComponent } from './addclient/addclient.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { OfflineComponent } from './offline/offline.component';
import { SettingsComponent } from './settings/settings.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { InjectionComponent } from './admin/injection/injection.component';
import { DeleteRequestsComponent } from './admin/delete-requests/delete-requests.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UsersComponent } from './admin/users/users.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ExtractSelectComponent } from './extract-select/extract-select.component';
import { RolesComponent } from './admin/roles/roles.component';





const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'menu', 
    component: SidebarMenuComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'map', component: MapComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'clients', component: ClientsComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'routes', component: RoutesComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'planning', component: PlanningComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'addclient/:sector', component: AddclientComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'addclient', component: AddclientComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'updateclient', component: UpdateClientComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'offline', component: OfflineComponent,
  },
  {
    path: 'settings', component: SettingsComponent,
    canActivate: [AuthGaurdService]
  },
  { 
    path: 'map/:lat/:long', component: MapComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'deleteClient', component: DeleteClientComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'deleteRequests', component: DeleteRequestsComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'injection', component: InjectionComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'addUser', component: AddUserComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'updateUser', component: UpdateUserComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'extract', component: ExtractSelectComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'roles', component: RolesComponent,
    canActivate: [AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
