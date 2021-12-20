import { Component, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { Inject } from '@angular/core'; 
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {


  loggedUser;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientsService ) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
  }

  onUpdateClick(){
    

  }
  

}
