import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ClientsService } from '../clients.service';
import { MapComponent } from '../map/map.component';
import { Router } from '@angular/router';
import { FullImageComponent } from '../full-image/full-image.component';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from '../admin/admin.service';

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
  safeURL; 
  videoURL: "https://www.youtube.com/watch?v=iloN8k4zdgE&ab_channel=MRUTaste"
  Offline = true;


  ////********* CONSTRUCTOR ******///////////////
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientsService,
    public dialogRef: MatDialogRef<MapComponent>,
    public dialogRef2: MatDialogRef<FullImageComponent>,
    public dialog: MatDialog,
    public _router: Router,
    public _admin: AdminService,
    private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ///////////////////////////////////////////////

  ////********** INIT FUNCTIONC **********/////

  ngOnInit(): void {
    console.log("############################ Wa client")
    console.log(this.data)
    if (this.data._id.includes("-")) {
      this.Offline = true;
    }
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

  ActiveTheButton() {
    //console.log("fjdkfh"+ this.clientService.ActiveTheButton())
    if (this.Offline == true) {
      //console.log("nmiiiiii offline ")
      return true;
    }

    else
    //console.log("sb7an lah ")
    {
      //console.log("nmi nta mriid rah machi offline ")
      return this.clientService.ActiveTheButton();
    }

  }

  deleteRequest() {
    this.dialogRef.close();
    this._router.navigateByUrl('/deleteClient', { state: { dataClient: this.data } });
  }

  ////**********VALIDATE FUNCTION ***********////
  validate(id, status) {
    console.log("######## id:" + id)
    this.clientService.validateAuditorInfo({ 'id': id, 'status': status }).subscribe(res => console.log(res))
    if (status == 'green') {
      var message = "Client Validated, synchronize to see the result."
      var btn = "OK"
      this.openAlertDialog(message, btn)
      this._router.navigate(['/map'])
    } else {
      var message = "Client Refused, synchronize to see the status changed."
      var btn = "OK"
      this.openAlertDialog(message, btn)
      this._router.navigate(['/map'])
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

  /// enbale Button
  /// status1: for DeletedRequests Collection status2: status
  EnableButton(status1, status2) {

    console.log(status1)
    console.log(status2)
  }

  validateDelete(request, status) {
    console.log(request)
    // Write the code to change status

    request.status = status
    this._admin.ValidateDeleteClient(request).subscribe(res => {
      console.log(res)
      var message = "This PDV has been deleted successfully!"
      //this.openAlertDialog(message)
      this.dialogRef.close();
    })
  }




}
