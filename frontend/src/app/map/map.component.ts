import { Component, AfterViewInit, HostListener } from '@angular/core';
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
import * as XLSX from 'xlsx';
import { ExtractSelectComponent } from '../extract-select/extract-select.component';
import { takeUntil, switchMap } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';


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
  }

  dialogRef: MatDialogRef<ClientInfoComponent>;
  dialogExtract: MatDialogRef<ExtractSelectComponent>;
  dialogConf: MatDialogRef<ConfirmationDialogComponent>;
  private destroyed: Subject<void> = new Subject<void>();

  private map;
  public content = null;
  myCercle;
  mySector = 'hello';
  IDGeomerty;
  icon = L.icon({
    iconUrl: 'assets/green.png',
    iconSize: [12, 12],
  });
  markersCluster = new L.MarkerClusterGroup();
  markerClusterSector = new L.MarkerClusterGroup();
  lat = 33.61041004;
  lon = -7.527008504;
  myMarker;
  statusAddClient = false;
  user;
  AllSecteurs = [];
  version = 6;
  ///create map 
  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 10,
      zoomControl: false
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 0
    });
    // this._location.ClearWatch();
    tiles.addTo(this.map);
    this.getDataClient();
    this.getDataSector();
    this.map.addLayer(this.markerClusterSector)
    this.map.addLayer(this.markersCluster);
    //this.map.addLayer(this.DeletedMarkerCluster);
    // this.getLocation()
    //this.getLocation1()
    this.map.addControl(L.control.zoom({ position: 'bottomleft' }));

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.WatchPosition()
  }

  //////////////*** Init map ////////
  ngAfterViewInit(): void {
    this.initMap();
    this.aroute.params.subscribe(params => {
      if (params['lat']) {
        console.log("laaaaaaaaaaaaaaaaaaaaaaat: " + params['lat'])
        console.log("loooooooooooooooong: " + params['long'])
        this.map.flyTo(new L.LatLng(params['lat'], params['long']), 18);
      } else {

        this.getLocation()
        interval(1000).pipe(takeUntil(this.destroyed)).subscribe(x => {
          this.WatchPosition()
          // 
        })

      }
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  WatchPosition() {
    navigator.geolocation.watchPosition((pos) => {
      // console.log(`latitude of watch :${pos.coords.latitude},longitude of watch:${pos.coords.longitude}`)
      console.log("watch")
      let raduis = 2000;
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
        this.map.setView(new L.LatLng(this.lat, this.lon), 17, { animation: true });
      }
      this.myMarker = L.circleMarker([this.lat, this.lon], {
        color: "#163AE3 ",
        fillOpacity: 1,
        radius: 8.0
      }).addTo(this.map);

    }, (err) => {
      console.log(`err :${err}`)
    },
      {
        enableHighAccuracy: true,
        timeout: 3000
      })

  }
  ///*** get Location */
  // radius = 30
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
          console.log('Latitude: ' + position.coords.latitude +
            ' Longitude: ' + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lon);
          this.map.setView(new L.LatLng(this.lat, this.lon), 17, { animation: true });
          if (this.myMarker != undefined) {
            this.map.removeLayer(this.myMarker)
          }
          this.myMarker = L.circleMarker([this.lat, this.lon], {
            color: "#163AE3 ",
            fillOpacity: 1,
            radius: 8.0
          }).addTo(this.map);
        }
      },
        (error: GeolocationPositionError) => console.log(error), options);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  ////***  Fly to location **/////
  locate() {
    this.getLocation()
    this.map.flyTo(new L.LatLng(this.lat, this.lon), 18);
    this.Insid();
  }

  // open dialog with client info
  openDialog(content) {
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });
    // this.
  }
  //////////*********** get PDV form IndexDB and put  Client Info from IndexDB *******//////////////
  DeletedMarkerCluster = new L.MarkerClusterGroup();
  public getDataClient() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success');
      console.log(db);
      transaction = db.transaction(['data'], 'readwrite');
      const objectStore = transaction.objectStore('data');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        const all = event.target.result;
        this.markersCluster.clearLayers();
        all.forEach((element, idx, array) => {
          if (idx === array.length - 1) {
            if (this.dialogConf) {
              this.dialogConf.close()
              this.openAlertDialog("Sync is Done")
            }
          }
          const elm = JSON.parse(element.Valeur);
          const Point = { _id: element._id, geometry: elm };
          const geojsonPoint: geojson.Point = Point.geometry;
          var iconClient = L.icon({ iconUrl: 'assets/' + Point.geometry.properties?.status + '.png', iconSize: [8, 8] });
         var  marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: iconClient });
            }
          });
          //marker.addTo(this.map);
          // if (Point.geometry.properties?.nfc != undefined) {
          marker.on('click', () => {
            this.content = Point.geometry;
            this.zone.run(() => this.openDialog(Point));
            this._serviceClient.getPosition({ "Client": new L.LatLng(Point.geometry.geometry.coordinates[1], Point.geometry.geometry.coordinates[0]) });

          });
          // } 
          // else {
          //console.log("############# ici"+Point.geometry.properties.Nom_Client)
          //  marker.bindPopup('<h1> <b>Client Information</b></h1><p><b>Name:</b> ' + String(Point.geometry.properties.NomPrenom) + '</p><p><b>Sector Name: </b>' + String(Point.geometry.properties.Nom_Secteur) + '</p>');
          //}

          if (Point.geometry.properties?.status == 'deleted' && (this.user.role == "Admin" || this.user.role == "Back Office")) {
            console.log(this.user.role)
            //this.markersCluster.addLayer(marker);
            this.DeletedMarkerCluster.addLayer(marker)
          } else if (Point.geometry.properties?.status != 'deleted') {
            // console.log("status",status)
            this.markersCluster.addLayer(marker);
          }
        });

      };
    };
  }


  ////////////******* Get Sector from IndexDB Put Sector in Map  *****////////////////////////////////
  public getDataSector() {

    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success');
      console.log(db);
      transaction = db.transaction(['sector'], 'readwrite');
      const objectStore = transaction.objectStore('sector');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        const all = event.target.result;
        this.markerClusterSector.clearLayers();
        all.forEach(element => {
          // var elm = JSON.parse(element.Valeur);
          
          //console.log(element)
          var  Point = { _id: element._id, geometry: element.Valeur.info.geometry };
          var  marker = L.geoJSON(Point.geometry, {  onEachFeature:  (feature, layer)=> {
            layer.bindPopup(String(element._id));
          },style: { color: '#CD9575', fillOpacity: 0.1 } });
         // marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
      
          this.markerClusterSector.addLayer(marker);
          this.AllSecteurs.push({ coor: Point.geometry.geometry.coordinates, sector: Point.geometry.properties.idSecteur });
        });
      };
    };
  }

  //////////////////********** Fill IndexDB after synchronize *******///////////////////////////
  PutData() {
    console.log("*************Put data***********")
    //console.log(this.map._layers)
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success Sync');
      const allclient = [];
      this._serviceClient.getAllClient().subscribe(async (res) => {
        ////////// Clear all 
        var request = window.indexedDB.open("off", this.version)
        request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
          console.log("Why didn't you allow my web app to use IndexedDB?!");
        };
        request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
          db = event.target.result;
          console.log("success inside Clear")
          var transaction = db.transaction(['data'], 'readwrite');
          var objectStore = transaction.objectStore("data");
          var objectStoreRequest = objectStore.clear();
          objectStoreRequest.onsuccess = (event) => {
            console.log("Data Cleared")
            console.log("*** done clearing****")
            res.forEach(element => {
              const geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
              allclient.push(geo);
              transaction = db.transaction(['data'], 'readwrite');
              const objectStore = transaction.objectStore('data');
              const request = objectStore.put(geo);
            });
            this.getDataClient();
            // this.openAlertDialog("Synchronozation in process Please wait ")
          }

        }
      });
    };
  }
  /////////***** Fill in indexDB with Sector info ******///////
  PutDataSector() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success Login');
      const allclient = [];
      this._serviceClient.getAllSecteurs().subscribe(res => {
        var transaction = db.transaction(['sector'], 'readwrite');
        var objectStore = transaction.objectStore("sector");
        var objectStoreRequest = objectStore.clear();
        objectStoreRequest.onsuccess = (event) => {
          console.log("Data Cleared")
          res.forEach(element => {
            delete element.points
            delete element.users
            ///
            const geo = {_id: element.nameSecteur, Valeur: element };
            allclient.push(geo);
            transaction = db.transaction(['sector'], 'readwrite');
            const objectStore = transaction.objectStore('sector');
            const request = objectStore.put(geo);
           /* request.onsuccess = function (event) {
              //console.log('done Adding Sector ');
            };*/
          });
          this.getDataSector();
        }
      });

    };
  }
  /////////////////////////////////////////////////////////////////

  /////////////// ********* Synchronize Action **********/////////////////////////
  // disbalel=true;
  async sync() {
    this.PutDataSector()
    this.PutData();
    this.dialogConf = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogConf.componentInstance.confirmMessage = "sync"
    console.log('Synchronize (Get data from the Database)');
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
      // console.log(elem)
      const lat = this.myMarker._latlng.lat;
      const lon = this.myMarker._latlng.lng;
      const test = turf.point([lon, lat]);
      const poly = turf.polygon(elem.coor[0]);
      if (turf.booleanPointInPolygon(test, poly)) {
        this.statusAddClient = true;
        this.mySector = elem.sector;
        // console.log(this.mySector);
        // console.log("In sector ")
      }
    });
  }

  addPDV() {
    //this._router.navigate(['/addclient', this.mySector])
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
  option_done = ""

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
              console.log("-------- Not Done Gros -----------")
              console.log(layer.feature.properties)
              this.cluster1.addLayer(layer)
            }
          } else if (this.option_retail == "Audit_Retail") {
            if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
              console.log("-------- Not Done Detail -----------")
              this.cluster1.addLayer(layer);
            }
          } else if (this.option_retail == "All" || this.option_retail == "") {
            console.log("-------- Not Done ALL  TYpe -----------")
            this.cluster1.addLayer(layer);
          }
        }
      });
      //console.log("*********** Add Cluster Not Done to the map ***********")
      this.map.addLayer(this.cluster1)
    } else if (this.option_done == "Done") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green") {
          if (this.option_retail == "Audit") {
            if (layer.feature.properties?.TypeDPV == "Gros") {
              console.log(" !!!!!!!!! Done Gros !!!!!!!!!!!!")
              console.log(layer.feature.properties)
              this.cluster1.addLayer(layer)
            }
          } else if (this.option_retail == "Audit_Retail") {
            if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
              console.log(" !!!!!!!!! Done Detail !!!!!!!!!!!!")
              this.cluster1.addLayer(layer);
            }
          } else if (this.option_retail == "All" || this.option_retail == "") {
            console.log(" !!!!!!!!! Done All TYpe !!!!!!!!!!!!")
            this.cluster1.addLayer(layer);
          }
        }
      });
      ////
      console.log("&&&&&&&&&&&&&&&&&& ")
      console.log(this.cluster1.getLayers().length)
      this.map.addLayer(this.cluster1)
      ///
    } else if (this.option_done == "Validated") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties.status == "green") {
          if (this.option_retail == "Audit") {
            if (layer.feature.properties?.TypeDPV == "Gros") {
              console.log(" !!!!!!!!! Done Gros !!!!!!!!!!!!")
              console.log(layer.feature.properties)
              this.cluster1.addLayer(layer)
            }
          } else if (this.option_retail == "Audit_Retail") {
            if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
              console.log(" !!!!!!!!! Done Detail !!!!!!!!!!!!")
              this.cluster1.addLayer(layer);
            }
          } else if (this.option_retail == "All" || this.option_retail == "") {
            console.log(" !!!!!!!!! Done All TYpe !!!!!!!!!!!!")
            this.cluster1.addLayer(layer);
          }
        }
      });
      ////
      console.log("&&&&&&&&&&&&&&&&&& ")
      console.log(this.cluster1.getLayers().length)
      this.map.addLayer(this.cluster1)
      ///
    }
    else if (this.option_done == "All") {
      // console.log("All Data will be showed")
      //console.log(this.detailCluster.getLayers().length)
      this.markersCluster.eachLayer((layer: any) => {
        if (this.option_retail == "Audit") {
          if (layer.feature.properties?.TypeDPV == "Gros") {
            console.log("--------- All  Gros  ----------")
            console.log(layer.feature.properties)
            this.cluster1.addLayer(layer)
          }
        } else if (this.option_retail == "Audit_Retail") {
          if (layer.feature.properties?.TypeDPV == "Detail" || layer.feature.properties?.TypeDPV == "Demi Gros") {
            console.log("--------- All  Detail  ----------")
            this.cluster1.addLayer(layer);
          }
        } else if (this.option_retail == "All" || this.option_retail == "") {
          console.log("--------- All  All type  ----------")
          //this.doneCluster = this.markersCluster
          //this.ma
          this.cluster1.addLayer(layer);
        }

      });
      //console.log(this.doneCluster.getLayers().length)
      this.map.addLayer(this.cluster1)
    }

  }
  ////////////////////////////////////////////////////////////////////////

  //////////////****************Filtrage Retail/AuditRetail ***********/////////////////
  option_retail = ""
  cluster = new L.MarkerClusterGroup();
  onChange3() {
    this.map.removeLayer(this.markersCluster)
    if (this.cluster1.getLayers().length > 0) {
      this.cluster1.clearLayers();
      this.map.removeLayer(this.cluster1)
    }
    if (this.cluster.getLayers().length > 0) {
      this.cluster.clearLayers();
      this.map.removeLayer(this.cluster1)
    }
    if (this.option_retail == "Audit") {
      this.markersCluster.eachLayer((layer: any) => {

        if (layer.feature.properties?.TypeDPV == "Gros") {
          console.log("*** sb7an lah *** ")
          if (this.option_done == "Validated" && layer.feature.properties.status == "green") {
            console.log("**************** Gros Done ***************")
            this.cluster.addLayer(layer)
          } else if (this.option_done == "Done" && (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green")) {
            this.cluster.addLayer(layer)
          }
          else if (this.option_done == "Not_Done" && (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple")) {
            console.log("******************* Gros Not Done *********************")
            this.cluster.addLayer(layer)
          } else if (this.option_done == "All" || this.option_done == "") {
            console.log("************************ Gros ALL ***********************")
            this.cluster.addLayer(layer)
          }
          //this.cluster.addLayer(layer)
        }
      });
    }
    else if (this.option_retail == "Audit_Retail") {
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties?.TypeDPV == "Detail"
          || layer.feature.properties?.TypeDPV == "Demi Gros") {

          /*if (this.option_done == "Done" && layer.feature.properties.status == "green") {
            console.log("**************** Gros Done ***************")
            this.cluster.addLayer(layer)
          } else if (this.option_done == "Not_Done" && layer.feature.properties.status != "green") {
            console.log("******************* Gros Not Done *********************")
            this.cluster.addLayer(layer)
          } else if (this.option_done == "All" || this.option_done == "") {
            console.log("************************ Gros ALL ***********************")
            this.cluster.addLayer(layer)
          }*/

          if (this.option_done == "Validated" && layer.feature.properties.status == "green") {
            console.log("**************** Gros Done ***************")
            this.cluster.addLayer(layer)
          } else if (this.option_done == "Done" && (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green")) {
            this.cluster.addLayer(layer)
          }
          else if (this.option_done == "Not_Done" && (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple")) {
            console.log("******************* Gros Not Done *********************")
            this.cluster.addLayer(layer)
          } else if (this.option_done == "All" || this.option_done == "") {
            console.log("************************ Gros ALL ***********************")
            this.cluster.addLayer(layer)
          }
        }
      });

    } else {
      this.markersCluster.eachLayer((layer: any) => {

        console.log("*** sb7an lah *** ")
        if (this.option_done == "Validated" && layer.feature.properties.status == "green") {
          console.log("**************** Gros Done ***************")
          this.cluster.addLayer(layer)
        } else if (this.option_done == "Done" && (layer.feature.properties.status == "purple" || layer.feature.properties.status == "green")) {
          this.cluster.addLayer(layer)
        }
        else if (this.option_done == "Not_Done" && (layer.feature.properties.status != "green" && layer.feature.properties.status != "purple")) {
          console.log("******************* Gros Not Done *********************")
          this.cluster.addLayer(layer)
        } else if (this.option_done == "All" || this.option_done == "") {
          console.log("************************ Gros ALL ***********************")
          this.cluster.addLayer(layer)
        }
      });
    }
    this.map.addLayer(this.cluster)
  }

  /////////////////////////////////////////////////////////////



  ///////******** Search for the client By id ***********///////////
  Search(IDGeomerty) {
    console.log(IDGeomerty);
    //tslint:disable-next-line:no-shadowed-variable
    this._serviceClient.getClientByID(IDGeomerty).subscribe(res => {
      console.log("res ", res)
      if (IDGeomerty != null) {
        this.map.setView(new L.LatLng(res["geometry"].geometry.coordinates[1], res["geometry"].geometry.coordinates[0]), 30, { animation: true }).addTo(this.map);
      }
    })
  }
  horsCx = false
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
    console.log("Update in IndexedDB")
    var db, transaction;
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      transaction = db.transaction(['data'], 'readwrite');
      var objectStore = transaction.objectStore("data");
      if (IDGeomerty != null) {
        var objectStoreRequest = objectStore.get(IDGeomerty);

        objectStoreRequest.onsuccess = (event) => {

          if (objectStoreRequest.result != undefined) {
            var elm = JSON.parse(objectStoreRequest.result.Valeur);
            // console.log(elm.geometry.coordinates)
            this.map.setView(new L.LatLng(elm.geometry.coordinates[1], elm.geometry.coordinates[0]), 30);
          }
          else {
            var mess = "Be sure of the id :" + IDGeomerty
            this.openAlertSearch(mess);
          }

        }





      } else {
        var mess = "Please Enter the ID"
        this.openAlertSearch(mess)
      }
      console.log("objectStoreRequest", objectStoreRequest)

    }
  }

  //////////////////////////////////////////////////////////////////////////////////

  /////////////*********** EXTRACT DATA ******/////////////////
  extract() {
    this.dialogExtract = this.dialog.open(ExtractSelectComponent);
  }



  ////////////////////////////////////////////////////////////

}




