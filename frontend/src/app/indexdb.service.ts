import { Injectable } from '@angular/core';
import { ClientsService } from './clients.service';

@Injectable({
  providedIn: 'root'
})
export class IndexdbService {
  db;transaction;
  

  constructor(private client:ClientsService) { }

  createDatabase() {
    var request = window.indexedDB.open("off",4)
    request.onerror = function (event: Event & { target: { result: IDBDatabase }}) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onupgradeneeded=(event)=>{
      console.log(event.target)
      this.db=request.result
      console.log("upgrade")
      var objectStore = this.db.createObjectStore("data", { keyPath: '_id' });
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
          console.log("done")
        };
      });
      //console.log(allclient)
    });
    
  }
  GetClient(){
    var allclient=[]
  }
}
