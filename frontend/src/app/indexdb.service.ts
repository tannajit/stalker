import { Injectable } from '@angular/core';
import { ClientsService } from './clients.service';
import * as geojson from 'geojson';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Injectable({
  providedIn: 'root'
})

export class IndexdbService {

  db; transaction;
  version = 6

  /////************* CONSTRUCTOR ***********////////
  constructor(private client: ClientsService) { }
   //////////********* CREATE INDEXEDDB DATABASES  ********///////////
  createDatabase() {
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onupgradeneeded = (event) => {
      console.log(event.target)
      this.db = request.result
      console.log("upgrade")
      var objectStore = this.db.createObjectStore("data", { keyPath: '_id' });
      console.log("create Sector ")
      var objectt = this.db.createObjectStore("sector", { keyPath: '_id'});
      objectt.createIndex( "nameSecteur","nameSecteur", { unique: false });
      var objectto = this.db.createObjectStore("pdvs", { keyPath: '_id' });
      //console.log(objectt)
    }
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log(this.db)
    }
  }

  createDatabaseOffline() {
    var request = window.indexedDB.open("MyTestDatabase", 10)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onupgradeneeded = (event) => {
      console.log(event.target)
      this.db = request.result
      console.log("upgrade")
      var objectStore = this.db.createObjectStore("client", { keyPath: 'UUid' });
      console.log("create client ")
      var objectt = this.db.createObjectStore("update", { keyPath: 'UUid' });
      console.log(objectt)
      console.log("create update ")
      var objectt = this.db.createObjectStore("delete", { keyPath: 'UUid' });
      console.log(objectt)
      console.log("create delete ")
    }
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log(this.db)
    }
  }

  ///////************** ADD ITEM INTO INDEXEDDB ****************////////////
  AddItem() {
    var costumer = { '_id': 123, Valeur: "hafsa" }
    console.log(costumer)
    var allclient = []
    this.client.getAllClient().subscribe(res => {
      res.forEach(element => {
        var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) }
        allclient.push(geo)
        this.transaction = this.db.transaction(['data'], 'readwrite');
        var objectStore = this.transaction.objectStore("data");
        var request = objectStore.add(geo)
        request.onsuccess = function (event) {
          console.log("done Synchronize")
        };
      });
    });
  }

  ///////************* DELETE CLIENTS DATA FROM INDEXEDDB ************////////
  ClearData() {
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success inside Clear")
      console.log(this.db)
      this.transaction = this.db.transaction(['data'], 'readwrite');
      var objectStore = this.transaction.objectStore("data");
      var objectStoreRequest = objectStore.clear();
      objectStoreRequest.onsuccess = function (event) {
        console.log("Data Cleared")
      }
    }
  }

  /////////*************** DELETE SECTOR'S DATA FROM INDEXEDDB ***********////////////
  ClearDataSector() {
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success Sector inside Clear")
      console.log(this.db)
      this.transaction = this.db.transaction(['sector'], 'readwrite');
      var objectStore = this.transaction.objectStore("sector");
      var objectStoreRequest = objectStore.clear();
      objectStoreRequest.onsuccess = function (event) {
        console.log("Data Sector Cleared")
      }
    }
  }

  /// ***** Not Used 
  public getDataClient(map, markercluster, icon) {
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      this.db = event.target.result;
      console.log("success")
      console.log(this.db)
      this.transaction = this.db.transaction(['data'], 'readwrite');
      var objectStore = this.transaction.objectStore("data");
      var objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = function (event) {
        var all = event.target.result
        all.forEach(element => {
          console.log("---")
          var elm = JSON.parse(element.Valeur);
          var Point = { _id: element._id, geometry: elm }
          var geojsonPoint: geojson.Point = Point.geometry.geometry
          var marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: icon })
            }
          });
          markercluster.addLayer(marker)
          map.addLayer(markercluster);
        });
      }
    }
  }

}
