import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserRoleComponent } from '../user-role/user-role.component';
import { AddRoleComponent } from '../../add-role/add-role.component';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource
  columnsToDisplay = ['Role','Permissions','Actions'];
  roles
  dialogRef: MatDialogRef<UserRoleComponent>;
  dialogRef2: MatDialogRef<AddRoleComponent>;

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

  addRole(){
    this.dialogRef2 = this.dialog.open(AddRoleComponent);
  }

}
