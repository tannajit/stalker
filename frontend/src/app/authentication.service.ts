import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IndexdbService } from './indexdb.service';
import Dexie from 'dexie';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _UsersUrl = "https://stalker.noor-sbg.com:60443/api1/login"

  constructor(private http: HttpClient,
    private _router: Router,
    private _index: IndexdbService) { 
      this.version=this._index.version
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
  //////////************** Logout **************/////////////////
  logoutUser() {
    localStorage.removeItem('token')
    //this._index.ClearData()
    //this._index.ClearDataSector()
    //this.ClearData();
    var db = new Dexie("off").open().then((res) => {
      res.table("sector").clear().then((l) => {
      })
      this.ClearData()
    });
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
