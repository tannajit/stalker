import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IndexdbService } from './indexdb.service';
import { ClientsService } from './clients.service';
import Dexie from 'dexie';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _UsersUrl = "http://localhost:3000/api1/login"
  private _isActive = "http://localhost:3000/api1/isActive"
  public forceLogout = false;

  // idadd = []
  // idupdate = []
  // iddelete = []

  constructor(private clientService: ClientsService,
    private http: HttpClient,
    private _router: Router,
    private _index: IndexdbService) {
    this.version = this._index.version
    this.forceLogout = false;
  }
  getUserLogin(data, httpOptions) {
    return this.http.post<any>(this._UsersUrl, data)
  }
  getToken() {
    return localStorage.getItem('token')
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  isActive() {
    console.log(JSON.parse
      (localStorage.getItem('user')))
    var id = JSON.parse(localStorage.getItem('user'))._id
    var role = JSON.parse(localStorage.getItem('user')).role
    return this.http.get<any>(this._isActive + "?_id=" + id + "&role=" + role + "&status=Active")
  }
  //////////************** Logout **************/////////////////
  logoutUser() {

    var idadd = this.clientService.getShow()
    console.log(idadd)
    var idupdate = this.clientService.getID()
    console.log(idupdate)
    var iddelete = this.clientService.getIDdelete()
    console.log(iddelete)
    if (!this.forceLogout) {
      if (idupdate.length > 0 || idadd.length > 0 || iddelete.length > 0) {
        console.log("ba9i lcache kayn")
      } else {
        console.log("makinch lcache")
        localStorage.removeItem('token')
        //this._index.ClearData()
        //this._index.ClearDataSector()
        //this.ClearData();
        var db = new Dexie("off").open().then((res) => {
          res.table("sector").clear().then((l) => {
          })
          this.ClearData()
        });
      }
    } else {
      localStorage.removeItem('token')
      var db = new Dexie("off").open().then((res) => {
        res.table("sector").clear().then((l) => {
        })
        this.ClearData()
      });
    }
    //ClearDataSector()
  }

  db; ///database
  version; ///version of the database
  ClearData() {
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success inside Clear")
      console.log(this.db)
      var transaction = this.db.transaction(['pdvs'], 'readwrite');
      var objectStore = transaction.objectStore("pdvs");
      var objectStoreRequest = objectStore.clear();
      objectStoreRequest.onsuccess = (event) => {
        console.log("Data Cleared")
        this.ClearDataSector()
      }
    }
  }
  ClearDataSector() {
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success Sector inside Clear")
      console.log(this.db)
      var transaction = this.db.transaction(['sector'], 'readwrite');
      var objectStore = transaction.objectStore("sector");
      var objectStoreRequest = objectStore.clear();
      objectStoreRequest.onsuccess = (event) => {
        console.log("Data Sector Cleared")
        this._router.navigate(['login']).then(() => {
          window.location.reload();
        })
      }
    }
  }
}
