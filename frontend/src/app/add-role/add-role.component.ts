import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';
import { AdminService } from '../admin/admin.service';
import { UserRoleComponent } from '../admin/user-role/user-role.component';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  permissions = [
    "Add NFC",
    "Update Client",
    "Delete Client",
    "Add Client",
    "Validate Delete Requests",
    "Validate Add Requests",
    "Extract Data"
  ]

  role
  selectedPermissions = [];
  constructor(
    private _admin: AdminService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<UserRoleComponent>
  ) { }

  ngOnInit(): void {
  }

  addRole(){
    var roleToAdd={
      'role': this.role,
      'permissions': this.selectedPermissions
    }
    this._admin.addRole(roleToAdd).subscribe(res=>{
      console.log(res)
      if( res.modifiedCount==1){
        var msg = "The role is added successfully!"
        this.openAlertDialog(msg)
        this.dialogRef.close()
      }else{
        var mesg="The role is not added, there is a problem"
        this.openAlertDialog(mesg)
      }
    })
      
  }

  onChange(){
    console.log(this.selectedPermissions)
  }

  openAlertDialog(message) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: message,
        buttonText: {
          ok: 'Ok',
        }
      }
    });
  }

}
