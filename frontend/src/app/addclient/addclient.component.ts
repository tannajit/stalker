import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {ClientService} from "./client.service";
import {Observable, Subject} from "rxjs";
import { interval } from 'rxjs';
import * as geojson from 'geojson';
import { GeoJsonTypes } from 'geojson';

const incr = 1;

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AddclientComponent implements AfterViewInit {

  progress = 0;
  //from hajar
  ListCodes=[];
  code={nbr:null,value: null}
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
    }

  showcheck(){
    this.Status=true
    this.hide = !this.hide;
  }
  
  
  codeNFC:null;
  NFCPhoto:null;
  TypeDPV:null;
  NomPrenom:null;
  PhoneNumber:null;
  PVPhoto:null;
  isShownCam:boolean=false;
  isShownCam2:boolean=false;
  scan:boolean=false;
  camera1: boolean=false;
  camera2: boolean=false;
  clientInfos={codes:[],codeNFC:null, NFCPhoto:null, TypeDPV:null,
  NomPrenom:null, PhoneNumber:null, PVPhoto:null}
 
  // map

  icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });
  
  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30,30]
  });
  markersCluster = new L.MarkerClusterGroup();


  constructor(private clientService:ClientService) { }

  // ngOnInit(): void {
  //   setInterval(() => this.manageProgress(), 150 )
  //   this.initMap()
  // }


  // ngAfterViewInit(): void {
  //   setInterval(() => this.manageProgress(), 150 )
  //   this.initMap()

  // }

  // private initMap(): void {
    
  //   this.map = L.map('map2', {
  //     center: [this.lat, this.lon],
  //     zoom: 15,
  //     zoomControl: false
  //   });
    
  //   const zoomOptions = {
  //     zoomInText: '+',
  //     zoomOutText: '-',
  //   };

  //   // const zoom = L.control.zoom(zoomOptions);


  //   const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
  //     maxZoom: 30,
  //     minZoom: 0
  //   });


    
  //   // const lc = L.control.locate(locationControl)

  //   // lc.addTo(this.map);
  //   // zoom.addTo(this.map);
  //   tiles.addTo(this.map);
  //   this.map.addLayer(this.markersCluster);
  //   this.map.addControl(L.control.zoom({ position: 'bottomleft' }))
    
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
  
  toggleShow(nbr:number,resultString:string) {
    console.log(nbr);
    console.log(resultString);

    this.isShown = !this.isShown;
    if(nbr===1) {
      this.code={nbr:nbr,value: resultString}
      this.upsert(this.ListCodes,this.code)
      this.qrResultString = null;

    }
    if(nbr===2) {
      this.code={nbr:nbr,value: resultString}
      this.upsert(this.ListCodes,this.code)
      this.qrResultString = null;

    }
    if(nbr===3) {
      this.code={nbr:nbr,value: resultString}
      this.upsert(this.ListCodes,this.code)
      this.qrResultString = null;

    }
    if(nbr===4) {
      this.code={nbr:nbr,value: resultString}
      this.upsert(this.ListCodes,this.code)
      this.qrResultString = null;

    }

    //this.code={nbr:nbr,value: resultString}
    //this.upsert(this.ListCodes,this.code)



  }

   upsert(array, item) { // (1)
    const i = array.findIndex(_item => _item.nbr === item.nbr);
    if (i > -1) array[i] = item; // (2)
    else array.push(item);
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
    
    this.map = L.map('map2', {
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
  CheckCodes() {
    this.nfcShown = !this.nfcShown;
    this.test =true;
   console.log(this.ListCodes)
    this.clientInfos.codes=this.ListCodes
    
  }

  Verify(code: string) {
  this.clientInfos.PhoneNumber=this.PhoneNumber
  }

  TakePhoto() {
    console.log("TakePhoto")
    this.isShownCam=!this.isShownCam

  }

  Read() {
    console.log("read")
    this.clientInfos.codeNFC="dgfdjkgnk"
  }


  TakePhotoNFC() {
    this.isShownCam=!this.isShownCam
    console.log("photonfc")


  }
  Send() {
    this.clientInfos.PhoneNumber=this.PhoneNumber
    this.clientInfos.NomPrenom=this.NomPrenom
    this.clientInfos.TypeDPV=this.TypeDPV;
    console.log(this.clientInfos)
    this.clientService.SendClient(this.clientInfos).subscribe(res => console.log(res),err=> console.log(err))
  }

  ///////////////////////
  public webcamImage = null;
  private trigger: Subject<void> = new Subject<void>();

  triggerSnapshot(): void {
    //this.isShownCam=!this.isShownCam
    this.trigger.next();
  }
  handleImage(webcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
    if(this.camera1) {this.clientInfos.NFCPhoto= webcamImage}
    if(this.camera2) {this.clientInfos.PVPhoto = webcamImage}

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


}
