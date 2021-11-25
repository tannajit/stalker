import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'



@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
