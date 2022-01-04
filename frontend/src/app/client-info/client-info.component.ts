import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ClientsService } from '../clients.service';
import { MapComponent } from '../map/map.component';
import { Router } from '@angular/router';
import { FullImageComponent } from '../full-image/full-image.component';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  ////******* VARIABLES DECLARATIONS ******/////
  loggedUser;
  clientOfSeller;
  clientOfAuditor;
  //////////////////////////////////////////////

  ////********* CONSTRUCTOR ******///////////////
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientsService,
    public dialogRef: MatDialogRef<MapComponent>,
    public dialogRef2: MatDialogRef<FullImageComponent>,
    public dialog: MatDialog,
    public _router: Router) { }

  ///////////////////////////////////////////////

  ////********** INIT FUNCTIONC **********/////

  ngOnInit(): void {
    console.log("############################ Wa client")
    console.log(this.data)
    this.loggedUser = JSON.parse(localStorage.getItem("user"))
    if (this.loggedUser.role == 'Admin' || this.loggedUser.role == 'Back Office') {
      this.clientService.getClientBySeller(this.data._id).subscribe(res => {
        this.clientOfSeller = res;
        console.log("!!!!!!!!!!!!!!!! Seller !!!!!!!!!!!!!!")
        console.log(res)
        this.clientService.getClientByAuditor(this.data._id).subscribe(res => {
          this.clientOfAuditor = res;
          console.log("!!!!!!!!!!!!!!!! Auditor !!!!!!!!!!!!!!")
          console.log(res)
        })
      })
    } else {
      console.log("############################ Wa client")
      console.log(this.data)
    }
  }
  //////////////////////////////////////////////////////////

  ////*********UPDATE CLIENT INFOS *********/////
  onUpdateClick() {
    this.clientService.setCurrentClientInfo(this.data)
    this.dialogRef.close();
    this._router.navigate(['/updateclient'])

  }
  ActiveTheButton(){
    //console.log("fjdkfh"+ this.clientService.ActiveTheButton())
    return this.clientService.ActiveTheButton();
  }
  deleteRequest(){

    this.dialogRef.close();
    //this._router.navigateByUrl('/deleteClient',{dataClient:this.data})
    this._router.navigateByUrl('/deleteClient', { state: { dataClient:this.data } });
    //this.clientService.De
  }

 ////**********VALIDATE FUNCTION ***********////

  validate(id, status) {
    console.log("######## id:" + id)
    this.clientService.validateAuditorInfo({ 'id': id, 'status': status }).subscribe(res => console.log(res))
    if (status == 'green') {
      var message = "Client Validated, synchronize to see the result."
      var btn = "OK"
      this.openAlertDialog(message, btn)
    } else {
      var message = "Client Refused, synchronize to see the status changed."
      var btn = "OK"
      this.openAlertDialog(message, btn)
    }
    this.dialogRef.close();

  }
  ///////////////////////////////////////////////////////

  ////********INTERFCE FUNCTIONS ******/////

  openImage(url) {
    this.dialogRef2 = this.dialog.open(FullImageComponent, { data: url })
  }

  openAlertDialog(msg, btn) {

    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: msg,
        buttonText: {
          ok: btn,
        }
      }
    });
  }
  

  navigateToMap(lat, long) {
    this._router.navigate(['/map/' + lat + "/" + long])
    this.dialogRef.close();
  }

 
}
