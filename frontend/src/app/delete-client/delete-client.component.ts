import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { interval } from 'rxjs';
import * as L from 'leaflet';
import { VideoRecordingService } from '../video-recording.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { ThrowStmt } from '@angular/compiler';

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
  showWebcam = false
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage = null;
  PDVImage

  constructor(
    
    private router :Router,
    private clientService :ClientsService
  ) {}

  async ngOnInit() {
    
  }

  startRecording2() {
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
  stopRecording2() {
    this.mediaRecorder.stop();
    console.log("Strem:"+ this.stream.getTracks()[0].stop())
    console.log("blobs:"+ this.recordedBlobs)

    this.thestream=this.stream
    var blob = new Blob(this.recordedBlobs, {type: "video/webm"});
    var url = (window.URL || window.webkitURL).createObjectURL(blob);
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
        // const reader = new FileReader();
        //  reader.addEventListener('loadend', () => {
        //      //reader.result //contains the contents of blob as a typed array
        //      console.log("ééééééééé")
        //      console.log(reader.result)
        //      //this.Video1={"buffer":reader.result}
        //  });
        //  reader.readAsArrayBuffer(videoBuffer)

        //console.log(this.Video)

        console.log("lllll")
        //console.log(uri)
       this.downloadUrl = window.URL.createObjectURL(videoBuffer); // you can download with <a> tag

        console.log("this.downloadUrl ")
        console.log(this.downloadUrl);
        this.recordVideoElement.src =this.downloadUrl;

      };
    } catch (error) {
      console.log(error);
    }
  }

  

  displayVideo(){
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

  testTimer() {
    this.percentage = 0
    interval(300).subscribe(x => {
      if (this.percentage < 100) {
        this.percentage += 50
      }
    });
  }

  

  

  displayCam(){
    this.showWebcam = !this.showWebcam;
  }

  get triggerObservable(): Observable < void> {
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

     //console.log("dataV:"+ this.Video )
    //  const reader = new FileReader();
    //  reader.addEventListener('loadend', () => {
    //      //reader.result //contains the contents of blob as a typed array
    //      console.log("ééééééééé")
    //      console.log(reader.result)
    //      //this.Video1={"buffer":reader.result}
    //  });
    //  reader.readAsArrayBuffer(this.Video);
     //reader.readAsText(this.Video);

     

    var photo;

    var binary = new Uint8Array(2)
    binary[0] = 65
    binary[1] = 66

    var fd = new FormData()
    fd.append('json_data', JSON.stringify({a: 1, b: 2}))
    fd.append('binary_data', new Blob([binary.buffer]))
    console.log("dzddfefefe")
    console.log(fd)

    fetch('http://localhost:3000/api1/ReadVideo', {
      method: 'POST',
      body: fd
    }).then(console.log)

    
    //  fetch(this.downloadUrl, {
    //     "headers": {},
    //     "method": "GET"
    //   }). then(async function(resp) {
    //       console.log("data")
    //       console.log( await resp.blob())
    //       //return resp.blob();
    //   })


    if(this.webcamImage==null) {photo=""}else{photo=this.webcamImage}
    var test=new Uint8Array(this.Video1  as ArrayBuffer)
    this.checkInfos={"data": this.data,"raison":this.raison,"video": this.downloadUrl,"Photo":photo,"test":test,"test2":this.text}
    this.clientService.DeleteRequest( this.checkInfos).subscribe(res=>{console.log(res)})
    console.log("uuuuuuuuuuuuuuu")
    //this.ReadV()
  }
  content;
  ReadV(){
    const str2blob = txt => new Blob([txt]);
    this.clientService.ReadV().subscribe(res=>
      this.content=str2blob(res)
      //console.log(str2blob(res))
      )
      let uri =window.URL.createObjectURL(this.content)
      //console.log(str2blob("Poopcode"))

    //  let  blob = this.content.blob()
     console.log(uri)
  }
  
   recorderOnDataAvailable(event) {
    if (event.data.size == 0) return;
    this.recordedBlobs.push(event.data);
  }



}
