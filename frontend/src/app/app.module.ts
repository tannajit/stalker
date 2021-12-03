import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule}  from '@angular/material/icon'
import { LoginComponent } from './login/login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import {MatDividerModule} from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './map/map.component';
import { ClientsComponent } from './clients/clients.component';
import { RoutesComponent } from './routes/routes.component';
import { PlanningComponent } from './planning/planning.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { MatMenuModule} from '@angular/material/menu';
import { AddclientComponent } from './addclient/addclient.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';





@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    LoginComponent,
    MapComponent,
    ClientsComponent,
    RoutesComponent,
    PlanningComponent,
    AddclientComponent

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
    FormsModule ,
    ZXingScannerModule,
    MatProgressBarModule,
    MatSelectModule,
    CdkTableModule,
    CdkTreeModule

    
  ],

  providers: [AuthenticationService,AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
