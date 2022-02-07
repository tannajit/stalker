import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserRoleComponent } from '../user-role/user-role.component';
import { AddRoleComponent } from '../add-role/add-role.component';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';
import { DeleteRoleComponent } from '../delete-role/delete-role.component';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource
  columnsToDisplay = ['Role','Permissions','Sectors','Actions'];
  roles
  dialogRef: MatDialogRef<UserRoleComponent>;
  dialogRef3: MatDialogRef<ConfirmationDialogComponent>;
  dialogRef2: MatDialogRef<AddRoleComponent>;
  dialogRef4: MatDialogRef<DeleteRoleComponent>;

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.getRoles()
    this.changeDetectorRefs.detectChanges();
  }
  

  getRoles(){
    this.adminService.getAllRoles().subscribe(res=>{
      console.log("---")
      console.log(res)
      this.roles = res.details.roles
      //console.log(this.roles)
      this.dataSource = new MatTableDataSource(this.roles);
      this.dataSource.data = this.roles.reverse();
      this.dataSource.paginator = this.paginator;
    })
  }

  onUpdateClick(role){
    this.dialogRef = this.dialog.open(UserRoleComponent, { data: role });
    this.getRoles()
    this.dataSource = new MatTableDataSource(this.roles);
    this.changeDetectorRefs.detectChanges();
  }

  onDeleteClick(role){
    this.dialogRef3 = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef3.componentInstance.confirmMessage = "Are you sure you want to delete this role?"

    this.dialogRef3.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions (delete)
        // console.log("clicked yes")
        this.adminService.deleteRole(role).subscribe(res=>{
          console.log(res)
          if(res.length==0){
            var msg = "The role is deleted successfully!"
            this.openAlertDialog(msg)
          }else if(res.length>0){
            this.deleteRole({'users': res,'role':role})
            console.log("kaynin users")
          }else{
            var mesg="The role is not deleted, there is a problem"
            this.openAlertDialog(mesg)
          }
        })
        // this.getUsers()
        // this.dataSource = new MatTableDataSource(this.users);
        // this.changeDetectorRefs.detectChanges();
        // this.openAlertDialog('The user is deleted successfully!')
        // this.selectedRole=this.selectedSector=this.selectedStatus=undefined
      }
      this.dialogRef3 = null;
    });
    
  }

  deleteRole(data){
    this.dialogRef4 = this.dialog.open(DeleteRoleComponent, { data: data });
  }

  addRole(){
    this.dialogRef2 = this.dialog.open(AddRoleComponent);
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
