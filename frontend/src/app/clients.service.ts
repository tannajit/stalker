import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnlineOfflineServiceService } from './online-offline-service.service';
import Dexie from 'dexie';
import { UUID } from 'angular2-uuid';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private db: any;
  private request


  // for update functionality
  private currentClient;
  uri="localhost:3000";
  private  _clientUrl="http://"+this.uri+"/api1/clients";
  private _secteurUrl="http://"+this.uri+"/api1/secteurs";
  private _addclient="http://"+this.uri+"/api1/AddClient";
  private _getclient = "http://"+this.uri+"/api1/addedClients";
  private _updateclient = "http://"+this.uri+"/api1/updateClient";
  private getClientBySell = "http://"+this.uri+"/api1/getClientBySeller";
  private _validate = "http://"+this.uri+"/api1/validate";
  ////////////////////remplacer par uri après le port
  private _getClientByID = "http://localhost:4000/api1/GetClient";



  getNFC(){
    var url="http://localhost:7000/nfc"
    return this.http.post<any>(url,"0633691574")
  }
  getSMS(phone){
    var url="http://localhost:7000/sms"
    return this.http.post<any>(url,phone)

  }



  SendClient(client) {
    return this.http.post<any>(this._addclient,client);
  }

  constructor(private readonly onlineOffline: OnlineOfflineServiceService, private http: HttpClient, private _router: Router) {
    this.registerToEvents(onlineOffline);
    this.createDatabase();
    // this.request = window.indexedDB.open("MyTestDatabase", 1)
    // this.request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
    //   console.log("Why didn't you allow my web app to use IndexedDB?!");
    // };
  }

  getAllClient() {
    return this.http.get<any>(this._clientUrl)
  }

  private createDatabase() {
    this.db = new Dexie('MyTestDatabase');
    this.db.version(1).stores({
      client: 'UUid'
    });
  }

  addTodo(client: any) {
    client["UUid"] = UUID.UUID();
    if (!this.onlineOffline.isOnline) {
      this.addToIndexedDb(client);
    } else {
      //post request to mongodb
      this.SendClient(client).subscribe(res => {
        console.log(res);
        console.log("data sent")
      });
    }
  }
  getClientBySeller(lat,long){
     var url="http://localhost:3000/api1/getClientBySeller/"+lat+"/"+long+""
    console.log(url)
    return this.http.get<any>(url)
  }

  getClientByAuditor(lat,long){
    var url="http://localhost:3000/api1/getClientByAuditor/"+lat+"/"+long+""
   console.log(url)
   return this.http.get<any>(url)
 }


  // used for update functionality
  setCurrentClientInfo(client: any) {
    this.currentClient = client;
    console.log('***************************'+this.currentClient.NomPrenom)
  }

  addToIndexedDb(clientt: any) {
    this.db.client
      .add(clientt)
      .then(async () => {
        const allItems: any = await this.db["client"].toArray();
        console.log('saved in DB, DB is now', allItems);
        // var id=this.getShow(clientt.UUid)
        // console.log(id)
      })
      .catch(e => {
        alert('Error: ' + (e.stack || e));
      });
  }

  private async sendItemsFromIndexedDb() {
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
        // console.log("------------------------")
         console.log(all)
        // console.log("------------------------")
        all.forEach(element => {
          // console.log("---")
          console.log(element)
          this.SendClient(element).subscribe(res => {
            console.log(res);

          })
          console.log("data sent succusfuly")
        })

      }
      this.db.client.clear();
      // objectStoreRequest.onerror=event=>{
      //   console.log(event)
      // }
    }
  }

  items

  private async getdata() {
    this.db.table("CartList").get().then(p => this.items = p);
    console.log(this.items)
  }


  private registerToEvents(onlineOffline: OnlineOfflineServiceService) {
          onlineOffline.connectionChanged.subscribe(online => {
            console.log(online);
            if (online) {
              console.log('went online');
              console.log('sending all stored items');
              this.sendItemsFromIndexedDb();
              // this.getdata()
            } else {
              console.log('went offline, storing in indexdb');
            }
          });
  }




  getAllSecteurs(){
          return this.http.get<any>(this._secteurUrl)
        }

  getClient() {
          return this.http.get<any>(this._getclient);
        }



  getClientInfo(){
          return this.currentClient;
        }
  private getShow(id) {
          var transaction = this.db.transaction(["client"], "readonly");
          var store = transaction.objectStore("client");
          var request = store.get(id);

          request.onsuccess = function (e) {
            console.log("yay")
            var result = e.target.result;
            if (result) {
              console.log(result)
            }
          }
        }

  updateClient(client:any){
    return this.http.post(this._updateclient, client);
  }


  validateAuditorInfo(info){
    console.log("#############################")
    console.log(info)
    return this.http.post<any>(this._validate,info);
  }
  //////////////////
  getClientByID(id){
    console.log('id'+id);
    return this.http.get(this._getClientByID+ '/' +id);
  }
  ///////////////////
}
