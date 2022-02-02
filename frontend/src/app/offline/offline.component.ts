import { Component, OnInit } from '@angular/core';
import { OnlineOfflineServiceService } from '../online-offline-service.service';
import { ClientsService } from '../clients.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})
export class OfflineComponent implements OnInit {
  /////*********** VARIABLE'S DECLARATION ********/////////////
  id = [];
  idsupdates = [];
  idsdeletes = []
  ///////////////////////////////////////////////////////////

  /////************* CONSTRUCTOR ************///////////

  constructor(private readonly onlineOfflineService: OnlineOfflineServiceService,
    private clientService: ClientsService,
    private dialog: MatDialog) {
    this.getid()
    this.getidsup()
    this.getidsDel()
  }
  /////////////////////////////////////////////////////

  ////*********** GetID FOR ADD CLIENT *********////////
  getid() {
    this.id = this.clientService.getShow()
    console.log(this.id)
  }
  /////////////////////////////////////////////////////

  ////*********** GetID FOR UPDATE CLIENT *********////////
  getidsup() {
    this.idsupdates = this.clientService.getID()
    console.log(this.idsupdates)
  }
  ////////////////////////////////////////////////////
   ////*********** GetID FOR DELETE CLIENT *********////////
  getidsDel() {
    this.idsdeletes = this.clientService.getIDdelete()
    console.log(this.idsdeletes)
  }
  ////////////////////////////////////////////////////

  /////********** SYNCHRONISE ADD CLIENT*********/////////

  send(id) {
    console.log(id)
    if (this.onlineOfflineService.isOnline) {
      this.clientService.sendItemsFromIndexedDb(id)
      var index = this.id.indexOf(id);
      if (index > -1) {
        this.id.splice(index, 1);
      }
      var message = "data sent successfuly";
      var btn = "Continue"
      this.openAlertDialog(message, btn)

    } else {
      var message = "You are still offline !";
      var btn = "Continue"
      this.openAlertDialog(message, btn)
    }
  }
  //////////////////////////////////////////////////////////

  /////********** SYNCHRONISE UPDATE CLIENT*********/////////
  sendupdate(id) {
    console.log(id)
    if (this.onlineOfflineService.isOnline) {
      this.clientService.sendItemsUpdated(id)
      var index = this.idsupdates.indexOf(id);
      if (index > -1) {
        this.idsupdates.splice(index, 1);
      }
      var message = "data sent successfuly";
      var btn = "Continue"
      this.openAlertDialog(message, btn)
    } else {
      var message = "You are still offline !";
      var btn = "Continue"
      this.openAlertDialog(message, btn)
    }
  }
  //////////////////////////////////////////////////////////
  /////********** SYNCHRONISE DELETE CLIENT*********/////////
  senddelete(id) {
    console.log(id)
    if (this.onlineOfflineService.isOnline) {
      this.clientService.sendItemsDeleted(id)
      var index = this.idsdeletes.indexOf(id);
      if (index > -1) {
        this.idsdeletes.splice(index, 1);
        console.log("hehehehe")
      }
      var message = "data sent successfuly";
      var btn = "Continue"
      this.openAlertDialog(message, btn)
    } else {
      var message = "You are still offline !";
      var btn = "Continue"
      this.openAlertDialog(message, btn)
    }
  }
  //////////////////////////////////////////////////////////

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

  // private async sendItemsFromIndexedDb() {
  //   console.log("sending items");
  //   // const allItems: any[] = await this.db["client"].toArray();
  //   var db; var transaction; var upgradeDb
  //   var request = window.indexedDB.open("MyTestDatabase", 10)
  //   // upgradeDb.createObjectStore('client');
  //   request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
  //   console.log("Why didn't you allow my web app to use IndexedDB?!");
  //   };
  //   request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
  //     db = event.target.result;
  //     console.log("success")
  //     console.log(db)
  //     transaction = db.transaction(['client'], 'readwrite');
  //     var objectStore = transaction.objectStore("client");
  //     var objectStoreRequest = objectStore.getAll();
  //     objectStoreRequest.onsuccess = event => {
  //       var all = event.target.result
  //       // console.log("------------------------")
  //        console.log(all)
  //       // console.log("------------------------")
  //       all.forEach(element => {
  //         // console.log("---")
  //         console.log(element)
  //         this.clientService.SendClient(element).subscribe(res => {
  //           console.log(res);

  //         })
  //         console.log("data sent succusfuly")
  //       })

  //     }
  //     db.client.clear();
  //     // objectStoreRequest.onerror=event=>{
  //     //   console.log(event)
  //     // }
  //   }
  // }

  ngOnInit(): void {

  }


}
