import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  sidenavWidth = 15;
  name="user";
  constructor(public _authService: AuthenticationService) {  }

  ngOnInit(): void {
  }

  getLogged(){
    return this._authService.loggedIn()
  }
 
  // increase() {
	// 	this.sidenavWidth = 15;
	// 	console.log('increase sidenav width');
	// }
	// decrease() {
	// 	this.sidenavWidth = 4;
	// 	console.log('decrease sidenav width');
	// }
}
