import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { SettingsService } from 'src/app/settings/settings.service';
import { ClientsService } from 'src/app/clients.service';
import Dexie from 'dexie';
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
   //this.getDataSector()
   this.GetSectors()
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

    Sectors = []
    AllSectors = []
    version = 6;

    /// INDEX DB ////
    public getDataSector() {
      var sectors=this.data.data.sectors

      let db; let transaction;
      const request = window.indexedDB.open('off', this.version);
      request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
        console.log('Why didn\'t you allow my web app to use IndexedDB?!');
      };

      if(!this.RoleActive()) {

                
      request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
        db = event.target.result;

        transaction = db.transaction(['sector'], 'readwrite');
        const objectStore = transaction.objectStore('sector');
        const objectStoreRequest = objectStore.getAll();
        objectStoreRequest.onsuccess = event => {
          const all = event.target.result;
          var detail
          sectors.forEach(el => {
          all.forEach(elm => {
            console.log("elm",elm.Valeur)
           // var element = JSON.parse(elm.Valeur);
            var element = elm.Valeur
            if(el.nameSecteur==element.nameSecteur) {
              console.log("yess")
              detail= element.nameSecteur+" - "+element.machine+" - "+element.info.geometry.properties.name
              this.Sectors.push(detail)
            }

          });
        });


        };
      };

  
      }   
    }


    ///  Dexie 
    async GetSectors() {
      var sectors=this.data.data.sectors
      if(!this.RoleActive()) {
      var db = new Dexie("off").open().then((res) => {
        res.table("sector").each(element => {
          // console.log(element)
          sectors.forEach(el => {
          var obj = {
            id: element.nameSecteur,
            detail: element.nameSecteur + " - " + element.machine + " - " + element.info.geometry.properties.name
          }
          if(el.nameSecteur==element.nameSecteur) {
            console.log("yess")
            //var detail= element.nameSecteur+" - "+element.machine+" - "+element.info.geometry.properties.name
            this.Sectors.push(obj.detail)
          }
          //this.AllSectors.push(obj.id)
          //this.Sectors.push(obj)
        })
      });
      });
    }
    }

    ///

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
    this.adminService.getUserRoles(user.email).subscribe(rolesSelected=>{

      this._setting.getSettings('param=role').subscribe(res => {
        var Roles = res.details.roles
        console.log("Roles",Roles);
        this._router.navigateByUrl('/updateUser', { state: { dataUser:user,AddRole:false,rolesSelected:rolesSelected,userid:user.UserID,userrole:user.role,roles:Roles} });

      })
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
