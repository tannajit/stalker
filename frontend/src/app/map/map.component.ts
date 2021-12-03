import { Component, AfterViewInit, HostListener } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import * as geojson from 'geojson';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  private map;
  icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });
  
  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30,30]
  });
  markersCluster = new L.MarkerClusterGroup();
  lat=33.27075
  lon=-9.58481

  

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 15,
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



  constructor(private _serviceClient: ClientsService) { 
    
  }
  
  ngAfterViewInit(): void {
    this.getLocation()
    //this.initMap()
  }

  getLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            " Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lon);
          this.initMap();
          L.marker([this.lat,this.lon], {icon: this.location_icon}).addTo(this.map);
        }
      },
        (error: GeolocationPositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }

  }

  locate(){
      this.map.flyTo(new L.LatLng(33.2607691,-7.6222771),13);
  }


  async getClients() {
    var arr = [];
    this._serviceClient.getAllClient().subscribe(
      res => {
        res.forEach(element => {
          //console.log(element.geometry.geometry)
          var geojsonPoint: geojson.Point = element.geometry.geometry
          var marker = L.geoJSON(geojsonPoint, {
            pointToLayer: (point, latlon) => {
              return L.marker(latlon, { icon: this.icon })
              //return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
            }
          });
          this.markersCluster.addLayer(marker)
          marker.bindPopup(String(element.geometry.properties.Nom_Client));
          marker.addTo(this.map);
        });
      },
      err => console.log(err));
    //console.log(await arr)
    return await arr;
  }


  async getAllSecteurs() {
    var arr = [];
    this._serviceClient.getAllSecteurs().subscribe(
      res => {
        //console.log(res)
        res.forEach(element => {
          var marker = L.geoJSON(element.geometry, { style: { color: 'red' } });
          //marker.bindPopup(String(element.geometry.properties.Nom_Client));
          marker.addTo(this.map);
        });
      },
      err => console.log(err));
    //console.log(await arr)
    return await arr;
  }



}