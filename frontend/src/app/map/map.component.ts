import { Component, AfterViewInit, HostListener } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import * as geojson from 'geojson';
import { ClientsService } from '../clients.service';
import { interval } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgZone } from '@angular/core';
import * as turf from '@turf/turf';
import { IndexdbService } from '../indexdb.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { error } from 'protractor';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';



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
    private aroute:ActivatedRoute,
    private index: IndexdbService,
    private dialog: MatDialog) { this.index.createDatabase(); }

  dialogRef: MatDialogRef<ClientInfoComponent>;
  private map;
  public content = null;
  mySector = 'hello';
  IDGeomerty;
  icon = L.icon({
    iconUrl: 'assets/green.png',
    iconSize: [12, 12],
  });

  location_icon = L.icon({
    iconUrl: 'assets/location.png',
    iconSize: [30, 30]
  });

  clientwithNFC_icon = L.icon({
    iconUrl: 'assets/blue.png',
    iconSize: [15, 15]
  });

  clientwithoutNFC_icon = L.icon({
    iconUrl: 'assets/red.png',
    iconSize: [15, 15]
  });


  markersCluster = new L.MarkerClusterGroup();
  markerClusterSector = new L.MarkerClusterGroup();
  lat = 33.61041004;
  lon = -7.527008504;
  myMarker;
  statusAddClient = false;

  AllSecteurs = [];
  MarkerClusterSector;
  version = 6;

  // test faaaaaaaaaaaaadmaaaaaaaa
  lati;
  longi;
  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 10,
      zoomControl: false
    });

    const zoomOptions = {
      zoomInText: '+',
      zoomOutText: '-',
    };

    // const zoom = L.control.zoom(zoomOptions);
    const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 0
    });


    // const locationControl = {
    //   position: 'bottomleft',
    //   strings: {
    //       title: "Show me where I am, yo!"
    //   }}

    // const lc = L.control.locate(locationControl)

    // lc.addTo(this.map);
    // zoom.addTo(this.map);

    tiles.addTo(this.map);
    this.getDataClient();
    this.getDataSector();
    this.map.addLayer(this.markersCluster);
    this.map.addControl(L.control.zoom({ position: 'bottomleft' }));

  }
  //////////////
  Search(IDGeomerty) {
    console.log(IDGeomerty);
    // tslint:disable-next-line:no-shadowed-variable
    
      this._serviceClient.getClientByID(IDGeomerty).subscribe(res => {
      if(IDGeomerty!=null){
      this.map.setView(new L.LatLng(res["geometry"].geometry.coordinates[1], res["geometry"].geometry.coordinates[0]), 30, { animation: true }).addTo(this.map);
       }
    });
  }
  //////////////////////
  ngAfterViewInit(): void {

   
    //this.getLocation();
    this.initMap();
    this.aroute.params.subscribe( params =>{
      console.log("laaaaaaaaaaaaaaaaaaaaaaat: "+params['lat'])
      console.log("loooooooooooooooong: "+params['long'])
      var lati = params['lat']
      var longi= params['long']
      this.map.flyTo(new L.LatLng(lati,longi),20);
      // this.map.setView(new L.LatLng(params['lat'], params['long']), 11, { animation: true }); 
      }    
    )
  
  }

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
          this.map.setView(new L.LatLng(this.lat, this.lon), 11, { animation: true });
          //this.myMarker = L.marker([this.lat, this.lon], { icon: this.location_icon });
          this.myMarker=L.circleMarker([this.lat,this.lon], {color: "black",
          //fillColor: "#f03",
          fillOpacity: 1,
          radius: 10.0}).addTo(this.map);
          // this.myMarker.bindPopup("my")
         // this.myMarker.addTo(this.map);

        }
      },
        (error: GeolocationPositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
    
    // });
  }

  locate() {
    this.getLocation()
    this.map.flyTo(new L.LatLng(this.lat, this.lon), 15);
    this.Insid();
  }

  getClient() {
    const client = this._serviceClient.getClient().subscribe(res => {
      console.log('*********** ');
      console.log(res);
      res.forEach(element => {

        console.log(element.lat, element.lon);
        if (element.status === 'red') {

          const popupOptions = {
            maxWidth: 800,
            className: 'popup'
          };

          L.marker([element.lat, element.lon], { icon: this.clientwithoutNFC_icon }).addTo(this.map).on('click', () => {
            this.content = element;
            this.zone.run(() => this.openDialog(element));
          });
        }
        if (element.status === 'green') {
          L.marker([element.lat, element.lon], { icon: this.clientwithNFC_icon }).addTo(this.map);

        }

      });
    });
    console.log(client);

  }

  // open dialog with client info
  openDialog(content) {
    // console.log(content)
    this.dialogRef = this.dialog.open(ClientInfoComponent, { data: content });

  }
  /////////////// *************get data  of clients and sectors **********************///////////////
  async getClients() {
    const arr = [];
    this._serviceClient.getAllClient().subscribe(
      res => {
        res.forEach(element => {
          // console.log("@@@@@@@@@@@@@@@@@@@")
          // console.log(element.geometry)
          const geojsonPoint: geojson.Point = element.geometry.geometry;
          const marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: this.icon });
              // return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
            }
          });
         // this.markersCluster.addLayer(marker);
          if (element.geometry.properties?.nfc != undefined) {

            marker.on('click', () => {
              this.content = element.geometry;
              this.zone.run(() => this.openDialog(element.geometry));
            });
          } else {
            marker.bindPopup('<h1> <b>Client Information</b></h1><p><b>Name:</b> ' + String(element.geometry.properties.Nom_Client) + '</p><p><b>Sector Name: </b>' + String(element.geometry.properties.Nom_du_Secteur) + '</p>');
          }
          marker.addTo(this.map);
        });
      });
    // console.log(await arr)
    return await arr;
  }
  async getAllSecteurs() {

    this._serviceClient.getAllSecteurs().subscribe(
      res => {
        // console.log(res)
        res.forEach(element => {
          const marker = L.geoJSON(element.geometry, { style: { color: 'red' } });
          marker.bindPopup(String(element.geometry.properties.codeRegion));
          marker.addTo(this.map);
          this.AllSecteurs.push({ coor: element.geometry.geometry.coordinates, sector: element.geometry.properties.idSecteur });
        });
      });
    // console.log(await arr)
    // return await arr;
  }

  // $$$ from IndexDB $$$////

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
          console.log('---');
          const elm = JSON.parse(element.Valeur);
          const Point = { _id: element._id, geometry: elm };
          console.log("££££££££££££££££££££ Point ££££££££££££££££££")
          console.log(Point);
          const geojsonPoint: geojson.Point = Point.geometry;
          console.log(geojsonPoint)
          const marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              console.log(point);
              return L.marker(latlon, { icon: this.getIcon(Point.geometry.properties.status) });
            }
          });
          
          if (Point.geometry.properties?.nfc != undefined) {
            //Point.geometry.idGeo = Point._id;
            marker.on('click', () => {
              this.content = Point.geometry;
              this.zone.run(() => this.openDialog(Point));
          
            });
          } else {
          
            marker.bindPopup('<h1> <b>Client Information</b></h1><p><b>Name:</b> ' + String(Point.geometry.properties.Nom_Client) + '</p><p><b>Sector Name: </b>' + String(Point.geometry.properties.Nom_du_Secteur) + '</p>');
          }
          this.markersCluster.addLayer(marker);
          //marker.addTo(this.map);
        });

      };
    };
  }
  /// list of icons
  getIcon(statuss) {
    const green = L.icon({ iconUrl: 'assets/green.png', iconSize: [12, 12] });
    const black = L.icon({ iconUrl: 'assets/black.png', iconSize: [12, 12] });
    const pink = L.icon({ iconUrl: 'assets/pink.png', iconSize: [12, 12] });
    const red_white = L.icon({ iconUrl: 'assets/r_white.png', iconSize: [12, 12] });
    const red = L.icon({ iconUrl: 'assets/red.png', iconSize: [12, 12] });
    const purple = L.icon({ iconUrl: 'assets/purple.png', iconSize: [12, 12] });
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
          const marker = L.geoJSON(Point.geometry, { style: { color: '#CD9575',fillOpacity:0.1 } });
          marker.bindPopup(String(Point.geometry.properties.codeRegion));
          marker.addTo(this.map);
          this.markerClusterSector.addLayer(marker);
          this.AllSecteurs.push({ coor: Point.geometry.geometry.coordinates, sector: Point.geometry.properties.idSecteur });
        });
      };
    };
  }


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
        // console.log(allclient)
      });
    };
  }
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
        // console.log(allclient)
      });
    };
  }

  ////////////////// ******************************************/////////////////////////

  async sync() {
    /* this._router.navigate(['']).then(() => {
       window.location.reload();
   });*/
    
    // this.index.ClearDataSector()
    this.PutData();
     ///// sycn done popup
     this.openAlertDialog();
    // this.PutDataSector()
    console.log('Synchronize (Get data from the Database)');

    // this.index.getDataClient(this.map, this.markersCluster, this.icon)

  }

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
      // console.log(this.myMarker)
      // console.log(this.myMarker._latlng)
      const lat = this.myMarker._latlng.lat;
      const lon = this.myMarker._latlng.lng;
      const test = turf.point([lon, lat]);
      const poly = turf.polygon(elem.coor[0]);
      
      //console.log(poly);
      // console.log(test)
      // this.isMarkerInsidePolygon(this.myMarker,elem)

      if (turf.booleanPointInPolygon(test, poly)) {
        this.statusAddClient = true;
        this.mySector = elem.sector;
        console.log(this.mySector);
        console.log("In sector ")
      } else {
        //console.log('not in ');
      }


    });
  }
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
    ///////**************************** Filter Done/Not Done PDV *********************///////////////////////////
    option_done=""
    onChange(){
        console.log(this.option_done)
        if(this.option_done=="Done"){
          console.log("Not green not validated should removed")
          this.markersCluster.eachLayer((layer:any)=>{
            if(layer.feature.properties.status!="green"){
              this.markersCluster.removeLayer(layer);
            }})
        }else if(this.option_done=="Not_Done"){
          console.log("validated should be removed")
          this.markersCluster.eachLayer((layer:any)=>{
            if(layer.feature.properties.status=="green"){    
              this.markersCluster.removeLayer(layer);
            }})
        }else{
          console.log("All Data will be showed")
          this.markersCluster.clearLayers();
          this.getDataClient();
        }
    }
  
  //////////////////******************************************/////////////////////////

  //////////////****************Filtrage Retail/AuditRetail ***********/////////////////
  option_retail=""
  onChange2(){
    console.log(this.option_retail)
    if(this.option_retail=="Audit"){
      console.log("Gros will be showed")
      this.markersCluster.eachLayer((layer:any)=>{
        if(layer.feature.properties?.TypeDPV=="Gros"){
          console.log(layer)
          this.markersCluster.removeLayer(layer)
        }})
    }else if(this.option_retail=="Audit_Retail"){
      console.log("Detail will be showed")
      this.markersCluster.eachLayer((layer:any)=>{
        if(layer.feature.properties?.TypeDPV=="Detail"){  
            console.log(layer)  
            this.markersCluster.removeLayer(layer);
           
        }})
    }else{
      console.log("All Data will be showed")
      this.markersCluster.clearLayers();
      this.getDataClient();
    }
  }

  fly(){
    this.map.setView(new L.LatLng(this.lati, this.longi), 15);
  }
  //////////////////******************************************//////////////////////////
}




