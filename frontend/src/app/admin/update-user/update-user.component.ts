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
  UserInfoUp
  FirstName;
  LastName;
  Roles;
  role = this.userInfo.role
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

  constructor(
    private _setting: SettingsService,
    private _client: ClientsService,
    private _router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.searchUserForm = this.fb.group({
      userType: new FormControl('')
    });
    //this.adminService.getAllUsers().subscribe(res=>{console.log("sectors",res)})

    //this.userInfo = this.adminService.getUserInfo() 
    console.log("userInfo")
    console.log(this.userInfo)
    this.FirstName = this.userInfo.name.split(" ")[1]
    this.LastName = this.userInfo.name.split(" ")[0]
    // const UserIDAfficher= this.userInfo.UserID
    // const RoleAfficher=this.userInfo.role
    console.log("UserIDAfficher", this.UserID)
    // console.log("RoleAfficher",RoleAfficher)
    console.log("this.userInfo.role", this.role)

    // if(RoleAfficher!=this.userInfo.role){
    //   this.userInfo.UserID=this.userInfo.UserID

    // }if(RoleAfficher === this.userInfo.role){
    //   this.userInfo.UserID = UserIDAfficher

    // }

    console.log("userInfoSectors",this.userInfo.sectors)

    this.userInfo.sectors.forEach(el => {this.SelectedSector.push(""+el.nameSecteur)});
    this.SectorsAttached=this.SelectedSector
    
    this._setting.getSettings('param=role').subscribe(res => {
      this.Roles = res.details.roles
      console.log(res)
    })

    this._client.getAllSecteurs().subscribe(res => {
      console.log(res)
      res.forEach(element => {
        var idSector = Number(String(element.geometry.properties.idSecteur).slice(-2, -1))
        console.log(idSector)
        var machine = (idSector == 0) ? "Onion" : "CMG"
        console.log(machine)
        var result = element.geometry.properties.idSecteur + " - " + machine + " - " + element.geometry.properties.name
        console.log("selected", result)
        var obj = {
          id: element.geometry.properties.idSecteur,
          detail: result
        }
        this.AllSectors.push(element.geometry.properties.idSecteur)
        this.Sectors.push(obj)
        console.log("sectors", this.Sectors)
      });
    })
  }


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
  RoleActive() {
    if (this.userInfo.role == "Seller") {
      return true;
    }
    else if (this.userInfo.role == "Supervisor") { return true; }
    else if (this.userInfo.role == "Auditor") { return true; }
    else {
      //this.SectorAffacted=this.AllSectors;
      return false;
    }
  }

  onChange() {

    if(this.role!=this.userInfo.role)
    {
      this.SetUserID()
    }
    if(this.role === this.userInfo.role)
    {
      this.userInfo.UserID = this.UserID
    }

  }
  //// Set User ID 
  SetUserID() {
    this._setting.getSettings("user=CountUser&role=" + this.userInfo.role + "").subscribe(res => {
      console.log("res",res)
      this.CountUser = res + 1
      console.log("res",this.CountUser)
      // const RoleAfficher=this.userInfo.role
      this.userInfo.UserID = this.userInfo.role.slice(0, 2) + String(this.pad(Number(this.CountUser), 7))
  
    })
  }

  pad(a, b) {
    console.log(a)
    console.log(b)
    return (1e15 + a + '').slice(-b);
  }

  UpdateUser(){
    console.log("sfjldkfjdkfjdlsk") 
    var UserInfoUp={}
    UserInfoUp["_id"]=this.userInfo._id
    UserInfoUp["UserID"]=this.userInfo.UserID
    UserInfoUp["name"]=this.LastName+" "+this.FirstName
    UserInfoUp["CIN"]=this.userInfo.CIN
    UserInfoUp["role"]=this.userInfo.role
    UserInfoUp["password"]=this.userInfo.password
    UserInfoUp["email"]=this.userInfo.email
    UserInfoUp["phone"]=this.userInfo.phone
    UserInfoUp["status"]=this.userInfo.status
    UserInfoUp["sectors"]=this.SelectedSector
    UserInfoUp["generated"]=this.generated
    console.log("====================================")


    const SectorDeleted = this.SectorsAttached.filter(value => !this.SelectedSector.includes(value));
    UserInfoUp["SectorDeleted"] = SectorDeleted

    this._setting.UpdateUser(UserInfoUp).subscribe(res => console.log(res))
    if (this.generated) {
      this.openAlertDialog()
    } else {
      this._router.navigate(['/users'])
    }

  }


  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: "Please Copy this credentials before Exit \n " + "[Email:" + this.userInfo.email + "-" + "Password:" + this.userInfo.password + "]",
        buttonText: {
          ok: 'Done',
        }
      }

    }).afterClosed().subscribe(result => {
      this._router.navigate(['/users'])
    });
    
  }

  anotherArray = this.Sectors;
  filterListCareUnit(val) {
          console.log(val);
          this.Sectors = this.anotherArray.filter((unit) => unit.detail.indexOf(val) > -1);
        }
  
  togglePerOne(all) {
    if (this.allSelected.selected) {
      this.allSelected.deselect();
      return false;
    }
    if (this.searchUserForm.controls.userType.value.length == this.Sectors.length){
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
}
