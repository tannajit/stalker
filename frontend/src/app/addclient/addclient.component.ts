import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import { GeoJsonTypes } from 'geojson';
import { interval } from 'rxjs';

const incr = 1;

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})

export class AddclientComponent implements AfterViewInit {

  progress = 0;
  qrResultString: string;
  isShown: boolean = false; 
  nfcShown: boolean = false;
  hide: boolean = false;// hidden by default
  test: boolean = false;
  map;

  lat = 33.2607691
  lon = -7.6222771

  icone = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });

  circle: any;

  percentage=0
  Status=true
  show=false

  geojsonFeature = {
    type: 'Feature' as GeoJsonTypes, // or type: <GeoJsonTypes> 'Feature',
    properties: {
      name: 'Mohamed',
      amenity: 'Baseball Stadium'
    },
      geometry: {
      type: 'Point' as GeoJsonTypes, // or type: <GeoJsonTypes> 'Point',
      coordinates: [-7.6222771, 33.2608691]
    }
  };


  nfcShow(){
    this.nfcShown = !this.nfcShown;
    this.test =true;}

  showcheck(){
    this.Status=true
    this.hide = !this.hide;
  }
  

  constructor() { }

  // ngOnInit(): void {
  //   setInterval(() => this.manageProgress(), 150 )
  // }

  manageProgress() {
    if (this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress + incr;
    }
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }
  
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  ngAfterViewInit(): void {
    // setInterval(() => this.manageProgress(), 150)
    this.initMap();
    // this.getLocation()
    // this.getLo();

  }

  private initMap(): void {

    this.Status=true
    this.testTimer()
    
    this.map = L.map('map1', {
      center: [this.lat, this.lon],
      zoom: 14,
      zoomControl: true
    });

    const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 0
    });

    tiles.addTo(this.map);

    var location_icon = L.icon({
      iconUrl: "assets/location.png",
      iconSize: [30,30]
    });
    var marker= L.marker([this.lat, this.lon], {icon:location_icon})


  if(this.percentage<100){

    interval(1000).subscribe(x => {
      if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
       
          if (position) {
            console.log("Latitude: " + position.coords.latitude +
              " // Longitude: " + position.coords.longitude);
              var newlat=position.coords.latitude
              var newLon=position.coords.longitude;
              if(newlat!=this.lat || newLon!=this.lat){ 
                //console.log("nmi rah tbdl")
                // this.percentage=0
                this.lat = newlat
                this.lon = newLon
                console.log(this.lat)
                console.log(this.lon)
                this.map.removeLayer(marker);
                this.show=false 
                this.Status=true
                marker = new (L.marker as any)([this.lat,this.lon],{icon:location_icon}).addTo(this.map);
              }         
        }
        },
          (error: GeolocationPositionError) => console.log(error));
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }else{
    console.log("stop a nmi")
  }
  
}
  getLo(){
    // var marker = L.geoJSON(this.geojsonFeature, {
    //   pointToLayer: (point, latlon) => {
    //     return L.marker(latlon, { icon: this.icone })
    //   }
    // });
    // marker.addTo(this.map)
    this.circle = L.circle([this.lat, this.lon], 20).addTo(this.map);
    L.Circle.include({
      contains: function (latLng) {
        return this.getLatLng().distanceTo(latLng) < this.getRadius();
      }
    });

    this.map.fitBounds(this.circle.getBounds());

  }

  getLocation(){
    
  }

  testTimer(){
    this.percentage=0
    interval(100).subscribe(x=>{
        if( this.percentage<100){
          this.percentage+=4
            }
        });
  }

  addNewComponent() {
    this.show=true
    this.Status=false
  }

}
