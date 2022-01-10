import { Component, OnInit,ElementRef} from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})

export class PlanningComponent implements OnInit {
  @ViewChild("video")
  video: ElementRef;
  
 
 @ViewChild("canvas")
  canvas: ElementRef;
  constructor() { }

   chunks = [];
   mediaRecorder;

  ngOnInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
        console.log("wtf")
          this.mediaRecorder = new MediaRecorder(stream);
          this.mediaRecorder.start(); 
          this.mediaRecorder.ondataavailable = (e)=> {
            console.log("*****************")
          this.chunks.push(e.data);
        };
        
         
          //var videoStream = canvas.captureStream(30); // the parameter is the desired framerate, see the MDN doc for more info
      });
    }
  }
  Capture() {
    //event.preventDefault();
   
    console.log("hhh")
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 1024, 768);
    var picture: any = this.canvas.nativeElement.toDataURL("image/png");
    //var img=this.canvas.nativeElement.toDataURL("video/png")
    console.log(this.chunks)
    //console.log(picture)
  } 
}
