import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userInfo

  FirstName;
  LastName;
  Roles;
  role;
  SelectedSector=[];
  SectorAffacted=[];
  AllSectors=[];
  Sectors = []
  UserID = '0000'
  CountUser = 0
  selected=false


  constructor(
    private adminService: AdminService,
    private _setting: SettingsService,
    private _client: ClientsService
  ) { }

  ngOnInit(): void {
   
    this.userInfo = this.adminService.getUserInfo() 
    console.log("userInfo")
    console.log(this.userInfo)
    this.FirstName=this.userInfo.name.split(" ")[1]
    this.LastName=this.userInfo.name.split(" ")[0]
    this.userInfo.UserID=this.userInfo.UserID
    
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
        console.log(result)
        var obj={
          id:element.geometry.properties.idSecteur,
          detail:result
        }
        this.AllSectors.push(element.geometry.properties.idSecteur)
        this.Sectors.push(obj)
      });
    })
  }

  UpdateUser(){
    console.log("sfjldkfjdkfjdlsk") 
    this.userInfo["sector"]=this.SelectedSector
    this.userInfo["name"]=this.LastName+" "+this.FirstName
    console.log(this.userInfo)
    //this._setting.UpdateUser(this.userInfo).subscribe(res=>console.log(res))
    
  }
  GenerateEmail(){
    var i=0;
    var last = this.LastName.replace(" ", '.')
    var l1 = this.FirstName.toLowerCase().slice(0, 1)
    var email = (l1 + "." + last.toLowerCase() + "@fgddistrib.com").replace(/\s/g, '');
    this.userInfo.email=email
  }

  GeneratePassword(){
    this.userInfo.password = (Math.random() + 1).toString(36).substring(2);

  }
  RoleActive() {
    if (this.userInfo.role == "Seller")
     { 
       return true;
    }
    else if (this.userInfo.role == "Supervisor")
      {return true;}
    else if (this.userInfo.role == "Auditor")
      {return true;}
    else
     { 
      //this.SectorAffacted=this.AllSectors;
       return false;
      }
  }

  onChange() {
    this.SetUserID()

  }
  //// Set User ID 
  SetUserID() {
    this._setting.getSettings("user=CountUser&role=" + this.role + "").subscribe(res => {
      console.log(res)
      this.CountUser = res + 1
      this.UserID = this.role.slice(0, 2) + String(this.pad(Number(this.CountUser), 7))
    })
  }

  pad(a, b) {
    console.log(a)
    console.log(b)
    return (1e15 + a + '').slice(-b);
  }

  // SendUser() {
   
  //   if(this.role=='Seller' || this.role =='Auditor' || this.role =='Supervisor'){
  //     this.SectorAffacted=this.SelectedSector
  //   }else{
  //     this.SectorAffacted=this.AllSectors
  //   }
  //   console.log(this.SectorAffacted)
    
  // }

}
