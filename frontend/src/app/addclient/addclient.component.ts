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
import { UUID } from 'angular2-uuid';
import { OnlineOfflineServiceService } from '../online-offline-service.service';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../settings/settings.service';
import { IndexdbService } from '../indexdb.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Dexie from 'dexie';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
const incr = 1;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css'],
  encapsulation: ViewEncapsulation.None,

})

export class AddclientComponent implements AfterViewInit {

  //////////////// VARIABLE'S DECLARATION /////////////////////////

  dialogConf: MatDialogRef<ConfirmationDialogComponent>;
  mySector = "test";
  progress = 0;
  selected = null;
  user = JSON.parse(localStorage.getItem("user"));
  ListCodes = [];
  code = { nbr: null, value: null }
  qrResultString: string;
  isShown: boolean = false;
  nfcShown: boolean = false;
  hide: boolean = false;// hidden by default
  test: boolean = false;
  TypesPDVs = []
  map;
  loggedUser;
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

  showVerifCodeInput = false
  showNFCWebcam: boolean = false;
  showPDVWebcam: boolean = false;
  public webcamNFCImage = null;
  public webcamPDVImage = null;
  private trigger: Subject<void> = new Subject<void>();

  //*clients info*//
  popupService: any;
  codeNFC: null;
  UUid: null;
  TypeDPV: null;
  detailType: null;
  NomPrenom: null;
  PhoneNumber: null;
  scan: boolean = false;
  Address
  nfcObject = { Numero_Serie: null, Technologies: null, Type_card: null, UUID: null, NFCPhoto: null }
  clientInfos = {
    UUid: null, codes: [], codeNFC: null, NFCPhoto: null, TypeDPV: null, sector: null, nfc: this.nfcObject,
    NomPrenom: null, detailType: null, userId: null, userRole: null, PhoneNumber: null, PVPhoto: null, Status: "red", created_at: null, updated_at: null
  }
  latclt
  lonclt

  inter;
  acc = 1222000;
  version = 6

  //* map*//

  icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });

  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30, 30]
  });
  markersCluster = new L.MarkerClusterGroup();

  //*SMS VARIABLES *//
  disbale_sms = false;
  verification_code = null;
  timeLeft: number = 5;
  interval_validation;
  status;
  display;
  codeSMS
  ///////////////////////////////////////////////////////////////////////////

  //////////////**************** CONSTRUCTOR ******************///////////////////
  constructor(private readonly onlineOfflineService: OnlineOfflineServiceService,
    private clientService: ClientsService,
    private _router: Router,
    private aroute: ActivatedRoute,
    private index: IndexdbService,
    private dialog: MatDialog,
    private _setting: SettingsService,
    private http: HttpClient) {

  }
  ////////////////////////////////////////////////////////////////

  ActiveSend(){
    if(this.webcamPDVImage && 
      this.NomPrenom && this.detailType && this.TypeDPV && this.PhoneNumber ){
        return false
      }else{
        return true
      }
  }
  //////////////*************** INTERFACE FUNCTIONS *****************//////////
  showcheck() {
    this.Status = true
    this.hide = !this.hide;
  }

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
  }

  upsert(array, item) { // (1)
    const i = array.findIndex(_item => _item.nbr === item.nbr);
    if (i > -1) array[i] = item; // (2)
    else array.push(item);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

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
    this.clientInfos.nfc.NFCPhoto = webcamNFCImage.imageAsDataUrl;
    console.log(this.clientInfos)
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

  openAlertDialog(msg, btn) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: msg,
        buttonText: {
          ok: btn,
        }
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
  /////////////////////////////////////////////////////////////////

  ///////////////////****** INIT FUNCTION *********//////////////////

  ngAfterViewInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem("user"));
    this.initMap();
    //this._setting.getSettings("sms")
    this._setting.getSettings('param=sms').subscribe(res => this.timeLeft = res.details.time,err=>{
      this.timeLeft=2;
    })
    this.aroute.paramMap.subscribe(params => {
      this.mySector = params.get('sector')
      console.log("mysector" + this.mySector)
      this.clientInfos.sector = this.mySector
    })
    var db = new Dexie("off").open().then((res) => {
      res.table("sector").get({ "nameSecteur": Number(this.mySector) }).then(r => {
        console.log(r)
        r.typePDV.forEach(type => {
          this.TypesPDVs.push(type)
        });
        this.selected = this.TypesPDVs[0]
        this.TypeDPV = this.TypesPDVs[0]
      })
    });

  }  
  city=null
  region=null
  GetNamePlace(lat,lon){

     this.clientService.GetNamePlace(lat,lon).subscribe(res=>{
      console.log(res)
    })

  }

  ///////////////////////////// MAP FUNCTION /////////////////////////////
  private initMap(): void {
    this.Status = true
    this.testTimer()

    this.map = L.map('map2', {
      center: [this.lat, this.lon],
      zoom: 14,
      zoomControl: true
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 0
    });

    tiles.addTo(this.map);

    var location_icon = L.icon({
      iconUrl: "assets/location.png",
      iconSize: [30, 30]
    });

    // navigator.geolocation.watchPosition((position: GeolocationPosition) => {
    //     this.clientService.GetNamePlace(position.coords.latitude,position.coords.longitude).subscribe(res=>{
    //       console.log("res",res.results[0].locations[0])
    //       this.city=res.results[0].locations[0].adminArea5
    //       this.region=res.results[0].locations[0].adminArea3
    //       console.log("city",this.city)
    //       console.log("region",this.region)

    //     })
    
    // })

    var get1=0
    var marker = L.marker([this.lat, this.lon], { icon: location_icon })
    this.inter = interval(1000).subscribe(x => {

      if (navigator.geolocation) {
        if (this.percentage == 100 && get1!=1 ) {
          this.inter.unsubscribe();
          get1=1
          console.log("**********************")
          console.log( this.clientInfos["lat"])
          this.clientInfos["lat"] = this.latclt
          this.clientInfos["lon"] = this.lonclt

          this.clientService.GetNamePlace(this.latclt,this.lonclt).subscribe(res=>{
            console.log("res",res.results[0].locations[0])
            this.city=res.results[0].locations[0].adminArea5
            this.region=res.results[0].locations[0].adminArea3
            console.log("city",this.city)
            console.log("region",this.region)
  
          })
        }

        var options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 2000
        };

        navigator.geolocation.watchPosition((position: GeolocationPosition) => {

          if (position) {
            var newlat = position.coords.latitude
            var newLon = position.coords.longitude;
            if (newlat != this.lat || newLon != this.lat) {
              this.lat = newlat
              this.lon = newLon
              this.list.push(position)
              if (position.coords.accuracy < this.acc) {
                console.log("********** Accuracy:" + position.coords.accuracy)
                this.acc = position.coords.accuracy
                this.lat = position.coords.latitude
                this.lon = position.coords.longitude
                this.latclt = position.coords.latitude
                this.lonclt = position.coords.longitude
              }
              this.map.removeLayer(marker);
              this.show = false
              this.Status = true
              marker = new (L.marker as any)([this.lat, this.lon], { icon: location_icon }).addTo(this.map);
            }
            console.log(this.lat)
            console.log(this.lon)
            this.map.removeLayer(marker);
            this.show = false
            this.Status = true
            marker = new (L.marker as any)([this.lat, this.lon], { icon: location_icon }).addTo(this.map);
          }
        },
          (error: GeolocationPositionError) => {
            this.percentage = 0;
            console.log(error)
          }, options);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }
  //////////////////////////////////////////////////////////////////////

  /////////////******** TIMER FOR FIX POSITION ********////////////////
  testTimer() {
    this.percentage = 0
    interval(300).subscribe(x => {
      if (this.percentage < 100) {
        this.percentage += 10
      }
    });
  }

  ///////////////////////// NFC FUNCTION READ ////////////////////////////

  Read() {
    console.log("read")

    this.clientService.getNFC().subscribe(
      res => {
        this.clientInfos.nfc.Numero_Serie = res.Numero_Serie;
        this.clientInfos.nfc.Technologies = res.Technologies
        this.clientInfos.nfc.Type_card = res.Type_card
        this.clientInfos.nfc.UUID = res.UUID;
      }
    )

  }
  ////////////////////////////////////////////////////////////////////

  /////////////*********** SMS VERIFICATION **********/////////////////

  ///send sms (Nano)
  SendSMS(phone) {
    this.clientService.getSMS(phone).subscribe(
      res => {
        console.log(res)
        this.verification_code = res.code
      });
  }

  Verify(code: string) {
    this.disbale_sms = true;
    //this.clientInfos.PhoneNumber = this.PhoneNumber
    this.timer(this.timeLeft);
    this.SendSMS(this.PhoneNumber);
  }

  VerifySMS() {
    if (this.verification_code === this.codeSMS) {
      this.status = "The code is correct"
      this.clientInfos.PhoneNumber = this.PhoneNumber;
    } else {
      this.status = "The code is incorrect"
    }
  }

  timer(minute) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
        this.verification_code = null;
        this.disbale_sms = false;
      }
    }, 1000);
  }
  //////////////////////////////////////////////////////////////

  /////////////*********  SEND CLIENT INFOS ************////////////
  Send() {
    // this.clientInfos.UUid=UUID.UUID();
    //this.clientInfos.PhoneNumber = this.PhoneNumber
    this.clientInfos.NomPrenom = this.NomPrenom
    this.clientInfos.TypeDPV = this.TypeDPV;
    this.clientInfos.detailType = this.detailType;
    this.clientInfos.userId = this.user._id;
    this.clientInfos.userRole = this.user.role;
    this.clientInfos.created_at = new Date()
    this.clientInfos.updated_at = new Date()

    if(this.user.role=="Seller"){
      this.clientInfos.Status = "white_red"
    }else{
      this.clientInfos.Status = "red_white"
    }
    if (this.loggedUser.permissions.includes("Add NFC")) {
      if ( this.clientInfos.codeNFC === null) {
        this.clientInfos["status"] = "pink"
      }
      else {
        this.clientInfos["status"] = "purple"
      }
    }else{
      this.clientInfos["status"] = "red"
    }
    this.clientInfos["city"] =this.city
    this.clientInfos["region"] = this.region
   
    console.log(this.clientInfos)
    if (!this.onlineOfflineService.isOnline) {
      this.clientService.addTodo(this.clientInfos);
      //this.AddNewClientIndexDB()
      var _id = UUID.UUID();
      this.AddNewClient(_id)
     // this._router.navigate(['/map'])
    } else {
      // this.clientService.SendClient(this.clientInfos).subscribe((res) => {
      //   console.log("\n **********Response form API************")
      //   console.log(res)
      //   //this.index.ClearData();
      //   var db, transaction;
      //   var request = window.indexedDB.open("off", this.version)
      //   request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      //     console.log("Why didn't you allow my web app to use IndexedDB?!");
      //   };
      //   request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      //     db = event.target.result;
      //     console.log("$$$$$$$$$$$$$$$$ Success Add client $$$$$$$$$$$$$$$$$$")
      //     this.clientService.getAllClient().subscribe((res) => {
      //       console.log("\n get all element After Adding New Client \n ")
      //       console.log(res)
      //       var i = 0;
      //       res.forEach((element, index, array) => {
      //         i++;
      //         console.log("-----------------------------------")
      //         console.log(element)
      //         console.log("-----------------------------------")
      //         var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) }
      //         transaction = db.transaction(['data'], 'readwrite');
      //         var objectStore = transaction.objectStore("data");
      //         var request = objectStore.put(geo)
      //         request.onsuccess = (event) => {
      //           console.log("****************** done Adding to Database After Adding Client *******************")
      //         }
      //         if (i === array.length) {
      //           console.log("Array I" + i)
      //           this._router.navigate(['/map']).then(()=>{
      //           })
      //         }
      //       });
      //     });
      //   }
      // });
      // this.AddNewClient();
      this.dialogConf = this.dialog.open(ConfirmationDialogComponent, {
        disableClose: true
      });
      this.dialogConf.componentInstance.confirmMessage = "add"
      this.clientService.SendClient(this.clientInfos).subscribe((res) => {
        //console.log(res)
        if (res.message == 'Done') {
          this.AddNewClient(res.id)
          this.dialogConf.close()

          // this.clientService.getAllClient().subscribe(async (res1) => {

          //   var db = new Dexie("off").open().then((res) => {
          //     res.table("pdvs").clear().then((l)=>{
          //       res.table("pdvs").bulkAdd(res1).then((lastKey)=>{
          //         this.openAlertDialog("The Client has been added successfully!","Ok, Cool!")
          //           this._router.navigate(['/map'])
          //          });
          //     }) 
          //   });
          // });
          this.openAlertDialog("The Client has been added successfully!", "Ok, Cool!")
          //this._router.navigate(['/map'])
        }

      }, err => {
        this.dialogConf.close()
        this.openAlertDialog("There is an error! Try again", "Ok")
        console.log("errooooooooor")
        console.log(err)
      });
    }
  }
  ////////////////////////////////////////////////////////////////

  ////////////********** ADD CLIENT IN OFFLINE MODE **************/////////////////
  AddNewClient(id) {
    var db = new Dexie("off").open().then((res) => {
      console.log("***")
      
      var codeSector = this.mySector.slice(0, 3)
      ///////
      var geom = {
        "geometry": {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [this.clientInfos["lon"], this.clientInfos["lat"]]
          },
          "properties": {
            "codeDANON": this.clientInfos.codes[0],
            "codeCOLA": this.clientInfos.codes[1],
            "codeFGD": this.clientInfos.codes[2],
            "codeQR": this.clientInfos.codeNFC,
            "NFCP": this.clientInfos.NFCPhoto,
            "nfc": this.nfcObject,
            "Code_Region": parseInt(codeSector),
            "Code_Secteur_OS": parseInt(this.mySector),
            "machine": "CMG",
            "TypeDPV": this.TypeDPV,
            "detailType": this.detailType,
            "userId": this.loggedUser._id,
            "userRole": this.loggedUser.role,
            "NomPrenom": this.NomPrenom,
            "PhoneNumber": this.PhoneNumber,
            "PVP": this.clientInfos.PVPhoto,
            "status": this.clientInfos.Status
          }
        },
        "_id": id
      }
      res.table("pdvs").put(geom).then(r => {
       this._router.navigate(['/map'])
      })
    });
  }

  AddNewClientIndexDB() {
    var db, transaction;
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      var clientGeo = "hhh";
      var _id = UUID.UUID();
      var codeSector = this.mySector.slice(0, 3)
      ///////
      var geom = {
        "geometry": {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [this.clientInfos["lon"], this.clientInfos["lat"]]
          },
          "properties": {
            "codeDANON": this.clientInfos.codes[0],
            "codeCOLA": this.clientInfos.codes[1],
            "codeFGD": this.clientInfos.codes[2],
            "codeQR": 0,
            "nfc": this.nfcObject,
            "Code_Region": parseInt(codeSector),
            "Code_Secteur_OS": parseInt(this.mySector),
            "machine": "CMG",
            "TypeDPV": this.TypeDPV,
            "detailType": this.detailType,
            "userId": 'test',
            "userRole": this.loggedUser.role,
            "NomPrenom": this.NomPrenom,
            "PhoneNumber": this.PhoneNumber,
            "PVP": this.clientInfos.PVPhoto,
            "status": this.clientInfos.Status
          }
        },
        "_id": _id
      }
      console.log(geom)

      const geo = { _id: geom._id, Valeur: JSON.stringify(geom.geometry) };
      transaction = db.transaction(['data'], 'readwrite');
      const objectStore = transaction.objectStore('data');
      const request = objectStore.add(geo);
      request.onsuccess = (event) => {
        console.log('done Adding');
        this._router.navigate(['map']).then(() => {

        })
      };
    }
  }
  ///////////////////////////////////////////////////////////////////////////////


}
