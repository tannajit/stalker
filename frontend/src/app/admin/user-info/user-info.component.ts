import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { SettingsService } from 'src/app/settings/settings.service';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  sectors
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;
  dialogRef1: MatDialogRef<UserInfoComponent>
  RolesSource=this.data.roles
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    public dialog: MatDialog,
    private _router: Router,
    private _setting: SettingsService,    
    private _client: ClientsService

  ) { }
  ngOnInit(): void {
    this.getSectorsByUser()
    this.getSector()
    //console.log("this.data._id",this.data.data)
  }

  getSectorsByUser(){
    console.log(this.data._id)
     this.adminService.getSectorsByUser(this.data.data).subscribe(res=>{
        console.log("this.sectors",res)
        this.sectors = res;
    })
  }

  RoleActive() {
    var active;
    this.RolesSource.forEach(el => {
      
      if(el.name==this.data.data.role) {
     
      switch(el.sectors){

        case 'limited':active= false;
        break;
        case 'all':active = true;
        break;
      } 
    }

    });
    console.log("active",active);
    return active;
  }
  getSector() {
    var sectors=this.data.data.sectors
    if(!this.RoleActive()) {
      sectors.forEach(element => {
        console.log("idssssssss",element.nameSecteur)

      });
    }
    // this._client.getAllSecteurs().subscribe(res => {
    //   console.log(res)
    //   res.forEach(element => {
        
    //     var idSector = Number(String(element.geometry.properties.idSecteur).slice(-2, -1))
    //     console.log(idSector)
    //     var machine = (idSector == 0) ? "Onion" : "CMG"
    //     console.log(machine)
    //     var result = element.geometry.properties.idSecteur + " - " + machine + " - " + element.geometry.properties.name
    //     console.log(result)
    //     var obj = {
    //       id: element.geometry.properties.idSecteur,
    //       detail: result
    //     }
    //     this.AllSectors.push(element.geometry.properties.idSecteur)
    //     this.Sectors.push(obj)
    //   });
    // })
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
        this._router.navigate(['/users']).then(()=>{
          window.location.reload();
        })
        
      }
      this.dialogRef = null;
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
        this._router.navigate(['/users']).then(()=>{
          window.location.reload();
        })
        
      }
      this.dialogRef = null;
    });
      
  }

  updateUser(user){
      this._setting.getSettings('param=role').subscribe(res => {
        var Roles = res.details.roles
        console.log("Roles",Roles);
        this._router.navigateByUrl('/updateUser', { state: { dataUser:user,AddRole:false,userid:user.UserID,userrole:user.role,roles:Roles} });

      })

}
  
  addNewRole(data){
    
    this.adminService.getUserRoles(data.email).subscribe(rolesSelected=>{
      this._setting.getSettings('param=role').subscribe(res => { 
        var Roles = res.details.roles
        this._router.navigateByUrl('/updateUser', { state: { dataUser:data,AddRole:true,rolesSelected:rolesSelected,roles:Roles } });

      })

    })
    // console.log("userroles",this.roles)
  }

}
