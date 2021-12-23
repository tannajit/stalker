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
  clientOfSeller;
  clientOfAuditor;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientsService,
    public dialogRef: MatDialogRef<MapComponent>,
    public _router: Router ) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
    this.clientService.getClientBySeller(this.data.geometry.coordinates[1],this.data.geometry.coordinates[0]).subscribe(res=>{
      this.clientOfSeller = res;
      console.log("!!!!!!!!!!!!!!!! Seller !!!!!!!!!!!!!!")
      console.log(res)
      this.clientService.getClientByAuditor(this.data.geometry.coordinates[1],this.data.geometry.coordinates[0]).subscribe(res=>{
        this.clientOfAuditor = res;
        console.log("!!!!!!!!!!!!!!!! Auditor !!!!!!!!!!!!!!")
        console.log(res)
      })
    })
    
    // console.log("############################")
    // console.log(this.data.geometry.coordinates[1])
  }

  onUpdateClick(){
    this.clientService.setCurrentClientInfo(this.data)
    this.dialogRef.close();
    this._router.navigate(['/updateclient'])

  }
  

}
