import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})

export class AddclientComponent implements OnInit {

  qrResultString: string;
  isShown: boolean = false; // hidden by default

  constructor() { }

  ngOnInit(): void {
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
