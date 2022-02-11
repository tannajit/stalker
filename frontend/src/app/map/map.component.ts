import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import * as geojson from 'geojson';
import { ClientsService } from '../clients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgZone } from '@angular/core';
import * as turf from '@turf/turf';
import { IndexdbService } from '../indexdb.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ExtractSelectComponent } from '../extract-select/extract-select.component';
import { takeUntil } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';
import Dexie from 'dexie';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  /// ****** constructor *****/
  constructor(
    private _serviceClient: ClientsService,
    private _router: Router,
    private zone: NgZone,
    private aroute: ActivatedRoute,
    private index: IndexdbService,
    private dialog: MatDialog) {
    //this.index.createDatabase();
    this.user = JSON.parse(localStorage.getItem("user"))
    this.version = index.version;
    var db = new Dexie("off").open().then((res) => {
      this.Dexie = res;
    });
  }
  dialogRef: MatDialogRef<ClientInfoComponent>;
  dialogExtract: MatDialogRef<ExtractSelectComponent>;
  dialogConf: MatDialogRef<ConfirmationDialogComponent>;
  private destroyed: Subject<void> = new Subject<void>();
  private map;
  public content = null;
  startTime;
  endTieme;
  ArrayIDS = []
  ArrayIdSector = [];
  myCercle;
  Dexie;
  option_done = "All"
  mySector = 'hello';
  IDGeomerty;
  icon = L.icon({
    iconUrl: 'assets/green.png',
    iconSize: [12, 12],
  });
  markersCluster
  markerClusterSector
  option_retail = "All"
  cluster = new L.MarkerClusterGroup();
  DeletedMarkerCluster = new L.MarkerClusterGroup();
  lat = 33.61041004;
  lon = -7.527008504;
  myMarker;
  statusAddClient = false;
  user;
  AllSecteurs = [];
  version = 29;
  marker;
  worker = new Worker(new URL('./map.worker', import.meta.url));
  ShowFilter = false;
  ///create map 
  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 8,
      zoomControl: false
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 2
    });
    tiles.addTo(this.map);
    this.markersCluster = this._serviceClient.markersCluster;
    this.markerClusterSector = this._serviceClient.markerClusterSector;
    if (this.markersCluster.getLayers().length == 0) {
      this.markersCluster.clearLayers()
      this.PutDataInMap();
    }
    this.map.addLayer(this.markerClusterSector)
    this.map.addLayer(this.markersCluster);
    this.map.addControl(L.control.zoom({ position: 'bottomleft' }));
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  //////////////*** Init map ////////
  ngAfterViewInit(): void {
    this.initMap();
    this.aroute.params.subscribe(params => {
      if (params['lat']) {
        this.map.flyTo(new L.LatLng(params['lat'], params['long']), 18);
      } else {
        this.getLocation()
        interval(1000).pipe(takeUntil(this.destroyed)).subscribe(x => {
          this.WatchPosition()
        })
      }
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();

  }
  ///// *** this function watch your location realtime /////
  WatchPosition() {
    navigator.geolocation.watchPosition((pos) => {
      let raduis = 50000;
      if (this.myCercle !== undefined) {
        this.map.removeLayer(this.myCercle)
      }
      this.lat = pos.coords.latitude
      this.lon = pos.coords.longitude
      this.myCercle = L.circle([pos.coords.latitude, pos.coords.longitude], { color: "blue", fillColor: "#C9EAFA", radius: raduis }).addTo(this.map);
      this._serviceClient.getPosition({ "Map": new L.LatLng(pos.coords.latitude, pos.coords.longitude), "Raduis": raduis });
      if (this.myMarker != undefined) {
        this.map.removeLayer(this.myMarker)
      }

      if (this.myMarker == undefined) {
        this.map.setView(new L.LatLng(this.lat, this.lon), 15, { animation: true });
      }
      this.myMarker = L.circleMarker([this.lat, this.lon], {
        color: "#163AE3 ",
        fillOpacity: 1,
        radius: 3.0
      }).addTo(this.map);

    }, (err) => {
     // console.log(`err :${err}`)
    },
      {
        enableHighAccuracy: true,
        timeout: 3000
      })

  }
  ///////*** This function open map with your location  */
  getLocation() {
    var options = {
      enableHighAccuracy: false,
      timeout: 1000,
      maximumAge: 2000
    };
    // interval(1000).subscribe(x => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          this.map.setView(new L.LatLng(this.lat, this.lon), 15, { animation: true });
          if (this.myMarker != undefined) {
            this.map.removeLayer(this.myMarker)
          }
          this.myMarker = L.circleMarker([this.lat, this.lon], {
            color: "#163AE3",
            fillOpacity: 1,
            radius: 3
          }).addTo(this.map);
        }
      },
        (error: GeolocationPositionError) => console.log(), options);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  ////***  Fly to location **/////
  locate() {
    this.getLocation()
    this.map.setView(new L.LatLng(this.lat, this.lon), 15, { animation: true });
    this.Insid();
  }

  // open dialog with client info
  openDialog(content) {
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });

  }
  ///// this function fill the map with data  
  PutDataInMap() {
    var marks = []
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      transaction = db.transaction(['pdvs'], 'readwrite');
      const objectStore = transaction.objectStore('pdvs');
      const objectStoreRequest = objectStore.getAll();
      //sector
      var transactions = db.transaction(['sector'], 'readwrite');
      const objectStores = transactions.objectStore('sector');
      const objectStoreRequests = objectStores.getAll();
      objectStoreRequests.onsuccess = event => {
        var all = event.target.result;
        this.markersCluster.clearLayers();
        var length = all.length;
        var j = 0;
        while (j < length) {
          var element = all[j]
          var Point = { _id: element._id, geometry: element.info.geometry };
          this.ArrayIdSector.push(element._id)
          var marker = L.geoJSON(Point.geometry, {
            onEachFeature: (feature, layer) => {
              layer.bindPopup(String(element.nameSecteur));
            }, style: { color: '#CD9575', fillOpacity: 0.1 }
          });
          this.markerClusterSector.addLayer(marker);
          this.AllSecteurs.push({ coor: Point.geometry.geometry.coordinates, sector: Point.geometry.properties.idSecteur });
          j++;
        }
      }
      objectStoreRequest.onsuccess = event => {
        var all = event.target.result;
        this.markersCluster.clearLayers();
        var length = all.length;
        var i = 0;
        while (i < length) {
          var element = all[i]
          const Point = { _id: element._id, geometry: element.geometry };
          const geojsonPoint: geojson.Point = element.geometry;
          var iconClient = L.icon({ iconUrl: 'assets/' + element.geometry.properties?.status + '.png', iconSize: [8, 8] });
          var marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: iconClient });
            }
          });
          marker.on('click', () => {
            this.content = Point.geometry;
            this.zone.run(() => this.openDialog(Point));
            this._serviceClient.getPosition({ "Client": new L.LatLng(element.geometry.geometry.coordinates[1], element.geometry.geometry.coordinates[0]) });
          });
          if (element.geometry.properties?.status == 'deleted' && (this.user.role == "Admin" || this.user.role == "Back Office")) {
            this.DeletedMarkerCluster.addLayer(marker)
          } else if (element.geometry.properties?.status != 'deleted') {
            marks.push(marker)
          }
          i++;
          if (i == length) {
            this.markersCluster.addLayers(marks)
          }
        }
      }
    }
  }
  ///////////// this function get PDV data from DataBase
  getPDVFromAPI() {
    this._serviceClient.getAllClient().subscribe(async (ress) => {
      this.worker.postMessage({ type: "pdv", res: ress, ArrayIDS: this.ArrayIDS })
      var length = ress.length;
      var i = 0;
      this.markersCluster.clearLayers();
      while (i < length) {
        var element = ress[i]
        const Point = { _id: element._id, geometry: element.geometry };
        const geojsonPoint: geojson.Point = element.geometry;
        var iconClient = L.icon({ iconUrl: 'assets/' + element.geometry.properties?.status + '.png', iconSize: [8, 8] });
        var marker = L.geoJSON(geojsonPoint, {
          pointToLayer: (point, latlon) => {
            return L.marker(latlon, { icon: iconClient });
          }
        });
        marker.on('click', () => {
          this.content = Point.geometry;
          this.zone.run(() => this.openDialog(Point));
          this._serviceClient.getPosition({ "Client": new L.LatLng(element.geometry.geometry.coordinates[1], element.geometry.geometry.coordinates[0]) });
        });
        if (element.geometry.properties?.status == 'deleted' && (this.user.role == "Admin" || this.user.role == "Back Office")) {
          this.DeletedMarkerCluster.addLayer(marker)
        } else if (element.geometry.properties?.status != 'deleted') {
          this.markersCluster.addLayer(marker);
        }
        i++;
      }
    });
  }
  ///////////// this function get Sector data from DataBase
  getSectorFromAPI() {
    this._serviceClient.getAllSecteurs().subscribe(res1 => {
      this.worker.postMessage({ type: "sector", res: res1, ArrayIdSector: this.ArrayIdSector, role: this.user.role })
      this.markerClusterSector.clearLayers();
      res1.forEach(element => {
        var Point = { _id: element._id, geometry: element.info.geometry };
        this.ArrayIdSector.push(element._id)
        var marker = L.geoJSON(Point.geometry, {
          onEachFeature: (feature, layer) => {
            layer.bindPopup(String(element.nameSecteur));
          }, style: { color: '#CD9575', fillOpacity: 0.1 }
        });
        this.markerClusterSector.addLayer(marker);
        this.AllSecteurs.push({ coor: Point.geometry.geometry.coordinates, sector: Point.geometry.properties.idSecteur });
      });
    });
  }

  //// this function synchronize the data ( get data updated from Database )
  async sync() {
    this.startTime = performance.now();
    console.log("--- Start Sync ---- ")
    this.getSectorFromAPI();
    if (this.user.role != "Admin") {
      this.getPDVFromAPI();
    }
    this.dialogConf = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true
    });
    this.dialogConf.componentInstance.confirmMessage = "sync"
    if (typeof Worker !== 'undefined') {
      this.worker.onmessage = (e) => {
        let t2 = performance.now();
        if (this.dialogConf) {
          console.log(t2 - this.startTime);
          console.log("---  End Sync ---- ")
          this.dialogConf.close()
          this.openAlertDialog("Sync is Done")
        }
      }
    }
  }
  /////////////////////////////////////////////////////////////////

  //////////********  Check if location inside Sector ***********//////////
  isMarkerInsidePolygon(marker, poly) {
    const polyPoints = poly.getLatLngs();
    const x = marker.getLatLng().lat, y = marker.getLatLng().lng;
    let inside = false;
    for (let i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
      const xi = polyPoints[i].lat, yi = polyPoints[i].lng;
      const xj = polyPoints[j].lat, yj = polyPoints[j].lng;

      const intersect = ((yi > y) != (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) { inside = !inside; }
    }
    return inside;
  }

  Insid() {
    this.statusAddClient = false;
    this.AllSecteurs.forEach(elem => {
      const lat = this.myMarker._latlng.lat;
      const lon = this.myMarker._latlng.lng;
      const test = turf.point([lon, lat]);
      const poly = turf.polygon(elem.coor[0]);
      if (turf.booleanPointInPolygon(test, poly)) {
        this.statusAddClient = true;
        this.mySector = elem.sector;
      }
    });

  }
  ////////////////////////////
  /// Add PDV action 
  addPDV() {
    this._router.navigate(['/addclient', this.mySector]).then(() => {
      window.location.reload();
    });

  }
  //////////////////////////////////////////////////////////////////
  ///////********************* Open Dialog *********************////////

  openAlertDialog(Message) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: Message,
        buttonText: {
          ok: 'Ok',
        }
      }
    });
  }
  ////////////////////////////////////////////////////////////////////


  ///////***** Filter Done/Not Done PDV **********///////////////////


  cluster1 = new L.MarkerClusterGroup();
  onChange4() {
    this.map.removeLayer(this.markersCluster)
    this.map.removeLayer(this.DeletedMarkerCluster);
    if (this.cluster1.getLayers().length > 0) {
      this.cluster1.clearLayers();
      this.map.removeLayer(this.cluster1)
    }
    if (this.cluster.getLayers().length > 0) {
      this.cluster.clearLayers();
      this.map.removeLayer(this.cluster1)
    }
    if (this.option_done == "Deleted") {
      this.map.addLayer(this.DeletedMarkerCluster)
    }
    if (this.option_done == "Not_Done") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple") {
          if (this.option_retail == "Audit") {
            if (layer.feature.properties?.TypeDPV == "Gros") {
              this.cluster1.addLayer(layer)
            }
          } else if (this.option_retail == "Audit_Retail") {
            if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
              this.cluster1.addLayer(layer);
            }
          } else if (this.option_retail == "All" || this.option_retail == "") {
            this.cluster1.addLayer(layer);
          }
        }
      });

      this.map.addLayer(this.cluster1)
    } else if (this.option_done == "Done") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green") {
          if (this.option_retail == "Audit") {
            if (layer.feature.properties?.TypeDPV == "Gros") {
              this.cluster1.addLayer(layer)
            }
          } else if (this.option_retail == "Audit_Retail") {
            if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
              this.cluster1.addLayer(layer);
            }
          } else if (this.option_retail == "All" || this.option_retail == "") {
            this.cluster1.addLayer(layer);
          }
        }
      });
      this.map.addLayer(this.cluster1)
      ///
    } else if (this.option_done == "Validated") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties.status == "green") {
          if (this.option_retail == "Audit") {
            if (layer.feature.properties?.TypeDPV == "Gros") {
              this.cluster1.addLayer(layer)
            }
          } else if (this.option_retail == "Audit_Retail") {
            if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
              this.cluster1.addLayer(layer);
            }
          } else if (this.option_retail == "All" || this.option_retail == "") {
            this.cluster1.addLayer(layer);
          }
        }
      });
      this.map.addLayer(this.cluster1)
    }
    else if (this.option_done == "All") {
      this.markersCluster.eachLayer((layer: any) => {
        if (this.option_retail == "Audit") {
          if (layer.feature.properties?.TypeDPV == "Gros") {
            this.cluster1.addLayer(layer)
          }
        } else if (this.option_retail == "Audit_Retail") {
          if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
            this.cluster1.addLayer(layer);
          }
        } else if (this.option_retail == "All" || this.option_retail == "") {
          this.cluster1.addLayer(layer);
        }
      });
      this.map.addLayer(this.cluster1)
    }

  }
  ////////////////////////////////////////////////////////////////////////

  //////////////****************Filtrage Retail/AuditRetail ***********/////////////////

  onChange3() {
    this.map.removeLayer(this.markersCluster)
    if (this.cluster1.getLayers().length > 0) {
      this.cluster1.clearLayers();
      this.map.removeLayer(this.cluster1)
    }
    if (this.cluster.getLayers().length > 0) {
      this.cluster.clearLayers();
      this.map.removeLayer(this.cluster)
    }
    if (this.option_retail == "Audit") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties?.TypeDPV == "Gros") {
          if (this.option_done == "Validated" && layer.feature.properties.status == "green") {
            this.cluster.addLayer(layer)
          } else if (this.option_done == "Done" && (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green")) {
            this.cluster.addLayer(layer)
          }
          else if (this.option_done == "Not_Done" && (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple")) {
            // this.cluster.addLayer(layer)
          } else if (this.option_done == "All" || this.option_done == "") {
            this.cluster.addLayer(layer)
          }
        }
      });
    }
    else if (this.option_retail == "Audit_Retail") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties?.TypeDPV == "Detail"
          || layer.feature.properties?.TypeDPV == "Demi Gros") {
          if (this.option_done == "Validated" && layer.feature.properties.status == "green") {

            this.cluster.addLayer(layer)
          } else if (this.option_done == "Done" && (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green")) {
            this.cluster.addLayer(layer)
          }
          else if (this.option_done == "Not_Done" && (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple")) {

            this.cluster.addLayer(layer)
          } else if (this.option_done == "All" || this.option_done == "") {

            this.cluster.addLayer(layer)
          }
        }
      });

    } else {
      this.markersCluster.eachLayer((layer: any) => {
        if (this.option_done == "Validated" && layer.feature.properties.status == "green") {
          this.cluster.addLayer(layer)
        } else if (this.option_done == "Done" && (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green")) {
          this.cluster.addLayer(layer)
        }
        else if (this.option_done == "Not_Done" && (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple")) {
          this.cluster.addLayer(layer)
        } else if (this.option_done == "All" || this.option_done == "") {
          this.cluster.addLayer(layer)
        }
      });
    }
    this.map.addLayer(this.cluster)
  }

  /////////////////////////////////////////////////////////////



  ///////******** Search for the client By id ***********///////////

  openAlertSearch(mess) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: mess,
        buttonText: {
          ok: 'Ok',
        }
      }

    }).afterClosed()
  }

  /////////////////////////////////////////////////////////

  ///////************** Search for the client from indexDB ***********////////////

  SearchIndexDB(IDGeomerty) {
    if (IDGeomerty != undefined) {
      var db = new Dexie("off").open().then((res) => {
        res.table("pdvs").get({ "_id": IDGeomerty }).then(r => {
          if (r != undefined) {
            if (r.geometry.properties?.status != "deleted") {
              this.map.setView(new L.LatLng(r.geometry.geometry.coordinates[1], r.geometry.geometry.coordinates[0]), 30);
            } else {

              var mess = "No Such ID : " + IDGeomerty

              this.openAlertSearch(mess);
            }
          } else {
            var mess = "No Such ID : " + IDGeomerty
            this.openAlertSearch(mess);
          }

        });

      });

    } else {

      var mess = "Please Enter the ID"

      this.openAlertSearch(mess)

    }
  }
  //////////////////////////////////////////////////////////////////////////////////

  /////////////*********** EXTRACT DATA ******/////////////////
  extract() {
    this.dialogExtract = this.dialog.open(ExtractSelectComponent, {
      disableClose: true
    });
  }



  ////////////////////////////////////////////////////////////

}




