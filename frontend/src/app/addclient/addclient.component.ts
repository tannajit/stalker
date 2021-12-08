import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {ClientService} from "./client.service";
import {Observable, Subject} from "rxjs";

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
  isShown: boolean = false; // hidden by default
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
  lat=33.2510054
  lon=-7.6223514

  constructor(private clientService:ClientService) { }

  // ngOnInit(): void {
  //   setInterval(() => this.manageProgress(), 150 )
  //   this.initMap()
  // }


  ngAfterViewInit(): void {
    setInterval(() => this.manageProgress(), 150 )
    this.initMap()

  }

  private initMap(): void {
    
    this.map = L.map('map2', {
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


    
    // const lc = L.control.locate(locationControl)

    // lc.addTo(this.map);
    // zoom.addTo(this.map);
    tiles.addTo(this.map);
    this.map.addLayer(this.markersCluster);
    this.map.addControl(L.control.zoom({ position: 'bottomleft' }))
    
  }
  manageProgress() {
    if(this.progress === 100) {
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

  CheckCodes() {
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
