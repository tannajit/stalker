import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {BehaviorSubject} from 'rxjs';
import { AdminService } from '../admin.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog'
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;
  dataSource;
  columnsToDisplay = ['Id', 'Name','CIN','Phone Number', 'Email', 'Role','Status', 'Actions'];
  dataSubject = new BehaviorSubject<Element[]>([]);
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.adminService.getAllUsers().subscribe(res=>{
      console.log("---")
      console.log(res)
      this.users = res
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.users;
    })
  }

  deleteUser(user){
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete this user?"

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions (delete)
        // console.log("clicked yes")
        this.adminService.deleteUser(user).subscribe(res=>{

        })
      }
      this.dialogRef = null;
    });
    
  }

  updateUser(user){
    this.adminService.setUserInfo(user)
    this._router.navigate(['/updateUser'])
  }

  
}
