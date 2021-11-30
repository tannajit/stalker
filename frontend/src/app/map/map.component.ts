import { Component, AfterViewInit, HostListener } from '@angular/core';
import * as L from 'leaflet';
import { icon, latLng, marker, polyline, bindLabel, tileLayer } from 'leaflet';
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
  markersCluster = new L.MarkerClusterGroup();
  lat = 33.2707;
  lon = -7.58481;

  private initMap(): void {
    
    this.map = L.map('map', {
      center: [this.lat, this.lon],
      zoom: 15
    });
    
    const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 0
    });
    tiles.addTo(this.map);
    this.getClients()
    this.getAllSecteurs()
    this.map.addLayer(this.markersCluster);

  }

    constructor(private _serviceClient: ClientsService) { }
    ngAfterViewInit(): void {
      this.initMap();
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