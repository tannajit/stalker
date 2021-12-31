import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { ClientsService } from '../clients.service';
import { Observable, Subject } from "rxjs";
import { interval } from 'rxjs';
import * as geojson from 'geojson';
import { Router } from '@angular/router';
import { GeoJsonTypes } from 'geojson';
import { ThrowStmt } from '@angular/compiler';
import { IndexdbService } from '../indexdb.service';
import { OnlineOfflineServiceService} from '../online-offline-service.service';


const incr = 1;

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements AfterViewInit {
  progress = 0;
  selected = null;
  user = JSON.parse(localStorage.getItem("user"));
  //from hajar
  ListCodes = [];
  code = { nbr: null, value: null }
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

  percentage = 0
  Status = true
  show = false
  list = []

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

  // for update functionality



  // fadma's variables
  showVerifCodeInput = false
  showNFCWebcam: boolean = false;
  showPDVWebcam: boolean = false;
  public webcamNFCImage = null;
  public webcamPDVImage = null;
  private trigger: Subject<void> = new Subject<void>();

  showcheck() {
    this.Status = true
    this.hide = !this.hide;
  }

  clientInfo;
  codeNFC: null;
  TypeDPV: null;
  detailType: null;
  NomPrenom: null;
  PhoneNumber: null;
  scan: boolean = false;
  nfcObject = { Numero_Serie: null, Technologies: null, Type_card: null, UUID: null, NFCPhoto: null }
  clientInfos = {
    codes: [], codeNFC: null, NFCPhoto: null, TypeDPV: null, nfc: this.nfcObject,
    NomPrenom: null, detailType: null, userId: null, userRole: null, PhoneNumber: null, PVPhoto: null, Status: "red"
  }
  latclt
  lonclt

  // map

  icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });

  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30, 30]
  });
  markersCluster = new L.MarkerClusterGroup();


  constructor(private readonly onlineOfflineService: OnlineOfflineServiceService,
    private clientService: ClientsService, 
    private _router: Router) { 

    this.clientInfo = clientService.getClientInfo();
    console.log('@@@@@@@@@@@@@@@@' + this.clientInfo.NomPrenom)
  }

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

  toggleShow(nbr: number, resultString: string) {
    console.log(nbr);
    console.log(resultString);
    console.log(this.ListCodes);

    this.isShown = !this.isShown;

    if (nbr === 1) {
      this.code = { nbr: nbr, value: resultString }
      this.upsert(this.ListCodes, this.code)
      this.qrResultString = null;

    }
    if (nbr === 2) {
      this.code = { nbr: nbr, value: resultString }
      this.upsert(this.ListCodes, this.code)
      this.qrResultString = null;

    }
    if (nbr === 3) {
      this.code = { nbr: nbr, value: resultString }
      this.upsert(this.ListCodes, this.code)
      this.qrResultString = null;

    }
    if (nbr === 4) {
      this.code = { nbr: nbr, value: resultString }
      this.upsert(this.ListCodes, this.code)
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

  inter;

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  ngAfterViewInit(): void {
    // setInterval(() => this.manageProgress(), 150)
    this.initMap();
    // this.getLocation()
    // this.getLo();

    this.clientInfo = this.clientService.getClientInfo();
    console.log(this.clientInfo)
    //this.UpdateIndexDB()
    // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
    // console.log(this.clientInfo)
  }
  acc = 1222000;

  private initMap(): void {

    this.Status = true
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
      iconSize: [30, 30]
    });
    var marker = L.marker([this.lat, this.lon], { icon: location_icon })



    this.inter = interval(1000).subscribe(x => {

      if (navigator.geolocation) {
        if (this.percentage == 100) {
          this.inter.unsubscribe();
          this.clientInfos["lat"] = this.latclt
          this.clientInfos["lon"] = this.lonclt
          //console.log(this.clientInfos)
        }

        var options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 2000
        };
        //console.log(this.percentage)
        var geoId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {

          if (position) {
            //console.log("Latitude: " + position.coords.latitude +
            // " // Longitude: " + position.coords.longitude);
            var newlat = position.coords.latitude
            var newLon = position.coords.longitude;

            // if (position.coords.accuracy > 10) {
            //   console.log("The GPS accuracy isn't good enough");
            // }
            if (newlat != this.lat || newLon != this.lat) {
              //console.log("nmi rah tbdl")
              // this.percentage=0
              this.lat = newlat
              this.lon = newLon
              this.list.push(position)
              //console.log(this.list)
              //console.log("Accuracy:"+position.coords.accuracy)

              if (position.coords.accuracy < this.acc) {
                //console.log("********** Accuracy:"+position.coords.accuracy)
                this.acc = position.coords.accuracy
                this.lat = position.coords.latitude
                this.lon = position.coords.longitude
                this.latclt = position.coords.latitude
                this.lonclt = position.coords.longitude
              }
              //console.log(this.lat)
              //console.log(this.lon)
              this.map.removeLayer(marker);
              this.show = false
              this.Status = true
              marker = new (L.marker as any)([this.lat, this.lon], { icon: location_icon }).addTo(this.map);
            }
          }
        },
          (error: GeolocationPositionError) => console.log(error), options);
        // console.log('Clear watch called');
        // window.navigator.geolocation.clearWatch(geoId);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });


  }
  getLo() {
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

  testTimer(){
    this.percentage =0
    interval(300).subscribe(x=>{
        if( this.percentage <100){
          this.percentage+=4
            }
        });
  }

  addNewComponent() {
    this.show = true
    this.Status = false
  }
  CheckCodes() {
    this.nfcShown = !this.nfcShown;
    this.test = true;
    console.log(this.ListCodes)
    this.clientInfos.codes = this.ListCodes

  }


  ///////////*****  Read NFC and Verfiy SMS from NanoHTTPD (hafsa'code)**********///////////////
  Read() {
    console.log("read")
    
     this.clientService.getNFC().subscribe(
        res=> {   
          console.log(res)
          this.clientInfo.geometry.properties.nfc=res;
          console.log(this.clientInfo)
          /*this.clientInfo.nfc.Numero_Serie=res.Numero_Serie;
          this.clientInfo.nfc.Technologies=res.Technologies
          this.clientInfo.nfc.Type_card=res.Type_card
          this.clientInfo.nfc.UUID=res.UUID;*/
  }
      )

    


  }

  getCoordinates(){

  }
  verification_code = null; status; codeSMS;
  SendSMS(phone) {
    this.clientService.getSMS(phone).subscribe(
      res => {
        console.log(res)
        this.verification_code = res.code
      });
  }

  Verify(code: string) {
    this.clientInfos.PhoneNumber = this.PhoneNumber
    this.SendSMS(this.PhoneNumber);
  }
  VerifySMS() {
    if (this.verification_code === this.codeSMS) {
      this.status = "the code is correct"
    } else {
      this.status = "the code is incorrect"
    }
  }
  /////////////////////******  Update Client (Fadma's Code) *******/////////////////
  async Update() {

    // ***************** scanned codes ************* //
    if (this.ListCodes.length != 0) {
      this.ListCodes.forEach(element => {
        if(element.nbr == 1){
          this.clientInfo.geometry.properties.codeDANON = element.value;
        }else if(element.nbr == 2){
          this.clientInfo.geometry.properties.codeCOLA = element.value
        }else if(element.nbr == 3){
          this.clientInfo.geometry.properties.codeFGD = element.value
        }else if(element.nbr == 4){
          this.clientInfo.geometry.properties.codeQR = element.value
        }
      });
      console.log()
      // this.clientInfo.properties.=this.ListCodes
    }

    if(this.clientInfos.NFCPhoto){
      this.clientInfo.geometry.properties.nfc.NFCPhoto = this.clientInfos.NFCPhoto
      this.clientInfo.geometry.properties.NFCP=null
    }

    if(this.clientInfos.PVPhoto){
      this.clientInfo.geometry.properties.PVPhoto = this.clientInfos.PVPhoto
      this.clientInfo.geometry.properties.PVP=null
    }
    // add user ids
    this.clientInfo.geometry.properties.updatedBy = this.user._id;
    this.clientInfo.geometry.properties.userRole = this.user.role;
    this.clientInfo.geometry.properties.updated_at = Date.now();
    console.log('########## Updated Client ##########')
    console.log(this.clientInfo)
    if(this.clientInfo.geometry.properties.codeQR===null){
      this.clientInfo.geometry.properties.status="pink"
    }
    else{
      this.clientInfo.geometry.properties.status="purple"
    }

    if (!this.onlineOfflineService.isOnline) {
    this.clientService.addTodoUpdate(this.clientInfo)
    this.UpdateIndexDB() 
    }else{
     
     
    this.clientService.updateClient(this.clientInfo).subscribe(res => {
      this.UpdateIndexDB() 
    })
    
  }
    // this.clientInfos={codes:[],codeNFC:null, NFCPhoto:null, TypeDPV:null,
    //  NomPrenom:null, PhoneNumber:null, detailType:null,userId:null, userRole:null, PVPhoto:null,Status:"red"}

  }
  //////////************  Update the client in IndexedDB (Hafsa's Code) ************/////////////
  version = 6;
  UpdateIndexDB() {
    // this.index.ClearData();
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
      var objectStoreRequest = objectStore.get(this.clientInfo._id);
      console.log(this.clientInfo)
      objectStoreRequest.onsuccess = (event) => {
        var elm = JSON.parse(objectStoreRequest.result.Valeur);
        console.log("********************element*****************")
        console.log(objectStoreRequest.result._id)
        var client = { _id: String(objectStoreRequest.result._id), Valeur: JSON.stringify(this.clientInfo.geometry) }
        console.log(client)
        var objectStoreRequest1 = objectStore.put(client);
        //objectStoreRequest.put(JSON.stringify(this.clientInfo));
        objectStoreRequest1.onsuccess = (event) => {
          console.log('Done Update');
          this._router.navigate(['/map'])
        };
      }
    };
  }
  //////////////*********************************************///////////////////

  //*////////////////////********* fadma's code ********///////////////

  toggleNFCWebcam() {
    this.showNFCWebcam = !this.showNFCWebcam;
  }

  displayNFCam() {
    this.showNFCWebcam = !this.showNFCWebcam;
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  handleNFCImage(webcamNFCImage): void {
    console.info('received webcam image', webcamNFCImage);
    this.webcamNFCImage = webcamNFCImage;
    this.clientInfos.NFCPhoto = webcamNFCImage.imageAsDataUrl;

  }

  togglePDVWebcam() {
    this.showPDVWebcam = !this.showPDVWebcam;
  }


  displayPDVcam() {
    this.showPDVWebcam = !this.showPDVWebcam;
  }

  handlePDVImage(webcamPDVImage) {
    console.info('received webcam image', webcamPDVImage);
    this.webcamPDVImage = webcamPDVImage;
    this.clientInfos.PVPhoto = webcamPDVImage.imageAsDataUrl;
  }

}
