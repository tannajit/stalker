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
import * as XLSX from 'xlsx';



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
  private map;
  public content = null;
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

    tiles.addTo(this.map);
    this.getDataClient();
    this.getDataSector();
    this.map.addLayer(this.markersCluster);
    this.map.addControl(L.control.zoom({ position: 'bottomleft' }));

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
      }
    });
  }
 ///*** get Location */
  getLocation() {
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
          this.map.setView(new L.LatLng(this.lat, this.lon), 18, { animation: true });
          //this.myMarker = L.marker([this.lat, this.lon], { icon: this.location_icon };
          if (this.myMarker != undefined) {
            console.log("remove layer ")
            this.map.removeLayer(this.myMarker)
          }
          this.myMarker = L.circleMarker([this.lat, this.lon], {
            color: "#163AE3 ",
            //fillColor: "#f03",
            fillOpacity: 1,
            radius: 8.0
          }).addTo(this.map);
        }
      },
        (error: GeolocationPositionError) => console.log(error));
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

  }

  //////////*********** put  Client Info from IndexDB *******//////////////

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
        all.forEach(element => {
          const elm = JSON.parse(element.Valeur);
          const Point = { _id: element._id, geometry: elm };
          const geojsonPoint: geojson.Point = Point.geometry;
          const marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: this.getIcon(Point.geometry.properties.status) }); }
          });
          if (Point.geometry.properties?.nfc != undefined) {
            marker.on('click', () => {
              this.content = Point.geometry;
              this.zone.run(() => this.openDialog(Point));
            });
          } else {
            console.log("############# ici"+Point.geometry.properties.Nom_Client)
            marker.bindPopup('<h1> <b>Client Information</b></h1><p><b>Name:</b> ' + String(Point.geometry.properties.Nom_Client) + '</p><p><b>Sector Name: </b>' + String(Point.geometry.properties.Nom_du_Secteur) + '</p>');
          }
          this.markersCluster.addLayer(marker);
        });

      };
    };
  }
  /// list of icons
  getIcon(statuss) {
    const green = L.icon({ iconUrl: 'assets/green.png', iconSize: [10, 10] });
    const black = L.icon({ iconUrl: 'assets/black.png', iconSize: [10, 10] });
    const pink = L.icon({ iconUrl: 'assets/pink.png', iconSize: [10, 10] });
    const red_white = L.icon({ iconUrl: 'assets/r_white.png', iconSize: [10, 10] });
    const red = L.icon({ iconUrl: 'assets/red.png', iconSize: [10, 10] });
    const purple = L.icon({ iconUrl: 'assets/purple.png', iconSize: [10, 10]});
    switch (statuss) {
      case 'green':
        return green;
        break;
      case 'black':
        return black;
        break;
      case 'red_white':
        return red_white;
        break;
      case 'purple':
        return purple;
        break;
      case 'pink':
        return pink;
        break;
      case 'red':
        return red;
        break;
      // code block
    }
  }
////////////******* Put Sector in Map  *****////////////////////////////////
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
        all.forEach(element => {
          console.log('---');
          const elm = JSON.parse(element.Valeur);
          const Point = { _id: element._id, geometry: elm };
          const marker = L.geoJSON(Point.geometry, { style: { color: '#CD9575', fillOpacity: 0.1 } });
          marker.bindPopup(String(Point.geometry.properties.codeRegion));
          marker.addTo(this.map);
          this.markerClusterSector.addLayer(marker);
          this.AllSecteurs.push({ coor: Point.geometry.geometry.coordinates, sector: Point.geometry.properties.idSecteur });
        });
      };
    };
  }

  //////////////////********** Fill IndexDB after synchronize *******///////////////////////////
  PutData() {
    this.markersCluster.clearLayers();
    this.index.ClearData();
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success Sync');
      const allclient = [];
      this._serviceClient.getAllClient().subscribe(res => {
        res.forEach(element => {
          const geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
          allclient.push(geo);
          transaction = db.transaction(['data'], 'readwrite');
          const objectStore = transaction.objectStore('data');
          const request = objectStore.add(geo);
          request.onsuccess = function (event) {
            console.log('done Adding');
          };
        });
        this.getDataClient();
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
        res.forEach(element => {
          console.log('***sector***');
          console.log(element);
          const geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) };
          allclient.push(geo);
          transaction = db.transaction(['sector'], 'readwrite');
          const objectStore = transaction.objectStore('sector');
          const request = objectStore.add(geo);
          request.onsuccess = function (event) {
            console.log('done Adding Sector login');
          };
        });
        this.getDataSector();
      });
    };
  }
  /////////////////////////////////////////////////////////////////

  /////////////// ********* Synchronize Action **********/////////////////////////
  async sync() {
    this.PutData();
    this.openAlertDialog();
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
      console.log(elem)
      const lat = this.myMarker._latlng.lat;
      const lon = this.myMarker._latlng.lng;
      const test = turf.point([lon, lat]);
      const poly = turf.polygon(elem.coor[0]);
      if (turf.booleanPointInPolygon(test, poly)) {
        this.statusAddClient = true;
        this.mySector = elem.sector;
        console.log(this.mySector);
        console.log("In sector ")
      } 
    });
  }
  //////////////////////////////////////////////////////////////////

  ///////********************* Open Dialog *********************////////

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'Synchronization is Done',
        buttonText: {
          ok: 'Ok',
        }
      }
    });
  }
  ////////////////////////////////////////////////////////////////////

  ///////***** Filter Done/Not Done PDV **********///////////////////
  option_done = ""
  
  onChange() {
    console.log(this.option_done)
    if (this.option_done == "Done") {
      console.log("Not green not validated should removed")
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties.status != "green") {
          this.markersCluster.removeLayer(layer);
        }
      })
    } else if (this.option_done == "Not_Done") {
      console.log("validated should be removed")
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties.status == "green") {
          this.markersCluster.removeLayer(layer);
        }
      })
    } else {
      console.log("All Data will be showed")
      this.markersCluster.clearLayers();
      this.getDataClient();
    }
  }
  ////////////////////////////////////////////////////////////////////////

  //////////////****************Filtrage Retail/AuditRetail ***********/////////////////
  option_retail = ""
  onChange2() {
    console.log(this.option_retail)
    if (this.option_retail == "Audit") {
      console.log("Gros will be showed")
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties?.TypeDPV == "Gros") {
          console.log(layer)
          this.markersCluster.removeLayer(layer)
        }
      })
    } else if (this.option_retail == "Audit_Retail") {
      console.log("Detail will be showed")
      this.markersCluster.eachLayer((layer: any) => {
        if (layer.feature.properties?.TypeDPV == "Detail") {
          console.log(layer)
          this.markersCluster.removeLayer(layer);
        }
      })
    } else {
      console.log("All Data will be showed")
      this.markersCluster.clearLayers();
      this.getDataClient();
    }
  }
  ///////////////////////////////////////////////////////////////

  ///////******** Search for a client By id ***********///////////
  Search(IDGeomerty) {
    console.log(IDGeomerty);
    //tslint:disable-next-line:no-shadowed-variable
    this._serviceClient.getClientByID(IDGeomerty).subscribe(res => {
      if (IDGeomerty != null) {
        this.map.setView(new L.LatLng(res["geometry"].geometry.coordinates[1], res["geometry"].geometry.coordinates[0]), 30, { animation: true }).addTo(this.map);
      }
    });
  }
  /////////////////////////////////////////////////////////

  ///////************** Search for the client from indexDB ***********////////////
  SearchIndexDB(IDGeomerty){
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
      var objectStoreRequest = objectStore.get(IDGeomerty);
      objectStoreRequest.onsuccess = (event) => {
        var elm = JSON.parse(objectStoreRequest.result.Valeur);
        console.log(elm.geometry.coordinates)
        this.map.setView(new L.LatLng(elm.geometry.coordinates[1], elm.geometry.coordinates[0]), 18);
      }
    }
  }
  //////////////////////////////////////////////////////////////////////////////////

  /////////////*********** EXTARCT DATA ******/////////////////
  exportexcel() {
    this._serviceClient.extract().subscribe(res => {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(res)
      //generate workbook and add the worksheet 
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      //save to file 
      XLSX.writeFile(wb, "Data_Extraction.xlsx");
    });
  }
  ////////////////////////////////////////////////////////////

}




