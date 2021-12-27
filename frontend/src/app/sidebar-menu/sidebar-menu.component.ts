import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  sidenavWidth = 15;
  user
  myname;
  constructor(public _authService: AuthenticationService) {  }

  ngOnInit(): void {
   this.user= JSON.parse(localStorage.getItem("user"))
   console.log(this.user)
    this.myname=this.user.name;
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
