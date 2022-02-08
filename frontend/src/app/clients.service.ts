import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnlineOfflineServiceService } from './online-offline-service.service';
import Dexie from 'dexie';
import { UUID } from 'angular2-uuid';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  /////********* VARIABLE'S DECLARATION ******//////////
  markersCluster = new L.MarkerClusterGroup();
  markerClusterSector = new L.MarkerClusterGroup();
  MyPosition;
  Raduis;
  PositionClient;
  Distance;
  private db: any;
  items
  private currentClient;
  uri = "http://localhost:3000";
  private _clientUrl = this.uri + "/api1/getClientByUser";
  private _secteurUrl = this.uri + "/api1/getSectorByUser";
  private _addclient = this.uri + "/api1/AddClient";
  private _getclient = this.uri + "/api1/addedClients";
  private _updateclient = this.uri + "/api1/updateClient";
  private getClientBySell = this.uri + "/api1/getClientBySeller";
  private _validate = this.uri + "/api1/validate";
  private _extarct = this.uri + "/api1/extract";
  private _getClientByID = this.uri + "/api1/GetClient";
  private _allDeleteRequests = this.uri + "/api1/getAllDeleteRequests";

  private _sync = this.uri + "/api1/getClientByUser1";
  ////////////////////remplacer par uri après le port
  //private _getClientByID = "http://localhost:3000/api1/GetClient";
  //private _Delete = "http://localhost:3000/api1/";
  private _Delete = this.uri + "/api1/";

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
  ///********* Test  ***********////
  options = {
    responseType: 'text',
  };

  Sync(type) {
    return this.http.get<any>(this._sync + "/" + type)
  }
  ///////////////
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

  extract(info) {
    return this.http.post<any>(this._extarct, info);
  }

  getDeleteRequests() {
    return this.http.get<any>(this._allDeleteRequests)
  }

  DeleteClientByID(id) {
    console.log("DeleteClientByID" + id);
    return this.http.get(this._Delete + "DeleteClient/" + id);
  }

  // DeleteRequest(data) {
  //   console.log("DeleteClientByID" + data.video);
  //   return this.http.post(this._Delete + "DeleteRequest", data);
  // }

  // ReadV() {
  //   return this.http.get(this._Delete + "ReadVideo");
  // }

  myDelete(info) {
    return this.http.post<any>("http://localhost:3000/api1/deleteo", info)
  }
  myDeleteRead() {
    return this.http.get<any>("http://localhost:3000/api1/VideoReadHafsa")
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
  ///////************  ********************/
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

  /////*********** DELETE CLIENT OFFLINE MODE *********///////
  addTodoDelete(client: any) {
    client["UUid"] = UUID.UUID();
    if (!this.onlineOffline.isOnline) {
      this.addToIndexedDbDelete(client);
    } else {
      //post request to mongodb
      this.DeleteRequest(client).subscribe(res => {
        console.log(res);
        console.log("data sent")
      });
    }
  }

  addToIndexedDbDelete(clientt: any) {
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
      transaction = db.transaction(['delete'], 'readwrite');
      var objectStore = transaction.objectStore("delete");
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
  /////********** SEND CLIENT INFO FROM INDEXEDB TO MONGODB (DELETE CLIENT) *********** //////
  async sendItemsDeleted(id) {
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
      transaction = db.transaction(['delete'], 'readwrite');
      var objectStore = transaction.objectStore("delete");
      var objectStoreRequest = objectStore.get(id);
      console.log("@@@@@@@@@@" + objectStoreRequest)
      objectStoreRequest.onsuccess = event => {
        var element = event.target.result
        console.log(element)
        this.DeleteRequest(element).subscribe(res => {
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
    request.onsuccess = async (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success")
      console.log(this.db)
      transaction = this.db.transaction(['client'], 'readwrite');
      var objectStore = transaction.objectStore("client");
      var objectStoreRequest = await objectStore.getAll();
      objectStoreRequest.onsuccess = async  (event) =>{
        var all = await event.target.result
        all.forEach(element => {
          console.log("---")
          var elm = element.UUid
          console.log(elm)
          list.push(elm)
          console.log(list)
        });
      };
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
    request.onsuccess = async (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success")
      console.log(this.db)
      transaction = this.db.transaction(['update'], 'readwrite');
      var objectStore = transaction.objectStore("update");
      var objectStoreRequest = await objectStore.getAll();

      objectStoreRequest.onsuccess = async  (event)=> {
        var all = await event.target.result
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

  ////************ GET DATA BY ID FROM INDEXEDB (DELETE CLIENT) *********///////
  getIDdelete() {
    var list = []
    var transaction
    var request = window.indexedDB.open("MyTestDatabase", 10)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = async (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success")
      console.log(this.db)
      transaction = this.db.transaction(['delete'], 'readwrite');
      var objectStore = transaction.objectStore("delete");
      var objectStoreRequest = await objectStore.getAll();
      objectStoreRequest.onsuccess = async (event)  => {
        var all = await event.target.result
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

  setCurrentClientInfo(client: any) {
    this.currentClient = client;
    console.log('***************************' + this.currentClient.geometry.properties.NomPrenom)
  }

  getClientInfo() {
    return this.currentClient;
  }

  //////////////////
  getClientByID(id) {
    console.log('id' + id);
    return this.http.get(this._getClientByID + '/' + id);
  }

  ///////////////////

  getPosition(position) {
    if (Object.keys(position)[0] === "Map") {
      this.MyPosition = position.Map;
      this.Raduis = position.Raduis;
    };
    if (Object.keys(position)[0] === "Client") {
      this.PositionClient = position.Client;

    }
    if ((Object.keys(position)[0] === "MapUp") && (this.PositionClient != null)) {

      //console.log("MyPosition Updated " + new L.LatLng(position.MapUp[0], position.MapUp[1]));

      this.MyPosition = new L.LatLng(position.MapUp[0], position.MapUp[1]);
      this.Raduis = position.Raduis;
      this.Distance = this.PositionClient.distanceTo(this.MyPosition).toFixed(2);
      //.log("Distance Up :" + this.Distance);
      //console.log("Raduis Up :" + this.Raduis);

    }
    if (this.PositionClient != null) {
     // console.log("MyPosition " + this.MyPosition);

      //console.log("Pointposition " + this.PositionClient);

      this.Distance = this.PositionClient.distanceTo(this.MyPosition).toFixed(2);
      //console.log("Distance :" + this.Distance);
      //console.log("Raduis :" + this.Raduis);

    }
  }

  DeleteRequest(data) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(data)
    console.log("DeleteClientByID" + data);
    return this.http.post(this._Delete + "DeleteRequest", data);
  }

  ReadVideo(id) {
    console.log("DeleteClientByID" + id);

    return this.http.get(this._Delete + "ReadVideo/" + id);
  }

  //   getPosition(position){
  //     if(Object.keys(position)[0]==="Map"){
  //     this.MyPosition=position.Map;
  //     this.Raduis=position.Raduis;
  //   };
  //     if(Object.keys(position)[0]==="Client"){
  //     this.PositionClient=position.Client;

  //   }
  //   if((Object.keys(position)[0]==="MapUp")&&(this.PositionClient!=null)){

  //     console.log("MyPosition Updated "+ new L.LatLng(position.MapUp[0], position.MapUp[1]));

  //     this.MyPosition=new L.LatLng(position.MapUp[0], position.MapUp[1]);
  //     this.Raduis=position.Raduis;
  //     this.Distance=this.PositionClient.distanceTo(this.MyPosition).toFixed(2);
  //     console.log("Distance Up :"+this.Distance );
  //     console.log("Raduis Up :"+this.Raduis );

  //   }
  //   if(this.PositionClient!=null){
  // console.log("MyPosition "+this.MyPosition);

  //   console.log("Pointposition "+this.PositionClient);

  //     this.Distance=this.PositionClient.distanceTo(this.MyPosition).toFixed(2);
  //     console.log("Distance :"+this.Distance );
  //     console.log("Raduis :"+this.Raduis );

  //   }

  //     // if(this.Distance<=this.Raduis) {
  //     // console.log("The point into the cercle")
  //     // //this.getDistance();
  //     // return this.Distance;
  //     //}
  //   }

  ActiveTheButton() {
    if (this.Distance <= this.Raduis) {
      //console.log("The point into the cercle")
      return false;
    }
    return true
  }

  getDistance() {
    //console.log("Distance2 :"+this.Distance );
    return this.Distance;

  }


  async SendALLAdd() {
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
      var objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        var all = event.target.result
        console.log(all)
        all.forEach(element => {
          console.log(element)
          this.SendClient(element).subscribe(res => {
            console.log(res);
          })
          console.log("data sent succusfuly")
        })
        var objectStoreRequest1 = objectStore.clear();
        objectStoreRequest1.onsuccess = event => {
          console.log("item deleted from indexedDb");
        }
      }
      
    }
    
  }

  async SendALLUpdate() {
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
      transaction = db.transaction(['update'], 'readwrite');
      var objectStore = transaction.objectStore("update");
      var objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        var all = event.target.result
        console.log(all)
        all.forEach(element => {
          console.log(element)
          this.updateClient(element).subscribe(res => {
            console.log(res);
          })
          console.log("data sent succusfuly")
        })
        var objectStoreRequest1 = objectStore.clear();
        objectStoreRequest1.onsuccess = event => {
          console.log("item deleted from indexedDb");
        }
      }

    }
  }

  async SendALLDelete() {
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
      transaction = db.transaction(['delete'], 'readwrite');
      var objectStore = transaction.objectStore("delete");
      var objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        var all = event.target.result
        console.log(all)
        all.forEach(element => {
          console.log(element)
          this.DeleteRequest(element).subscribe(res => {
            console.log(res);
          })
          console.log("data sent succusfuly")
        })
        var objectStoreRequest1 = objectStore.clear();
        objectStoreRequest1.onsuccess = event => {
          console.log("item deleted from indexedDb");
        }
      }
    }
  }

  /////////////////////////////////////////////////////////////////

  private baseUrl = 'http://localhost:3000/api1';

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    console.log(formData)

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log(req)

    return this.http.request(req);

  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  deleteFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/deletefile`);
  }


  CalculateBack(){
    interval(500).subscribe(x => {
      console.log("am runing")
    });
  }

  SaveInIndexDB(ress,ArrayIDS){
    console.log("Adding PDVs in IndexedDB")
    var db = new Dexie("off").open().then((res) => {
      //console
      res.table("pdvs").bulkDelete(ArrayIDS).then((hh) => {
        console.log("$$$$$$$ DONE Clearing $$$$$$$$")
        res.table("pdvs").bulkPut(ress).then((lastKey) => {
          console.log("Add PDVs");
        });
      })
    });
  }

  //****************************** */





}
