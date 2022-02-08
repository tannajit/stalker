/// <reference lib="webworker" />
import Dexie from 'dexie';

function clearSector(data,role){
  var request = indexedDB.open("off", 29)
  request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
    var db = event.target.result;
    console.log("success inside Clear")
    //console.log(this.db)
    var transaction = db.transaction(['sector'], 'readwrite');
    var objectStore = transaction.objectStore("sector");
    var objectStoreRequest = objectStore.clear();
    objectStoreRequest.onsuccess = function (event) {
      console.log("Data Cleared")
      console.log("$$$$$$$ DONE Clearing Secctor $$$$$$$$")
      var db = new Dexie("off").open().then((res) => {
          res.table("sector").bulkPut(data).then((lastKey) => {
            //console.log(" Call Sector Not Admin ")
            //this.worker.postMessage("sector")
            if (role == "Admin") {
              postMessage("done");
            }
          });
      });
    }
  }
}
function ClearData(RessPDV) {
  var request = indexedDB.open("off", 29)
  request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
    var db = event.target.result;
    console.log("success inside Clear")
    //console.log(this.db)
    var transaction = db.transaction(['pdvs'], 'readwrite');
    var objectStore = transaction.objectStore("pdvs");
    var objectStoreRequest = objectStore.clear();
    objectStoreRequest.onsuccess = function (event) {
      console.log("Data Cleared")
      console.log("$$$$$$$ DONE Clearing $$$$$$$$")
      //StorePDVIndexdb()
      var db = new Dexie("off").open().then((res) => {
        res.table("pdvs").bulkAdd(RessPDV).then((lastKey) => {
          console.log("Add PDVs")
          postMessage("done");
      
        });

      });
     
    }
  }
}
addEventListener('message', ({ data }) => {
  if (data.type == "sector") {
    clearSector(data.res, data.role)
  }
  else if (data.type == "pdv") {
    ClearData(data.res)
  }

});
