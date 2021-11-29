import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-upper-menu',
  templateUrl: './upper-menu.component.html',
  styleUrls: ['./upper-menu.component.css']
})
export class UpperMenuComponent implements OnInit {

    @Input() previousUrl: string[];
    @Output() toggleSideNav = new EventEmitter();
    @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleSideNav() {
    this.toggleSideNav.emit();
}

  public onLogout() {
    this.logout.emit();
}

}
