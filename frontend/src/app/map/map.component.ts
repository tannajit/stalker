import { Component, AfterViewInit, HostListener } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import * as geojson from 'geojson';
import { ClientsService } from '../clients.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { ClientInfoComponent } from '../client-info/client-info.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgZone } from '@angular/core';
import * as turf from '@turf/turf';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  dialogRef: MatDialogRef<ClientInfoComponent>;
  private map;
  public content=null;
  mySector="hello"

  icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });
  
  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30,30]
  });

  clientwithNFC_icon = L.icon({
    iconUrl: "assets/blue.png",
    iconSize: [15,15]
  });

  clientwithoutNFC_icon = L.icon({
    iconUrl: "assets/red.png",
    iconSize: [15,15]
  });
  
  markersCluster = new L.MarkerClusterGroup();
  lat= 9.5981
  lon= 30.4278
  myMarker;
  statusAddClient=false;
  
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
    this.getClients()
    this.getAllSecteurs()
    this.map.addLayer(this.markersCluster);
    this.map.addControl(L.control.zoom({ position: 'bottomleft' }))
    
  }



  constructor(
    private _serviceClient: ClientsService,
    private _router:Router,
    private zone: NgZone,
    private dialog: MatDialog) { 
    
  }
  
  ngAfterViewInit(): void {
    this.getLocation()
    this.initMap()
    //this.getClient()
  }

  getLocation() {
    // interval(1000).subscribe(x => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            " Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lon);
          this.map.setView(new L.LatLng(this.lat, this.lon), 11, { animation: true });    
          
          this.myMarker=L.marker([this.lat,this.lon], {icon: this.location_icon});
          //this.myMarker.bindPopup("my")
          this.myMarker.addTo(this.map) 
          
        }
      },
        (error: GeolocationPositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    // });
  }

  locate(){
    this.map.flyTo(new L.LatLng(this.lat,this.lon),13);
    this.Insid()
  }

  

  getClient() {
    let client=this._serviceClient.getClient().subscribe( res => {
      console.log("*********** ")
      console.log(res)
      res.forEach(element => {
        
        console.log(element.lat,element.lon);
        if(element.status==="red"){

          var popupOptions = {
            maxWidth: 800,
            className: "popup"
          }

          L.marker([element.lat,element.lon], {icon: this.clientwithoutNFC_icon}).addTo(this.map).on('click', ()=>{
            this.content = element;
            this.zone.run(() => this.openDialog(element));
          } )
        }
        if(element.status==="green"){
          L.marker([element.lat,element.lon], {icon: this.clientwithNFC_icon}).addTo(this.map);

        }

      });
    })
    console.log(client);
    
  }

  // open dialog with client info
  openDialog(content){
    //console.log(content)
    this.dialogRef = this.dialog.open(ClientInfoComponent, {data:content});
    
  }

  async getClients() {
    var arr = [];
    this._serviceClient.getAllClient().subscribe(
      res => {
        res.forEach(element => {
          console.log("@@@@@@@@@@@@@@@@@@@")
          console.log(element.geometry)
          var geojsonPoint: geojson.Point = element.geometry.geometry
          var marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: this.icon })
              //return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
            }
          });
          this.markersCluster.addLayer(marker)
          if(element.geometry.properties?.nfc!=undefined){

            marker.on('click', ()=>{
              this.content = element.geometry;
              this.zone.run(() => this.openDialog(element.geometry));
            })         
          }else{
          marker.bindPopup("<h1> <b>Client Information</b></h1><p><b>Name:</b> "+String(element.geometry.properties.Nom_Client)+"</p><p><b>Sector Name: </b>"+String(element.geometry.properties.Nom_du_Secteur)+"</p>");
          }
          marker.addTo(this.map);
        });
      });
    //console.log(await arr)
    return await arr;
  }

  AllSecteurs=[];
  async getAllSecteurs() {

    this._serviceClient.getAllSecteurs().subscribe(
      res => {
        //console.log(res)
        res.forEach(element => {
          var marker = L.geoJSON(element.geometry, { style: {  color:"red"}});
          marker.bindPopup(String(element.geometry.properties.codeRegion));
          marker.addTo(this.map);
          this.AllSecteurs.push({coor:element.geometry.geometry.coordinates,sector:element.geometry.properties.idSecteur})
        });
      });
    //console.log(await arr)
    //return await arr;
  }

  sync(){
      this._router.navigate(['']).then(() => {
        window.location.reload();
    });
  }
  isMarkerInsidePolygon(marker, poly) {
    var polyPoints = poly.getLatLngs();       
    var x = marker.getLatLng().lat, y = marker.getLatLng().lng;

    var inside = false;
    for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
        var xi = polyPoints[i].lat, yi = polyPoints[i].lng;
        var xj = polyPoints[j].lat, yj = polyPoints[j].lng;

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
  }
  Insid(){
    this.statusAddClient=false
    this.AllSecteurs.forEach(elem=>{
      //console.log(this.myMarker)
      //console.log(this.myMarker._latlng)
      var lat=this.myMarker._latlng.lat
      var lon=this.myMarker._latlng.lng
      var test=turf.point([lon,lat])
      var poly = turf.polygon(elem.coor[0]);
      console.log(poly)
      //console.log(test)
      //this.isMarkerInsidePolygon(this.myMarker,elem)
      
      if (turf.booleanPointInPolygon(test, poly)) {
            this.statusAddClient=true
            this.mySector=elem.sector
            console.log(this.mySector)
      } else {
            console.log("not in ")
      }
      
      
    })
  }
}