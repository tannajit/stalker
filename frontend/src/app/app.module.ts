import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule}  from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import {MatDividerModule} from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './map/map.component';
import { ClientsComponent } from './clients/clients.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { UpperMenuComponent } from './upper-menu/upper-menu.component';
import { TestComponent } from './test/test.component';
import { MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    LoginComponent,
    MapComponent,
    ClientsComponent,
    RoutesComponent,
    HomeComponent,
    PlanningComponent,
    UpperMenuComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    AppRoutingModule,
    MatGridListModule,
    
  ],
  providers: [AuthenticationService,AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
