import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

const routes: Routes = [
  { path: 'menu', component: SidebarMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }