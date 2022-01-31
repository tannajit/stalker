import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { ClientsService } from 'src/app/clients.service';
import { Router } from '@angular/router';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../users/users.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @ViewChild('allSelected') private allSelected: MatOption;

  userInfo = this._router.getCurrentNavigation().extras.state.dataUser
  addNewRole = this._router.getCurrentNavigation().extras.state.AddRole
  // dataSource = this._router.getCurrentNavigation().extras.state.dataSource
  RolesOfUser= this._router.getCurrentNavigation().extras.state.rolesSelected
  ListOfRoles = [];
  RoleSelected = [];
  UserInfoUp
  FirstName;
  LastName;
  RolesSource = this._router.getCurrentNavigation().extras.state.roles;
  Roles =[];
  role = this.userInfo.role
  role2;
  SelectedSector2=[];
  hidpass = true
  SelectedSector = [];
  SectorsAttached = [];
  AllSectors = [];
  Sectors = []
  UserID = this.userInfo.UserID
  UserIDAfficher
  CountUser = 0
  selected = false
  generated = false
  setUserID
  searchUserForm: FormGroup;
  version=6;
  disabled=false

  constructor(
    private _setting: SettingsService,
    private _client: ClientsService,
    private _router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.searchUserForm = this.fb.group({
      userType: new FormControl('')
    });

    this.RolesSource.forEach(element => {
          
      this.Roles.push(element.name)

    });


    this.RolesOfUser.forEach(element => {
      console.log("gggggggg",element)
      this.Roles.splice(this.Roles.indexOf(element),1)

    });


    console.log("this.RolesOfUser",this.RolesOfUser)

    if(!this.addNewRole){
      this.Roles.unshift(this.userInfo.role)

    }
    
    
    
    
    if(this.addNewRole){
      // this.userInfo.role=null
      // this.SelectedSector=[]
      this.disabled=true;
      // this.RolesSource.forEach(element => {
          
      //   this.Roles.push(element.name)
  
      // });
      // this.RolesOfUser.forEach(element => {
      //   console.log("gggggggg",element)
      //   this.Roles.splice(this.Roles.indexOf(element),1)
  
      // });
    }
    
    console.log("#### DATASOURCE #####")
    console.log(this.userInfo)
    
    //this.adminService.getAllUsers().subscribe(res=>{console.log("sectors",res)})

    //this.userInfo = this.adminService.getUserInfo() 
    console.log("userInfo")
    console.log("this.Roles",this.Roles)
    //console.log("this.Roles",this.Roles)
    this.FirstName = this.userInfo.nameU.split("-")[0]
    this.LastName = this.userInfo.nameU.split("-")[1]

    if(!this.addNewRole){
      this.userInfo.sectors.forEach(

      el => 
      { 
      console.log(el)
      console.log("those 1 ")
      this.SelectedSector.push(el.nameSecteur) 
      }

    );
      this.SectorsAttached = this.SelectedSector
    }
    

    this.getDataSector()
  }
  SectorAffacted;
  
  UserInfo2

  SendUser() {

    this.UserInfo2 = {
      userinfo: {
        UserID: this.userInfo.UserID,
        name: this.FirstName + "-" + this.LastName,
        phone: this.userInfo.phone,
        CIN: this.userInfo.CIN,
        email: this.userInfo.email,
        password: this.userInfo.password,
        status: "Active",
        existe:true
      },
      SectorsByRoles: this.ListOfRoles
    }
    console.log("result", this.UserInfo2)
    this._setting.CreateUser(this.UserInfo2).subscribe(res => {
      this.openAlertDialog2()
    })

  }


  public getDataSector() {
    let db; let transaction;
    const request = window.indexedDB.open('off', this.version);
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log('Why didn\'t you allow my web app to use IndexedDB?!');
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log('success');
      console.log(db);
      transaction = db.transaction(['sector'], 'readwrite');
      const objectStore = transaction.objectStore('sector');
      const objectStoreRequest = objectStore.getAll();
      objectStoreRequest.onsuccess = event => {
        const all = event.target.result;
        all.forEach(elm => {
          //console.log(elm)
          var element = elm.Valeur;
          /*var idSector = Number(String(element.properties.idSecteur).slice(-2, -1))
          console.log(idSector)
          var machine = (idSector == 0) ? "Onion" : "CMG"
          console.log(machine)
          var result = element.properties.idSecteur + " - " + machine + " - " + element.properties.name
          console.log(result)*/
          var obj = {
            id: element.nameSecteur,
            detail: element.nameSecteur+" - "+element.machine+" - "+element.info.geometry.properties.name
          }
          this.AllSectors.push(obj.id)
          this.Sectors.push(obj)
        });
      };
    };
  }
  ////

  

  GenerateEmail() {
    var i = 0;

    var last = this.LastName.replace(" ", '.')
    var l1 = this.FirstName.toLowerCase().slice(0, 1)
    var email = (l1 + "." + last.toLowerCase() + "@fgddistrib.com").replace(/\s/g, '');
    this.userInfo.email = email
  }

  GeneratePassword() {
    this.hidpass = false
    this.generated = true;
    this.userInfo.password = (Math.random() + 1).toString(36).substring(2);

  }
  // RoleActive() {
  //   if (this.userInfo.role === "Seller") {
  //     return true;
  //   }
  //   else if (this.userInfo.role === "Supervisor") { return true; }
  //   else if (this.userInfo.role === "Auditor") { return true; }
  //   else {
  //     //this.SectorAffacted=this.AllSectors;
  //     return false;
  //   }
    
  // }

  RoleActive() {
    var active;
    this.RolesSource.forEach(el => {
      
      if(el.name==this.userInfo.role) {
     
      switch(el.sectors){

        case 'limited':active= true;
        break;
        case 'all':active = false;
        break;
      } 
    }

    });
    // console.log("active",active);
    return active;
  }

  RoleActive2() {
    var active;
    this.RolesSource.forEach(el => {
      
      console.log("sectors",el)

      if(el.name==this.role2) {
     
      switch(el.sectors){

        case 'limited':active= true;
        break;
        case 'all':active = false;
        break;
      } 
    }

    });
    return active;
  }
 
 

  onChange() {

    if(!this.RoleActive()){

      this.SelectedSector=this.AllSectors
    }
    console.log("this.SelectedSector",this.SelectedSector)
    // if (this.role != this.userInfo.role) {
    //   this.SetUserID()
    // }
    // if (this.role === this.userInfo.role) {
    //   this.userInfo.UserID = this.UserID
    // }

  }
  //// Set User ID 
  SetUserID() {
    this._setting.getSettings("user=CountUser&role=" + this.userInfo.role + "").subscribe(res => {
      console.log("res", res)
      this.CountUser = res + 1
      console.log("res", this.CountUser)
      // const RoleAfficher=this.userInfo.role
      this.userInfo.UserID = this.userInfo.role.slice(0, 2) + String(this.pad(Number(this.CountUser), 7))

    })
  }

  pad(a, b) {
    console.log(a)
    console.log(b)
    return (1e15 + a + '').slice(-b);
  }

  UpdateUser() {
    var UserInfoUp = {}
    UserInfoUp["_id"] = this.userInfo._id
    UserInfoUp["UserID"] = this.userInfo.UserID
    UserInfoUp["name"] = this.FirstName + "-" + this.LastName
    UserInfoUp["CIN"] = this.userInfo.CIN
    UserInfoUp["role"] = this.userInfo.role
    UserInfoUp["password"] = this.userInfo.password
    UserInfoUp["email"] = this.userInfo.email
    UserInfoUp["phone"] = this.userInfo.phone
    UserInfoUp["status"] = this.userInfo.status
    UserInfoUp["sectors"] = this.SelectedSector
    UserInfoUp["generated"] = this.generated
    console.log("====================================")


    const SectorDeleted = this.SectorsAttached.filter(value => !this.SelectedSector.includes(value));
    UserInfoUp["SectorDeleted"] = SectorDeleted

    this._setting.UpdateUser(UserInfoUp).subscribe(res => console.log(res))

    if (this.generated) {
      this.openAlertDialog()
    } else {
      var message = "User updated successfully!"
      this.openSuccessDialog(message)
      this._router.navigate(['/users'])
    }

  }


  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: "User has been added sucssefuly. Please Copy this credentials before Exit \n " + "[Email:" + this.userInfo.email + "-" + "Password:" + this.userInfo.password + "]",
        buttonText: {
          ok: 'Done',
        }
      }

    }).afterClosed().subscribe(result => {
      this._router.navigate(['/users'])
    });
    ;
  }

  openAlertDialog2() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: "User has been added successfully",
        buttonText: {
          ok: 'Done',
        }
      }

    }).afterClosed().subscribe(result => {
      this._router.navigate(['/users'])
    });
    ;
  }

  openSuccessDialog(msg) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: msg,
        buttonText: {
          ok: 'Ok',
        }
      }

    })
  }

  anotherArray = this.Sectors;
  filterListCareUnit(val) {
    // console.log(val);
    this.Sectors = this.anotherArray.filter((unit) => unit.detail.toLowerCase().indexOf(val) > -1);
  }

  togglePerOne(all) {
    if (this.allSelected.selected) {
      this.allSelected.deselect();
      return false;
    }
    if (this.searchUserForm.controls.userType.value.length == this.Sectors.length) {
      this.allSelected.select();
    }
    console.log(this.Sectors)
  }

  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.searchUserForm.controls.userType
        .patchValue([...this.Sectors.map(item => item.id), 0]);
    } else {
      this.searchUserForm.controls.userType.patchValue([]);
    }
  }
  Disabled = false

  onChange2() {

    this.selected = this.role2
    console.log("ùùùùùùùùùùùùùùùùùùùùùùù",this.SelectedSector2)
    const obj = { role: this.role2, value: null }
    if (this.SelectedSector.length != 0) {
      obj.value = this.SelectedSector
    }
    if (this.SelectedSector.length ==0 ) {

      obj.value = this.AllSectors

    }
    // if (this.role === "Admin" || this.role === "Controler" || this.role === "Back Office" ) {

    //   obj.value = this.AllSectors

    // }
    // if (this.role2 != "Seller" || this.role2 != "Auditor" || this.role2 != "Supervisor" ) {

    //   obj.value = this.AllSectors

    // }
    console.log("this.obj", obj)

    this.upsert(this.ListOfRoles, obj)

    console.log("ListOfRules", this.ListOfRoles)

    if (!this.RoleSelected.includes(this.role2)) {
      this.RoleSelected.push(this.role2);
    }

    this.Disabled = this.RoleSelected.includes(this.role2)

  }

  AddNewRole() {
    console.log("mmmmmmmmmmmmmmmm")
    this.SelectedSector2 = []
    if (this.RoleSelected.includes(this.role2)) {
      this.Roles.splice(this.Roles.indexOf(this.role2), 1);
    }
    this.role2 = ""

    // var i=1
    // this.AddRoles.push(i++);

  }

  RemoveRole(role2) {


    this.RoleSelected.splice(this.RoleSelected.indexOf(role2), 1);

    this.ListOfRoles.forEach(el => {

      if (el.role === role2) {
        this.ListOfRoles.splice(this.ListOfRoles.indexOf(el), 1);
      }

    })

    this.Roles.push(role2);

    if (this.RoleSelected.length == 0) this.role2 = ""

  }


  upsert(array, item) { // (1)
    const i = array.findIndex(_item => _item.role === item.role);
    if (i > -1) array[i] = item; // (2)
    else array.push(item);
  }



  upsertRole(array, item) { // (1)

    if (array.indexOf(item) === -1) {
      array.push(item);
    }
  }


}
