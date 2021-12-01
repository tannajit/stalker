import { Component, OnInit } from '@angular/core';

const incr = 1;
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})

export class AddclientComponent implements OnInit {

  progress = 0;
  qrResultString: string;
  isShown: boolean = false; // hidden by default

  constructor() { }

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
  
  toggleShow() {
    this.isShown = !this.isShown;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

}
