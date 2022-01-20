import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource
  roles=[]

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getRoles()
    console.log(this.roles)
  }
  

  getRoles(){
    this.adminService.getAllRoles().subscribe(res=>{
      console.log("---")
      console.log(res)
      this.roles = res.details.roles
      this.dataSource = new MatTableDataSource(this.roles);
      this.dataSource.data = this.roles.reverse();
      this.dataSource.paginator = this.paginator;
    })
  }

}
