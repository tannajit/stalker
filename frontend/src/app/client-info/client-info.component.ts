import { Component, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core'; 
import { ClientsService } from '../clients.service';
import { MapComponent } from '../map/map.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {


  loggedUser;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientsService,
    public dialogRef: MatDialogRef<MapComponent>,
    public _router: Router ) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
  }

  onUpdateClick(){
    this.clientService.setCurrentClientInfo(this.data)
    this.dialogRef.close();
    this._router.navigate(['/updateclient'])
    

  }
  

}
