import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef} from '@angular/material/dialog';
import * as L from 'leaflet';
import { element } from 'protractor';
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
  showFilterage= true
  dialogRef: MatDialogRef<ClientInfoComponent>;
  sectorNames=[];
  // feilds values
  loggedUser;
  NomPrenom;
  typePDVselected;
  detailType;
  IdClient;
  PhoneNumber;
  PDVType;
  sector;
  deleteStatus;
  validate;
  nfc;


  constructor(
    private _serviceClient: ClientsService,
    private dialog: MatDialog
  ){ 

    this.loggedUser = JSON.parse(localStorage.getItem("user"))
    
  }

  ngOnInit(): void {
    this.getDataSector()
    console.log("############# sectors names########")
    console.log(this.sectorNames)
    
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

  public getDataSector() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success');
      console.log(db);
      transaction = db.transaction(['sector'], 'readwrite');
      const objectStore = transaction.objectStore('sector');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        const all = event.target.result;
        all.forEach(element => {
          console.log('---');
          const elm = JSON.parse(element.Valeur);
          this.sectorNames.push(elm.properties.idSecteur)
          //this.AllSecteurs.push(elm.idSecteur);
        });
      };
    };
  }

  onValidationSelect(){
    
      
  }
}
