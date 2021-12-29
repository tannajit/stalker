import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef} from '@angular/material/dialog';
import * as L from 'leaflet';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { ClientsService } from '../clients.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients=[];
  version = 6;
  dialogRef: MatDialogRef<ClientInfoComponent>;
  loggedUser
  NomPrenom

  constructor(
    private _serviceClient: ClientsService,
    private dialog: MatDialog
  ){ 

    this.loggedUser = JSON.parse(localStorage.getItem("user"))
  }

  ngOnInit(): void {

    this.getAllClients()
    console.log(this.clients)
  }

  public getAllClients() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function(event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success');
      console.log(db);
      transaction = db.transaction(['data'], 'readwrite');
      const objectStore = transaction.objectStore('data');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        const all = event.target.result;
        all.forEach(element => {
          console.log('---');
          const elm = JSON.parse(element.Valeur);
          const Point = { _id: element._id, geometry: elm };
          this.clients.push(Point);
          console.log(Point);
          
        });

      };
    };
  }

  openDialog(content) {
    // console.log(content)
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });
  }

}
