import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ClientsService } from '../clients.service';
import Dexie from 'dexie';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { ConstantPool } from '@angular/compiler';

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
  idadd
  idupdate
  iddelete
  constructor(private clientService: ClientsService, public _authService: AuthenticationService,
    private dialog: MatDialog) {
    // this.idadd = this.clientService.getShow()
    // console.log(this.idadd)
    // this.idupdate = this.clientService.getID()
    // console.log(this.idupdate)
    // this.iddelete = this.clientService.getIDdelete()
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log(this.user)
    this.myname = this.user.name;
  }

  getLogged() {
    return this._authService.loggedIn()
  }

  logoutUser() {
    var t1,t2,t3;
    var db = new Dexie("MyTestDatabase").open().then(async (res) => {
      var idadd = await res.table("client").toCollection().keys(t=>{
        console.log(t)
        t1=t
      })
      //console.log(this.idadd)
      var idupdate =  res.table("update").toCollection().keys(t=>{
        console.log(t)
        t2=t
      })
      //console.log(this.idupdate)
      var iddelete = await res.table("delete").toCollection().keys(t=>{
        console.log(t)
        t3=t
        if (t1.length == 0 && t2.length == 0 && t3.length == 0) {
          console.log("makinch lcache")
          localStorage.removeItem('token')
          var db = new Dexie("off").open().then((res) => {
            res.table("sector").clear().then((l) => { 
            })
            this._authService.ClearData()
          });
        } else {
          console.log(t1.length,t2.length,t3.length)
          var message = "Please send all the offline requests first !";
          var btn = "Continue"
          this.openAlertDialog(message, btn)
        }
      })
    })
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
