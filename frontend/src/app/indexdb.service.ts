import { Injectable } from '@angular/core';
import { ClientsService } from './clients.service';
import * as geojson from 'geojson';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Injectable({
  providedIn: 'root'
})

export class IndexdbService {
  db;transaction;
  
   version=6
  constructor(private client:ClientsService) { }

  createDatabase() {
    var request = window.indexedDB.open("off",this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase }}) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onupgradeneeded=(event)=>{
      console.log(event.target)
      this.db=request.result
      console.log("upgrade")
      var objectStore = this.db.createObjectStore("data", { keyPath: '_id' });
      console.log("create Sector ")
      var objectt=this.db.createObjectStore("sector", { keyPath: '_id' });
      console.log(objectt)
      
    }
    request.onsuccess=(event: Event & { target: { result: IDBDatabase }})=>{
      this.db=event.target.result;
      console.log(this.db) 
    }
  }


  AddItem() {
    var costumer={'_id':123,Valeur:"hafsa"}
    console.log(costumer)
    //const trans= this.db.transaction(['data'], 'readwrite');
    //objectStore.add(costumer)
    //console.log(objectStore)
    var allclient=[]
    this.client.getAllClient().subscribe(res=>{
      res.forEach(element => {
        var geo={_id:element._id,Valeur:JSON.stringify(element.geometry)}
        //console.log(geo)
        allclient.push(geo)
        this.transaction=this.db.transaction(['data'], 'readwrite');
        var objectStore =  this.transaction.objectStore("data");
        var request=objectStore.add(geo)
        request.onsuccess= function(event) {
          console.log("done Synchronize")
        };
      });
      //console.log(allclient)
    });
  }
  
  ClearData(){
    var request = window.indexedDB.open("off",this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase }}) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
      request.onsuccess=(event: Event & { target: { result: IDBDatabase }})=>{
        this.db=event.target.result;
        console.log("success inside Clear")
        console.log(this.db)
        this.transaction=this.db.transaction(['data'], 'readwrite');
        var objectStore =  this.transaction.objectStore("data");
        var objectStoreRequest = objectStore.clear();
        objectStoreRequest.onsuccess = function(event) {
          console.log("Data Cleared")
        }  
    } 
  }

  ClearDataSector(){
    var request = window.indexedDB.open("off",this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase }}) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
      request.onsuccess=(event: Event & { target: { result: IDBDatabase }})=>{
        this.db=event.target.result;
        console.log("success Sector inside Clear")
        console.log(this.db)
        this.transaction=this.db.transaction(['sector'], 'readwrite');
        var objectStore =  this.transaction.objectStore("sector");
        var objectStoreRequest = objectStore.clear();
        objectStoreRequest.onsuccess = function(event) {
          console.log("Data Sector Cleared")
        }  
    } 
  }

   /// ***** Not Used 
  public getDataClient(map,markercluster,icon){
    var request = window.indexedDB.open("off",this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase }}) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess=(event: Event & { target: { result: IDBDatabase }})=>{
      this.db=event.target.result;
      console.log("success")
      console.log(this.db)
      this.transaction=this.db.transaction(['data'], 'readwrite');
      var objectStore =  this.transaction.objectStore("data");
      var objectStoreRequest = objectStore.getAll();
    
      objectStoreRequest.onsuccess = function(event) {
        var all=event.target.result
        all.forEach(element => {
          console.log("---")
          var elm = JSON.parse(element.Valeur);
         // console.log(elm)
          var Point={_id:element._id,geometry:elm}
          var geojsonPoint: geojson.Point = Point.geometry.geometry
          var marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: icon })
              //return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
            }
          });
          markercluster.addLayer(marker)
          map.addLayer(markercluster);
        }); 
      }  
    } 
  }

}
