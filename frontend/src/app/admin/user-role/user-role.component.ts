import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  
  permissions = [
    "Add NFC-Update",
    "Add NFC-Add",
    "Update Client",
    "Delete Client",
    "Add Client",
    "Validate Delete Requests",
    "Validate Add Requests",
    "Extract Data"
  ]

  sectors
  selectedPermissions = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _admin: AdminService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<UserRoleComponent>
  ) { }

  ngOnInit(): void {
    this.data.permissions.forEach(element => {
      this.selectedPermissions.push(element)
    });

    this.sectors= this.data.sectors
  }

  deletePermission(perm){
    console.log("deleted")
    this.permissions = this.permissions.filter(o => o !== perm);
  }
 
  onChange(){
    console.log(this.selectedPermissions)
  }

  updateRole(role){
    var roleToUpdate={
      'role': role,
      'permissions': this.selectedPermissions,
      'sectors': this.sectors
    }
    this._admin.updateRole(roleToUpdate).subscribe(res=>{
      console.log(res)
      if(res.modifiedCount){
        var msg = "The role is updated successfully!"
        this.openAlertDialog(msg)
        this.dialogRef.close()
      }else{
        var mesg="The role is not updated, there is a problem"
        this.openAlertDialog(mesg)
      }
    })
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
