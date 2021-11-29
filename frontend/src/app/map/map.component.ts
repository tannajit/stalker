import { Component,AfterViewInit} from '@angular/core';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import { ClientsService } from '../clients.service';

@Component({

  selector: 'app-map',

  templateUrl: './map.component.html',

  styleUrls: ['./map.component.css']

})

export class MapComponent implements AfterViewInit{

  private map;
  private arrValues=[];
  lat=33.2707;
  lon=-7.58481;
   icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [17, 17], 
    //iconAnchor: [22, 94],
    //shadowAnchor: [4, 62],
    //popupAnchor: [-3, -76]
  });

  private initMap(): void {
    this.map = L.map('map', {center: [ this.lat, this.lon ], zoom: 10 });
    const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
      maxZoom: 100,
      minZoom:1,
    });
    tiles.addTo(this.map);
  }

  constructor(private _serviceClient:ClientsService) {
    
    //console.log(this.arrValues)
    
   }

   ngAfterViewInit(): void {

    this.initMap();
    this.getAllSecteurs()
    this.getClients()
    
    
  }
  async getClients(){
    var arr=[];
     this._serviceClient.getAllClient().subscribe(
      res=>{
        res.forEach(element => {
              console.log(element.geometry.geometry)
              var geojsonPoint: geojson.Point=element.geometry.geometry
              var marker = L.geoJSON(geojsonPoint, {
                pointToLayer: (point,latlon)=> {
                
                  return L.marker(latlon, {icon: this.icon})
                  //return L.circle([latlon.lat,latlon.lng], {color:"green",radius:20}).addTo(this.map);
              }
              });
              marker.bindPopup(String(element.geometry.properties.Nom_Client));
              marker.addTo(this.map);
        });

      },
      err=>console.log(err));
      //console.log(await arr)
      return await arr; 
    } 
    async getAllSecteurs(){
      var arr=[];
       this._serviceClient.getAllSecteurs().subscribe(
        res=>{
          //console.log(res)
          res.forEach(element => {
              var marker = L.geoJSON(element.geometry,{style:{color:'red'}});
              //marker.bindPopup(String(element.geometry.properties.Nom_Client));
              marker.addTo(this.map);
          });
        },
        err=>console.log(err));
        //console.log(await arr)
        return await arr; 
      } 



}