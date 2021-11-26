import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
<<<<<<< HEAD
  constructor(private _auth:AuthenticationService){}
  getLoged(){
=======
  constructor(private _auth:AuthenticationService){
  
  }
  getLogged(){
>>>>>>> origin/master
    return this._auth.loggedIn()
  }
}
