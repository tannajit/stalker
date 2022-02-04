import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ClientsService } from '../clients.service';
import Dexie from 'dexie';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
   
  /////********** VARIABLE'S DECLARATION **********///////
  sidenavWidth = 15;
  user
  myname;
  idadd = []
  idupdate = []
  iddelete = []
  constructor(private clientService: ClientsService,public _authService: AuthenticationService,
    private dialog: MatDialog) { 
    this.idadd = this.clientService.getShow()
    console.log(this.idadd)
    this.idupdate = this.clientService.getID()
    console.log(this.idupdate)
    this.iddelete = this.clientService.getIDdelete()
   }

  ngOnInit(): void {
   this.user= JSON.parse(localStorage.getItem("user"))
   console.log(this.user)
    this.myname=this.user.name;
  }

  getLogged(){
    return this._authService.loggedIn()
  }

  logoutUser() {
    if (this.idupdate.length>0 || this.idadd.length>0 || this.iddelete.length>0) {
      var message = "Please send all the offline requests first !";
      var btn = "Continue"
      this.openAlertDialog(message, btn)
    }else{ 
      console.log("makinch lcache")
      localStorage.removeItem('token')
      //this._index.ClearData()
      //this._index.ClearDataSector()
      //this.ClearData();
      var db = new Dexie("off").open().then((res) => {
        res.table("sector").clear().then((l) => {
        })
        this._authService.ClearData()
      });
    }
  }

  openAlertDialog(msg, btn) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: msg,
        buttonText: {
          ok: btn,
        }
      }
    });
  }
 
}
