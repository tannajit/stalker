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
import { OnlineOfflineServiceService } from '../online-offline-service.service';
import { AdminService } from '../admin/admin.service';
import { takeUntil, switchMap } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Dexie from 'dexie';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { SettingsComponent } from '../settings/settings.component';
const incr = 1;

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements AfterViewInit, OnInit {

        

  ////******************** VARIABLE'S DECLARATION ****************/////

  dialogConf: MatDialogRef<ConfirmationDialogComponent>;
  progress = 0;
  selected = null;
  user = JSON.parse(localStorage.getItem("user"));
  ListCodes = [];
  code = { nbr: null, value: null }
  qrResultString: string;
  isShown: boolean = false;
  nfcShown: boolean = false;
  hide: boolean = false;
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

  showVerifCodeInput = false
  showNFCWebcam: boolean = false;
  showPDVWebcam: boolean = false;
  public webcamNFCImage = null;
  public webcamPDVImage = null;
  private trigger: Subject<void> = new Subject<void>();
  loggedUser;
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

  icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });

  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30, 30]
  });
  markersCluster = new L.MarkerClusterGroup();
  inter;
  acc = 1222000;
  TypesPDVs=[]
  timeLeft;
  verification_code = null; status; codeSMS;
  //////////////////////////////////////////////////////////////

  ////********* CONSTUCTOR **********/////////
  constructor(private readonly onlineOfflineService: OnlineOfflineServiceService,
    private clientService: ClientsService, private adminService: AdminService,
    private _router: Router,
    private dialog: MatDialog,
    private _setting:AdminService,) {
      
    this.loggedUser = JSON.parse(localStorage.getItem("user"));
    this.clientInfo = clientService.getClientInfo();
    this._setting.getSettings('param=sms').subscribe(res => this.timeLeft = res.details.time,err=>{
      this.timeLeft=2;
    })
    this.PhoneNumber=this.clientInfo.geometry.properties.PhoneNumber;
    console.log("***** this CLIENT ****")
    console.log(this.clientInfo)
  }
  //////////////////////////////////////////////////
  private destroyed: Subject<void> = new Subject<void>();
  ngOnInit(): void {
   ///// Sector change
  //  var db, transaction;
  //  var request = window.indexedDB.open("off", this.version)
  //  request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
  //    console.log("Why didn't you allow my web app to use IndexedDB?!");
  //  };
  //  request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
  //   //  db = event.target.result;
    //  transaction = db.transaction(['sector'], 'readwrite');
    //  var objectStore = transaction.objectStore("sector");
    //    var objectStoreRequest = objectStore.get(Number(this.clientInfo.geometry.properties.Code_Secteur_OS));
    //    objectStoreRequest.onsuccess = (event) => {
    //      //console.log(objectStoreRequest.result)
    //      var element=JSON.parse(objectStoreRequest.result.Valeur)
    //      console.log(element)
    //      this.clientInfos.TypeDPV=element.typePDV[0]
    //     //this.selected=this.clientInfos.TypeDPV
    //      element.typePDV.forEach(type => {
    //        this.TypesPDVs.push(type)
    //      });
    //      this.selected=this.TypesPDVs[0]
    //      this.TypeDPV=this.TypesPDVs[0]
    //    }
    var db = new Dexie("off").open().then((res) => {
      res.table("sector").get({"nameSecteur":Number(this.clientInfo.geometry.properties.Code_Secteur_OS)}).then(r=>{
        console.log(r)
        r.typePDV.forEach(type => {
          this.TypesPDVs.push(type)
        });
        this.selected=this.TypesPDVs[0]
        this.TypeDPV=this.TypesPDVs[0]
      })
    });
    ////
    // interval(1000).pipe( takeUntil(this.destroyed)).subscribe(x => {
    //this.getLocation()
    // })
    if (!navigator.geolocation) console.log("Location is not supported")

    else {
      navigator.geolocation.getCurrentPosition((pos) => {
        //console.log(`latitude :${pos.coords.latitude},longitude :${pos.coords.longitude}`)
        this.map.setView([pos.coords.latitude, pos.coords.longitude], 13)
        L.marker([pos.coords.latitude, pos.coords.longitude], { icon: this.location_icon }).addTo(this.map)
      })
    }
    interval(3000).pipe(takeUntil(this.destroyed)).subscribe(x => {
      this.WatchPosition()
    })
    //this.WatchPosition();

  }

  ////*************** INIT FUNCTON *************/////
  ngAfterViewInit(): void {
    this.initMap();
    this.clientInfo = this.clientService.getClientInfo();
    console.log(this.clientInfo)


  }
  myCercle
  WatchPosition() {
    navigator.geolocation.watchPosition((pos) => {
      //console.log(`latitude of watch :${pos.coords.latitude},longitude of watch:${pos.coords.longitude}`)

      let raduis = 5000;
      if (this.myCercle !== undefined) {
        this.map.removeLayer(this.myCercle)
      }

      this.myCercle = L.circle([pos.coords.latitude, pos.coords.longitude], { color: "blue", fillColor: "#cce6ff", radius: raduis }).addTo(this.map);
      this.clientService.getPosition({ "MapUp": [pos.coords.latitude, pos.coords.longitude], "Raduis": raduis });

    }, (err) => {
      //console.log(`err :${err}`)
    },
      {
        enableHighAccuracy: true,
        timeout: 3000
      })

  }
  ngOnDestroy() {

    this.destroyed.next();
    this.destroyed.complete();
  }
  /////////************** INTERFACE FUNCTIONS **************/////////////
  manageProgress() {
    if (this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress + incr;
    }
  }

  showcheck() {
    this.Status = true
    this.hide = !this.hide;
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
  ///////////////////////////////////////////////////////////



  ///////////*********** MAP FUNCTION **************///////
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
    var marker = L.marker([this.lat, this.lon], { icon: location_icon })
    this.inter = interval(1000).subscribe(x => {
      if (navigator.geolocation) {
        if (this.percentage == 100) {
          this.inter.unsubscribe();
          this.clientInfos["lat"] = this.latclt
          this.clientInfos["lon"] = this.lonclt
        }
        var options = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 2000
        };
        var geoId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
          if (position) {

            var newlat = position.coords.latitude
            var newLon = position.coords.longitude;
            if (newlat != this.lat || newLon != this.lat) {
              this.lat = newlat
              this.lon = newLon
              this.list.push(position)
              if (position.coords.accuracy < this.acc) {
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
          }
        },
          (error: GeolocationPositionError) => console.log(error), options);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }

  // distance;
  getDistance() {
    //console.log("Distance2 :"+this.Distance );
    return this.clientService.getDistance();
  }

  async getLocation() {

    // interval(1000).subscribe(x => {
    //console.log("yesssss")
    if (navigator.geolocation) {
      let raduis = 300;
      this.map.setView(new L.LatLng(this.latclt, this.lonclt), 11, { animation: true });
      //L.circle([this.latclt, this.lonclt], {color:"blue",fillColor:"#cce6ff",radius:raduis}).addTo(this.map);

      //console.log('LatitudeOfUpadate: ' + this.latclt + ' LongitudeOfUpadate: ' + this.lonclt);
      //this.clientService.getPosition({"MapUp":[this.latclt, this.lonclt],"Raduis":raduis});

    }
    // })

  }

  SessionTerminate = false;
  ValidatePosition() {

    return this.clientService.ActiveTheButton();
  }

  ////////////////////////////////////////////////////////////////////

  /////*********** TIMER FUNCTION *******/////////
  testTimer() {
    this.percentage = 0
    interval(300).subscribe(x => {
      if (this.percentage < 100) {
        this.percentage += 4
      }
    });
  }

  ///////////***** Read NFC and Verfiy SMS from NanoHTTPD **********///////////////

  //**** READ NFC ****//
  Read() {
    console.log("read")

    this.clientService.getNFC().subscribe(
      res => {
        console.log(res)
        this.clientInfo.geometry.properties.nfc = res;
        console.log(this.clientInfo)
      }
    )
  }

  //**** SEND SMS ****//
  SendSMS(phone) {
    this.clientService.getSMS(phone).subscribe(
      res => {
        console.log(res)
        this.verification_code = res.code
      });
  }

  //**** VERIFY SMS ****//
  disbale_sms;
  display;
  Verify(code: string) {
    this.disbale_sms = true;
    //this.clientInfos.PhoneNumber = this.PhoneNumber
    this.timer(this.timeLeft);
    this.SendSMS(this.PhoneNumber);
   // console.log(this.PhoneNumber) 
  }
  
  VerifySMS() {
    this.verification_code='0000'
    if (this.verification_code === this.codeSMS) {
      this.status = "the code is correct"
      this.clientInfo.geometry.properties.PhoneNumber = this.PhoneNumber
    } else {
      this.status = "the code is incorrect"
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

  /////////////////////****** UPDATE CLIENT INFOS *******/////////////////
  async Update() {
    console.log(this.clientInfos)

    this.dialogConf = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: true
    });
    this.dialogConf.componentInstance.confirmMessage = "update"
    // ***************** scanned codes ************* //
    if (this.ListCodes.length != 0) {
      this.ListCodes.forEach(element => {
        if (element.nbr == 1) {
          this.clientInfo.geometry.properties.codeDANON = element.value;
        } else if (element.nbr == 2) {
          this.clientInfo.geometry.properties.codeCOLA = element.value
        } else if (element.nbr == 3) {
          this.clientInfo.geometry.properties.codeFGD = element.value
        } else if (element.nbr == 4) {
          this.clientInfo.geometry.properties.codeQR = element.value
        }
      });
    }

    if(this.clientInfo.geometry.properties.TypeDPV!="Detail"){
      this.clientInfo.geometry.properties.detailType=null
    }
    if (this.clientInfos.NFCPhoto != null) {
      console.log("BDL NFC Photo")
      this.clientInfo.geometry.properties.nfc.NFCPhoto = this.clientInfos.NFCPhoto

      this.clientInfo.geometry.properties.NFCP = null
    }
    if (this.clientInfos.PVPhoto != null) {
      console.log(" bdl1 PV Photo ")
      this.clientInfo.geometry.properties.PVPhoto = this.clientInfos.PVPhoto
      this.clientInfo.geometry.properties.PVP = null
    }
    console.log("**********************************")
    console.log(this.clientInfo)
    // add user ids
    this.clientInfo.geometry.properties.updatedBy = this.user._id;
    this.clientInfo.geometry.properties.userRole = this.user.role;
    this.clientInfo.geometry.properties.updated_at = new Date();
    this.clientInfo.geometry.properties.created_at = this.clientInfo.geometry.properties.created_at;
    console.log('########## Updated Client ##########')
    console.log(this.clientInfo)

    if (this.loggedUser.permissions.includes("Add NFC")) {
      if (this.clientInfo.geometry.properties.codeQR === null) {
        this.clientInfo.geometry.properties.status = "pink"
      }
      else {
        this.clientInfo.geometry.properties.status = "purple"
      }
    }
    if (!this.onlineOfflineService.isOnline) {
      this.clientService.addTodoUpdate(this.clientInfo)
      this.UpdateDexie()
      //this.UpdateIndexDB()
    } else {
      this.clientService.updateClient(this.clientInfo).subscribe(res => {
        console.log(res)
        if(res.modifiedCount==1){
          this.dialogConf.close()
          this.openAlertDialog("The Client is updated!", "Ok")
          this.UpdateDexie()
        }
        
      },err =>{
        this.dialogConf.close()
        this.openAlertDialog("There is an error! Try again","Ok")
        console.log("errooooooooor")
        console.log(err)
      });
     
      //this.UpdateIndexDB()
    }
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

  //////////************ UPDATE CLIENT IN INDEXEDB ************/////////////
  version = 6;
  UpdateDexie(){
    var db = new Dexie("off").open().then((res) => {
      if (this.clientInfo.geometry.properties.PVP == null) {
        this.clientInfo.geometry.properties.PVP = this.clientInfo.geometry.properties.PVPhoto
      }
      if (this.clientInfo.geometry.properties.NFCP == null) {
        this.clientInfo.geometry.properties.NFCP = this.clientInfo.geometry.properties.nfc.NFCPhoto
      }
      var client = { _id: this.clientInfo._id, Valeur:this.clientInfo }
      console.log(client)
      res.table("pdvs").update(this.clientInfo._id,this.clientInfo).then(r=>{
        console.log(r) 
        this._router.navigate(['/map'])
      });
    
    });
  }
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
      // console.log(this.clientInfo)
      objectStoreRequest.onsuccess = (event) => {
        if (this.clientInfo.geometry.properties.PVP == null) {
          this.clientInfo.geometry.properties.PVP = this.clientInfo.geometry.properties.PVPhoto
        }
        if (this.clientInfo.geometry.properties.NFCP == null) {

          this.clientInfo.geometry.properties.NFCP = this.clientInfo.geometry.properties.nfc.NFCPhoto

        }
        console.log(this.clientInfo.geometry)

        var elm = JSON.parse(objectStoreRequest.result.Valeur);
        console.log("********************element*****************")
        console.log(objectStoreRequest.result._id)
        var client = { _id: String(objectStoreRequest.result._id), Valeur: JSON.stringify(this.clientInfo.geometry) }
        console.log(client)
        var objectStoreRequest1 = objectStore.put(client);
        objectStoreRequest1.onsuccess = (event) => {
          console.log('Done Update');
          this._router.navigate(['/map']).then(() => {
            window.location.reload();
          })
        };
      }
    };
  }

}
