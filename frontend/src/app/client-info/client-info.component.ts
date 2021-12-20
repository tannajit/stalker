import { Component, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {

  }
  

}
