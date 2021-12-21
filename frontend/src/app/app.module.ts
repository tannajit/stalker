import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule}  from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import { LoginComponent } from './login/login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import {MatDividerModule} from '@angular/material/divider';
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
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import {WebcamModule} from 'ngx-webcam';
import { FormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    LoginComponent,
    MapComponent,
    ClientsComponent,
    RoutesComponent,
    PlanningComponent,
    AddclientComponent,
    ClientInfoComponent,
    UpdateClientComponent

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
    MatFormFieldModule,
    WebcamModule,
    MatProgressBarModule,
    MatSelectModule,
    CdkTableModule,
    CdkTreeModule,
    MatFormFieldModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [
    AuthenticationService, 
    AuthGaurdService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
