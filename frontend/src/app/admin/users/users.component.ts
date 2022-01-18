import { Component, OnInit , ChangeDetectorRef,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {BehaviorSubject} from 'rxjs';
import { AdminService } from '../admin.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog'
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';
import { UserInfoComponent } from '../user-info/user-info.component';
import * as _ from 'lodash';
import { SettingsService } from 'src/app/settings/settings.service';
import { ClientsService } from 'src/app/clients.service';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  selectedStatus
  selectedRole
  selectedSector

  users;
  roles=[]
  Sectors=[]
  AllSectors=[]
  dataSource;
  columnsToDisplay = ['Name','CIN','Phone Number', 'Email', 'Role','Status', 'Actions'];
  dataSubject = new BehaviorSubject<Element[]>([]);
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;
  dialogRef2: MatDialogRef<UserInfoComponent>;

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private _router: Router,
    private changeDetectorRefs: ChangeDetectorRef,
    private _setting: SettingsService,
    private _admin: AdminService,
    private _client: ClientsService
    ) { }

  ngOnInit(): void {
    this.changeDetectorRefs.detectChanges();
    this.getUsers()
    this.getRoles()
    this.getAllSectors()
    console.log("###"+this.selectedStatus)
  }

  getAllSectors(){
    this._client.getAllSecteurs().subscribe(res => {
      console.log(res)
      res.forEach(element => {
        var idSector = Number(String(element.geometry.properties.idSecteur).slice(-2, -1))
        //console.log(idSector)
        var machine = (idSector == 0) ? "Onion" : "CMG"
        //console.log(machine)
        var result = element.geometry.properties.idSecteur + " - " + machine + " - " + element.geometry.properties.name
        //console.log(result)
        var obj={
          id:element.geometry.properties.idSecteur,
          detail:result
        }
        this.AllSectors.push(element.geometry.properties.idSecteur)
        this.Sectors.push(obj)
      });
    })
  }

  getRoles(){
    // get roles list
    this._setting.getSettings('param=role').subscribe(res => {
      this.roles = res.details.roles
      console.log(res)
    })
  }


  getUsers(){
    this.adminService.getAllUsers().subscribe(res=>{
      console.log("---")
      console.log(res)
      this.users = res
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.data = this.users.reverse();
      this.dataSource.paginator = this.paginator;
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
        this.getUsers()
        this.dataSource.data = this.users;
        this.changeDetectorRefs.detectChanges();
        this.openAlertDialog('The user is deleted successfully!')
        this.selectedRole=this.selectedSector=this.selectedStatus=undefined
      }
      this.dialogRef = null;
    });
    
  }

  updateUser(user){
    console.log(this.dataSource)
    this._router.navigateByUrl('/updateUser', { state: { dataUser:user,userid:user.UserID,userrole:user.role } });

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
  
  restoreUser(user){

    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to bring back this user?"

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // do confirmation actions 
        // console.log("clicked yes")
        this.adminService.restoreUser(user).subscribe(res=>{
          
        })
        this.getUsers()
        this.dataSource.data = this.users;
        this.changeDetectorRefs.detectChanges();
        this.openAlertDialog('The user is restored successfully!')
        this.selectedRole=this.selectedSector=this.selectedStatus=undefined
      }
      this.dialogRef = null;
    });
      
    
  }

  viewUserDetails(user){
    this.dialogRef2 = this.dialog.open(UserInfoComponent, { data: user });
  }

  // search input
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

// filterage based on status select
  onChangeStatus($event){
    console.log($event.value)
    console.log(this.selectedRole)
    console.log(this.selectedSector)
    if($event.value == 'all'){
      console.log("status = all")
      // when we select all for status 
      let filtered=[]
      _.filter(this.users,(item) =>{

          
        if(this.selectedRole=='all' && !this.selectedSector){
          filtered=this.users
          
        }if(this.selectedSector=='all' && !this.selectedRole){
          filtered=this.users
        }if(this.selectedRole=='all' && this.selectedSector=='all'){
          filtered=this.users
        }if(!this.selectedRole && !this.selectedSector){
          filtered=this.users
        }if(this.selectedRole && (!this.selectedSector || this.selectedSector=='all') && this.selectedRole!='all'){
          // when we select all for status and only the role is selected already
          if(item.role==this.selectedRole){
              filtered.push(item)
          }
        }if(this.selectedSector && (!this.selectedRole || this.selectedRole=='all') && this.selectedSector!='all'){
          // when we select all for status and only the role is selected already
          item.sectors.forEach(element =>{
            if(element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
        }if(this.selectedRole && this.selectedSector && (this.selectedRole!='all' && this.selectedSector!='all')){
          // if we select all for status and the role and the sector ar both selected
          item.sectors.forEach(element =>{
            if(item.role==this.selectedRole && element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }if(this.selectedSector && (!this.selectedRole) && this.selectedSector!='all'){
          // if we select all for status knowing that only the sector is selected already
          item.sectors.forEach(element =>{
            if(element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }


      })
      this.dataSource.data = filtered
      
      

    }else{
      // let filteredData = _.filter(this.users,(item) =>{
      //   return item.status.toLowerCase() ==  $event.value.toLowerCase();
      // })
      // this.dataSource = new MatTableDataSource(filteredData);
      let filtered=[]
      _.filter(this.users,(item) =>{

        if((!this.selectedRole || this.selectedRole=='all') && (!this.selectedSector || this.selectedSector=='all')){
          // when we select a status and others are not selected  
          if(item.status.toLowerCase() ==  $event.value.toLowerCase()){
                filtered.push(item)
            }
        }if(this.selectedRole && (!this.selectedSector || this.selectedSector=='all')){
          // when we select a status knowing that only the role is selected already
          if((item.status.toLowerCase() ==  $event.value.toLowerCase()) && item.role==this.selectedRole){
              filtered.push(item)
          }
        }if(this.selectedSector && (!this.selectedRole || this.selectedRole=='all')){
          // if we select the status knowing that only the sector is selected already
          item.sectors.forEach(element =>{
            if(item.status.toLowerCase() ==  $event.value.toLowerCase() && element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }if(this.selectedRole && this.selectedSector){
          // if we select a status and the role and the sector ar both selected
          item.sectors.forEach(element =>{
            if(item.status.toLowerCase() ==  $event.value.toLowerCase() && item.role==this.selectedRole && element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }
    })
    this.dataSource.data = filtered
    
  }
}

// filterage based on role select
  onChangeRole($event){
    console.log(this.selectedRole)
    if($event.value == 'all'){

      // when we select all for role and the others are not selected

      let filtered=[]
      _.filter(this.users,(item) =>{

        if(this.selectedStatus=='all' && !this.selectedSector){
          filtered=this.users
        }if(this.selectedSector=='all' && !this.selectedStatus){
          filtered=this.users;
        }if(this.selectedSector=='all' && this.selectedStatus=='all'){
          filtered=this.users
        }if(!this.selectedStatus && !this.selectedSector){
          filtered=this.users
        }if(this.selectedStatus && (!this.selectedSector || this.selectedSector=='all')){
          // when we sellect all for role and the status is selected
          console.log("pyaa bani")
          if(item.status==this.selectedStatus){
              filtered.push(item)
          }

        }if(this.selectedStatus && this.selectedSector){
          // when we sellect all for role and the status and the sector ar both selected
          item.sectors.forEach(element =>{
            if(item.status==this.selectedStatus && element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }if(this.selectedSector && (!this.selectedStatus || this.selectedStatus=='all')){
          // if we select all for role knowing that only the sector is selected already
          item.sectors.forEach(element =>{
            if(element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }
      })
      this.dataSource.data = filtered

      


    }else{
      let filtered=[]
      _.filter(this.users,(item) =>{

        if((!this.selectedSector || this.selectedSector=='all') && (!this.selectedStatus || this.selectedStatus=='all')){
            // when we select a role and others are not selected
          if(item.role.toLowerCase() ==  $event.value.toLowerCase()){
                filtered.push(item)
            }
        }if(this.selectedStatus && (!this.selectedSector || this.selectedSector=='all') && this.selectedStatus!='all'){
          // when we select a role knowing that only the status is selected already
          if((item.role.toLowerCase() ==  $event.value.toLowerCase()) && item.status==this.selectedStatus){
              filtered.push(item)
          }
        }if(this.selectedSector && (!this.selectedStatus || this.selectedStatus=='all') && this.selectedSector!='all'){
          // if we select a role knowing that only the sector is selected already
          item.sectors.forEach(element =>{
            if(item.role.toLowerCase() ==  $event.value.toLowerCase() && element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }if(this.selectedStatus && this.selectedSector && this.selectedStatus!= 'all' && this.selectedSector!= 'all'){
          // if we select a role and the status and the sector ar both selected
          item.sectors.forEach(element =>{
            if(item.role.toLowerCase() ==  $event.value.toLowerCase() && item.status==this.selectedStatus && element.nameSecteur == String(this.selectedSector)){
              filtered.push(item)
              console.log("#####")
            }
          })
          
        }
    })
    this.dataSource.data = filtered
    }

    
  }

  // filterage based on sector select
  onChangeSector($event){
    console.log(this.selectedSector)
    if($event.value == 'all'){

      let filtered=[]
      _.filter(this.users,(item) =>{

        if(this.selectedStatus=='all' && !this.selectedRole){
          filtered=this.users
        }if(this.selectedRole=='all' && !this.selectedStatus){
          filtered=this.users
        }if(this.selectedRole=='all' && this.selectedStatus=='all'){
          filtered=this.users
        }if(!this.selectedStatus && !this.selectedRole){
          filtered=this.users
        }if(this.selectedStatus && (!this.selectedRole || this.selectedRole=='all') && this.selectedStatus!='all'){
          // when we sellect all for sector and the status is selected
          console.log("pyaa bani")
          if(item.status==this.selectedStatus){
              filtered.push(item)
          }
        }if(this.selectedStatus && this.selectedRole){
          // when we sellect all for sector and the status and the role are both selected
          if(item.status==this.selectedStatus && item.role == this.selectedRole){
            filtered.push(item)
          }
          
        }if(this.selectedRole && (!this.selectedStatus || this.selectedStatus=='all') && this.selectedRole != 'all'){
          // if we select all for sector knowing that only the status is selected already
          if(item.role==this.selectedRole){
            filtered.push(item)
          }
          
        }
      })
      this.dataSource.data = filtered
      

    }else{
      let filtered=[]
      _.filter(this.users,(item) =>{

        if((!this.selectedRole || this.selectedRole=='all') && (!this.selectedStatus || this.selectedStatus=='all')){
            // when we select a sector and others are not selected
            item.sectors.forEach(element =>{
              if( element.nameSecteur == String($event.value)){
                filtered.push(item)
                // console.log("#####")
              }
            })
        }if(this.selectedStatus && (!this.selectedRole || this.selectedRole=='all') && this.selectedStatus!= 'all'){
          // when we select a sector knowing that only the status is selected already
          item.sectors.forEach(element =>{
            if(item.status == this.selectedStatus && element.nameSecteur == String($event.value)){
              filtered.push(item)
              // console.log("#####")
            }
          })
          
        }if(this.selectedRole && (!this.selectedStatus || this.selectedStatus=='all') && this.selectedRole != 'all'){
          // if we select a sector knowing that only the role is selected already
          item.sectors.forEach(element =>{
            if(item.role == this.selectedRole && element.nameSecteur == String($event.value)){
              filtered.push(item)
              // console.log("#####")
            }
          })
          
        }if(this.selectedStatus && this.selectedRole && this.selectedStatus!= 'all' && this.selectedRole!= 'all'){
          // if we select a sector and the status and the role ar both selected
          item.sectors.forEach(element =>{
            if(item.role == this.selectedRole && item.status==this.selectedStatus && element.nameSecteur == String($event.value)){
              filtered.push(item)
              // console.log("#####")
            }
          })
          
        }
    })
    this.dataSource.data = filtered
    }

  }

  
}
