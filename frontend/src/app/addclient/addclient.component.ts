import { Component, OnInit } from '@angular/core';
import {ClientService} from "./client.service";
import {Observable, Subject} from "rxjs";

const incr = 1;
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})

export class AddclientComponent implements OnInit {
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
  progress = 0;
  
  constructor(private clientService:ClientService) { }
  
  ngOnInit(): void {
    setInterval(() => this.manageProgress(), 150 )
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
