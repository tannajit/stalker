import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.css']
})
export class DeleteRoleComponent implements OnInit {

  contentToCopy = []
  clickedCopy: boolean=false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    public dialog: MatDialog,
    private _router: Router
  ) { 
    data.users.forEach(element => {
      this.contentToCopy.push(element.email)
    });
  }

  ngOnInit(): void {
  }

  deleteRole(role){
    this.adminService.deleteRoleDefinitally(role).subscribe(res=>{
      console.log(res)
      if(res){
        var msg = "The role is deleted successfully!"
        this.openAlertDialog(msg)
      }else{
        var mesg="The role is not deleted, there is a problem"
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
