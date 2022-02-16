/// <reference lib="webworker" />
import Dexie from 'dexie';

function clearSector(data, role) {
  var request = indexedDB.open("off", 29)
  request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
    var db = event.target.result;
    var transaction = db.transaction(['sector'], 'readwrite');
    var objectStore = transaction.objectStore("sector");
    var objectStoreRequest = objectStore.clear();
    objectStoreRequest.onsuccess = function (event) {
      var db = new Dexie("off").open().then((res) => {
        res.table("sector").bulkPut(data).then((lastKey) => {
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
    var transaction = db.transaction(['pdvs'], 'readwrite');
    var objectStore = transaction.objectStore("pdvs");
    var objectStoreRequest = objectStore.clear();
    objectStoreRequest.onsuccess = function (event) {
      //StorePDVIndexdb()
      console.log("store PDVS")
      var db = new Dexie("off").open().then((res) => {
        res.table("pdvs").bulkAdd(RessPDV).then((lastKey) => {
          postMessage("done");

        });

      });

    }
  }
}

function Clustering(markersCluster, condition) {
  var cluster = []
  var t = markersCluster.getLayers()
  var i = 0;
  while (i < t.length) {
    //ar.push(t[i])
    var layer = t[i]
    if (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple") {
      if (condition == "Audit") {
        cluster.push(layer)
      }
    }
    i++;
  }
  postMessage({cluster:cluster});
}

addEventListener('message', ({ data }) => {
  if (data.type == "sector") {
    clearSector(data.res, data.role)
  }
  else if (data.type == "pdv") {
    ClearData(data.res)
  } else if (data.type == "cluser") {
    //console.log(data)
   // Clustering(data.markers, data.condition)
  }

});
