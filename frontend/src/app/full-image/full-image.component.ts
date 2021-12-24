import { Component, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css']
})
export class FullImageComponent implements OnInit {

  imageURL
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.imageURL = this.data;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~ Image"+this.imageURL)
  }

}
