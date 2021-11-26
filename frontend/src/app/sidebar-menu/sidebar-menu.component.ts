import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  sidenavWidth = 4;
  constructor() { }

  ngOnInit(): void {
  }

  increase() {
		this.sidenavWidth = 15;
		console.log('increase sidenav width');
	}
	decrease() {
		this.sidenavWidth = 4;
		console.log('decrease sidenav width');
	}
}
