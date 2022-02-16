import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  public confirmMessage: string;

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    private _auth: AuthenticationService) { }

  ngOnInit(): void {
  }


  logout() {
    console.log("logout ")
    this._auth.forceLogout = true;  /// force to logout even if there's cache in offline 
    this._auth.logoutUser()
  }
}
