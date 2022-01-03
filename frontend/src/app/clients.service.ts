import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnlineOfflineServiceService } from './online-offline-service.service';
import Dexie from 'dexie';
import { UUID } from 'angular2-uuid';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  /////********* VARIABLE'S DECLARATION ******//////////

  private db: any;
  items
  private currentClient;
  uri = "http://localhost:3000";
  private _clientUrl = this.uri + "/api1/clients";
  private _secteurUrl = this.uri + "/api1/secteurs";
  private _addclient = this.uri + "/api1/AddClient";
  private _getclient = this.uri + "/api1/addedClients";
  private _updateclient = this.uri + "/api1/updateClient";
  private getClientBySell = this.uri + "/api1/getClientBySeller";
  private _validate = this.uri + "/api1/validate";
  private _extarct = this.uri + "/api1/extract";
  private _getClientByID = this.uri + "/api1/GetClient";

  ////////*************** API *****************////////

  getNFC() {
    var url = "http://localhost:7000/nfc"
    return this.http.post<any>(url, "0633691574")
  }

  getSMS(phone) {
    var url = "http://localhost:7000/sms"
    return this.http.post<any>(url, phone)
  }

  SendClient(client) {
    return this.http.post<any>(this._addclient, client);
  }

  getAllClient() {
    return this.http.get<any>(this._clientUrl)
  }

  getClientBySeller(id) {
    var url = "http://localhost:3000/api1/getClientBySeller/" + id
    console.log(url)
    return this.http.get<any>(url)
  }

  getClientByAuditor(id) {
    var url = "http://localhost:3000/api1/getClientByAuditor/" + id
    console.log(url)
    return this.http.get<any>(url)
  }

  getAllSecteurs() {
    return this.http.get<any>(this._secteurUrl)
  }

  getClient() {
    return this.http.get<any>(this._getclient);
  }

  updateClient(client: any) {
    return this.http.post<any>(this._updateclient, client);
  }

  extract() {
    return this.http.get<any>(this._extarct);
  }

  //////////////////////////////////////////////////////////

  //////************* CONSTRUCTOR **************/////////////
  constructor(private readonly onlineOffline: OnlineOfflineServiceService, private http: HttpClient, private _router: Router, private dialog: MatDialog) {
    this.registerToEvents(onlineOffline);
    this.createDatabase();
  }


  ////*********** CREATE DATABASE ***********//////////////
  private createDatabase() {
    this.db = new Dexie('MyTestDatabase');
    this.db.version(1).stores({
      client: 'UUid',
      update: 'UUid'
    });
  }

  /////********* ADD CLIENT IN INDEXEDDB OFFLINE MODE *********//////////

  addTodo(client: any) {
    client["UUid"] = UUID.UUID();
    if (!this.onlineOffline.isOnline) {
      this.addToIndexedDb(client);
    } else {
      this.SendClient(client).subscribe(res => {
        console.log(res);
        console.log("data sent")
      });
    }
  }

  addToIndexedDb(clientt: any) {
    this.db.client
      .add(clientt)
      .then(async () => {
        const allItems: any = await this.db["client"].toArray();
        console.log('saved in DB, DB is now', allItems);
        var message = "Data saved successfuly";
        var btn = "Continue"
        this.openAlertDialog(message, btn)
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }
  ////////////////////////////////////////////////////////////////////


  /////*********** UPDATE CLIENT OFFLINE MODE *********///////

  addTodoUpdate(client: any) {
    client["UUid"] = UUID.UUID();
    if (!this.onlineOffline.isOnline) {
      this.addToIndexedDbUpdate(client);
    } else {
      //post request to mongodb
      this.updateClient(client).subscribe(res => {
        console.log(res);
        console.log("data sent")
      });
    }
  }

  addToIndexedDbUpdate(clientt: any) {
    var db; var transaction; var upgradeDb
    var request = window.indexedDB.open("MyTestDatabase", 10)
    // upgradeDb.createObjectStore('client');
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log("success")
      console.log(db)
      transaction = db.transaction(['update'], 'readwrite');
      var objectStore = transaction.objectStore("update");
      //var objectStoreRequest = objectStore.get(id);
      const request = objectStore.add(clientt);
      request.onsuccess = (event) => {
        console.log('saved in DB, DB is now');
        var message = "Data saved successfuly";
        var btn = "Continue"
        this.openAlertDialog(message, btn)
      };

    }
  }
  ////////////////////////////////////////////////////////////////////////


  /////********** SEND CLIENT INFO FROM INDEXEDB TO MONGODB (ADD CLIENT) *********** //////
  async sendItemsFromIndexedDb(id) {
    console.log("sending items");
    // const allItems: any[] = await this.db["client"].toArray();
    var db; var transaction; var upgradeDb
    var request = window.indexedDB.open("MyTestDatabase", 10)
    // upgradeDb.createObjectStore('client');
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log("success")
      console.log(db)
      transaction = db.transaction(['client'], 'readwrite');
      var objectStore = transaction.objectStore("client");
      var objectStoreRequest = objectStore.get(id);

      console.log("@@@@@@@@@@" + objectStoreRequest)
      objectStoreRequest.onsuccess = event => {
        var element = event.target.result
        console.log(element)
        this.SendClient(element).subscribe(res => {
          console.log(res);
          console.log("data sent succusfuly")
        })
        var objectStoreRequest1 = objectStore.delete(id);
        objectStoreRequest1.onsuccess = event => {
          console.log("item deleted from indexedDb");
        }
      };
    }
  }

  /////********** SEND CLIENT INFO FROM INDEXEDB TO MONGODB (UPDATE CLIENT) *********** //////
  async sendItemsUpdated(id) {
    console.log("sending items");
    var db; var transaction; var upgradeDb
    var request = window.indexedDB.open("MyTestDatabase", 10)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log("success")
      console.log(db)
      transaction = db.transaction(['update'], 'readwrite');
      var objectStore = transaction.objectStore("update");
      var objectStoreRequest = objectStore.get(id);
      console.log("@@@@@@@@@@" + objectStoreRequest)
      objectStoreRequest.onsuccess = event => {
        var element = event.target.result
        console.log(element)
        this.updateClient(element).subscribe(res => {
          console.log(res);
          console.log("data sent succusfuly")
        })
        var objectStoreRequest1 = objectStore.delete(id);
        objectStoreRequest1.onsuccess = event => {
          console.log("item deleted from indexedDb");
        }
      };
    }
  }
//////************** CHECK IF THE NAVIGATOR IS ONLINE OR OFFLINE *********///////
  private registerToEvents(onlineOffline: OnlineOfflineServiceService) {
    onlineOffline.connectionChanged.subscribe(online => {
      console.log(online);
      if (online) {
        console.log('went online');
        console.log('sending all stored items');
        var message = "went online, sending all stored items";
        var btn = "Ok"
        this.openAlertDialog(message, btn)
      } else {
        console.log('went offline, storing in indexdb');
        var message = "went offline, storing in indexdb";
        var btn = "Ok"
        this.openAlertDialog(message, btn)
      }
    });
  }
 /////////////////////////////////////////////////////////////

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
   ////************ GET DATA BY ID FROM INDEXEDB (ADD CLIENT) *********///////
  getShow() {
    var list = []
    var transaction
    var request = window.indexedDB.open("MyTestDatabase", 10)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success")
      console.log(this.db)
      transaction = this.db.transaction(['client'], 'readwrite');
      var objectStore = transaction.objectStore("client");
      var objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = function (event) {
        var all = event.target.result
        all.forEach(element => {
          console.log("---")
          var elm = element.UUid
          console.log(elm)
          list.push(elm)
          console.log(list)
        });

      }
    };
    return list
  }

  ////************ GET DATA BY ID FROM INDEXEDB (UPDATE CLIENT) *********///////
  getID() {
    var list = []
    var transaction
    var request = window.indexedDB.open("MyTestDatabase", 10)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success")
      console.log(this.db)
      transaction = this.db.transaction(['update'], 'readwrite');
      var objectStore = transaction.objectStore("update");
      var objectStoreRequest = objectStore.getAll();

      objectStoreRequest.onsuccess = function (event) {
        var all = event.target.result
        all.forEach(element => {
          console.log("---")
          var elm = element.UUid
          console.log(elm)
          list.push(elm)
          console.log(list)
        });

      }
    };
    return list
  }
//////********** VALIDATE AUDIT INFO BACKOFFICE *******////////

  validateAuditorInfo(info) {
    console.log("#############################")
    console.log(info)
    return this.http.post<any>(this._validate, info);
  }

////////////////////////////////////////////////////////

  getClientByID(id) {
    console.log('id' + id);
    return this.http.get(this._getClientByID + '/' + id);
  }

  setCurrentClientInfo(client: any) {
    this.currentClient = client;
    console.log('***************************' + this.currentClient.geometry.properties.NomPrenom)
  }

  getClientInfo() {
    return this.currentClient;
  }
 
}
