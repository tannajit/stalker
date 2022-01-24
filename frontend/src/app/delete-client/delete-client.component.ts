import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { interval } from 'rxjs';
import * as L from 'leaflet';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { ThrowStmt } from '@angular/compiler';
import { OnlineOfflineServiceService } from '../online-offline-service.service';
import { takeUntil, switchMap } from 'rxjs/operators';

declare var MediaRecorder: any;
@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DeleteClientComponent implements AfterViewInit {

  // video variables
  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef;
  @ViewChild('video') videoElementRef: ElementRef;

  videoElement: HTMLVideoElement;
  recordVideoElement: HTMLVideoElement;
  mediaRecorder: any;
  recordedBlobs=[]
  isRecording: boolean = false;
  downloadUrl: string;
  stream: MediaStream;
  showVideo = false

  

  list = []
  Status;
  hide;
  percentage = 0;
  acc = 1222000;
  inter;
  map;
  lat = 33.2607691
  lon = -7.6222771
  clientInfos = null
  latclt
  lonclt
  show
  raison
  selected
  checkInfos;
  // photo
  user = JSON.parse(localStorage.getItem("user"));
  
  showWebcam = false
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage = null;
  PDVImage
  private destroyed: Subject<void> = new Subject<void>();
  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30, 30]
  });
  constructor(
    private readonly onlineOfflineService: OnlineOfflineServiceService,
    private router: Router,
    private clientService: ClientsService
  ) { }

  async ngOnInit() {
    console.log("Lat",this.lat)
    console.log("Lon",this.lon)
    console.log("Lat",this.latclt)
    console.log("Lon",this.lonclt)

      // interval(1000).pipe( takeUntil(this.destroyed)).subscribe(x => {
      //   this.getLocation()
      // })

      if(!navigator.geolocation) console.log("Location is not supported")

      else
      {
        navigator.geolocation.getCurrentPosition((pos)=>{
          console.log(`latitude :${pos.coords.latitude},longitude :${pos.coords.longitude}`)
          this.map.setView([pos.coords.latitude,pos.coords.longitude],13)
          L.marker([pos.coords.latitude,pos.coords.longitude],{ icon: this.location_icon }).addTo(this.map)
        })
      }

      interval(3000).pipe( takeUntil(this.destroyed)).subscribe(x => {
        this.WatchPosition()
        })
      //this.WatchPosition()
    
  }
  myCercle;
  WatchPosition(){
    
      
    let raduis=5000
    navigator.geolocation.watchPosition((pos)=>{
    console.log(`latitude of watch :${pos.coords.latitude},longitude of watch:${pos.coords.longitude}`)
    
    if (this.myCercle !== undefined) {
      this.map.removeLayer(this.myCercle)
    }
    
    this.myCercle=L.circle([pos.coords.latitude, pos.coords.longitude], {color:"blue",fillColor:"#cce6ff",radius:raduis}).addTo(this.map);
    this.clientService.getPosition({"MapUp":[pos.coords.latitude, pos.coords.longitude],"Raduis":raduis});
    },(err)=>{
      console.log(`err :${err}`)
    },
    {enableHighAccuracy:true,
    timeout:3000,
  }
    )
  }

  ngOnDestroy() {

    this.destroyed.next();
    this.destroyed.complete();
  }

  startRecording() {
    this.recordedBlobs = [];
    let options: any = { mimeType: 'video/webm' };

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      console.log(err);
    }

    this.mediaRecorder.start(); // collect 100ms of data
    this.isRecording = !this.isRecording;
    this.onDataAvailableEvent();
    this.onStopRecordingEvent();
  }
thestream;

  stopRecording() {
    this.mediaRecorder.stop();
    //   console.log("Strem:"+ this.stream.getTracks()[0].stop())
    //   console.log("blobs:"+ this.recordedBlobs)

    //   this.thestream=this.stream.getTracks()[0].stop()
    //   var blob = new Blob(this.recordedBlobs, {type: "video/webm"});
    // var url = (window.URL || window.webkitURL).createObjectURL(blob);
    // console.log("!!!"+url)
    // console.log("!!!"+blob)

    this.isRecording = !this.isRecording;
    console.log('Recorded Blobs: ', this.recordedBlobs);
  }

  playRecording() {
    if (!this.recordedBlobs || !this.recordedBlobs.length) {
      console.log('cannot play.');
      return;
    }
    this.recordVideoElement.play();
  }
dataV;
text;

  onDataAvailableEvent() {
    try {
      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data);
      

        }
      };
    } catch (error) {
      console.log(error);
    }
  }
  Video;
  fd;
  onStopRecordingEvent() {
    try {
       this.mediaRecorder.onstop = async (event: Event) => {
         const videoBuffer = new Blob(this.recordedBlobs, {
          type: 'video/webm'
        });
        console.log("==========================")
        console.log(videoBuffer.size)
        console.log(this.recordedBlobs)
        console.log("==========================")

        console.log(this.recordedBlobs.length)

        this.Video=await videoBuffer.arrayBuffer();
        console.log("==========================")

        var reader = new FileReader();
        reader.readAsDataURL(videoBuffer); 
        reader.onloadend =async ()=> {
        var base64data = reader.result;                
        console.log(base64data); 
        
        this.Video=base64data;
      }
        
        this.downloadUrl = window.URL.createObjectURL(videoBuffer); 

        console.log("this.downloadUrl ")
        console.log(this.downloadUrl);
        this.recordVideoElement.src =this.downloadUrl;

      };
    } catch (error) {
      console.log(error);
    }
  }

  displayVideo() {
    this.showVideo = true
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 360
        }
      })
      .then(stream => {
        this.videoElement = this.videoElementRef.nativeElement;
        this.recordVideoElement = this.recordVideoElementRef.nativeElement;

        this.stream = stream;
        this.videoElement.srcObject = this.stream;
      });

  }

  ngAfterViewInit(): void {
    this.initMap();

  }

  showcheck() {
    this.Status = true
    this.hide = !this.hide;
  }

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
          this.clientInfos.lat = this.latclt
          this.clientInfos.lon = this.lonclt
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
                console.log("latclt",this.latclt)
                console.log("lonclt",this.lonclt)

              }

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

  testTimer() {
    this.percentage = 0
    interval(300).subscribe(x => {
      if (this.percentage < 100) {
        this.percentage += 50
      }
    });
  }





  displayCam() {
    this.showWebcam = !this.showWebcam;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  handleImage(webcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.PDVImage = webcamImage.imageAsDataUrl;
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  toggleWebcam() {
    this.showWebcam = !this.showWebcam;
  }

  data =this.router.getCurrentNavigation().extras.state.dataClient
  Video1;

  Send(){

    var photo;
    
    if(this.webcamImage==null) {photo=""}else{photo=this.webcamImage}
    this.checkInfos={"data": this.data,"raison":this.raison,status:"Waiting","video":this.Video,"user":this.user._id,"role":this.user.role,"Photo":photo}

    //var test=new Uint8Array(this.Video1  as ArrayBuffer)
    if (!this.onlineOfflineService.isOnline) {
      this.clientService.addTodoDelete(this.checkInfos)
    } else {
      this.clientService.DeleteRequest(this.checkInfos).subscribe(res => { console.log(res)
      
        this.router.navigate(['/map'])
    })
    }
    console.log("uuuuuuuuuuuuuuu")
    //this.ReadV()
  }

    b64toBlob(dataURI) {
      
      var byteString = atob(dataURI.split(',')[1]);
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: 'video/webm' });
  }

  content;
    ReadVideo(){
      console.log(this.data._id)
      this.clientService.ReadVideo(this.data._id).subscribe(res=>{
      var blob = this.b64toBlob(res)
      this.downloadUrl = window.URL.createObjectURL(blob);
      console.log("this.downloadUrl")
      console.log(this.downloadUrl);
      this.recordVideoElement.src =this.downloadUrl;
      // console.log("resVideo")
      // console.log(res)
     })  
      //console.log("-------------------------------------  Read the video from the Database  -------------")
 
    

  }
  
  
   recorderOnDataAvailable(event) {
    if (event.data.size == 0) return;
    this.recordedBlobs.push(event.data);
  }

   // distance;
   getDistance(){
    //console.log("Distance2 :"+this.Distance );
    return this.clientService.getDistance();
  }
  // getLocation(){

  //   console.log("yesssss")
  //   if (navigator.geolocation) {
  //     let raduis =3;
  //     this.map.setView(new L.LatLng(this.latclt, this.lonclt), 11, { animation: true });
  //     L.circle([this.latclt, this.lonclt], {color:"blue",fillColor:"#cce6ff",radius:raduis}).addTo(this.map);
  
  //       console.log('LatitudeOfUpadate: ' + this.latclt +
  //         ' LongitudeOfUpadate: ' + this.lonclt);
  //     this.clientService.getPosition({"MapUp":[this.latclt, this.lonclt],"Raduis":raduis});

  //     }


  // }
  
  SessionTerminate=false;
  ValidatePosition(){

    return this.clientService.ActiveTheButton();
  }


}