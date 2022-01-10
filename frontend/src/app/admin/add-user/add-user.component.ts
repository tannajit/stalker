import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClientInfoComponent } from 'src/app/client-info/client-info.component';
import { AlertDialogComponent } from 'src/app/alert-dialog/alert-dialog.component';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _setting: SettingsService, private _client: ClientsService,private dialog:MatDialog) { }
  Roles = []
  Sectors = []
  AllEmail=[]
  AllSectors=[]
  role;
  FirstName = "";
  phoneNumber;
  CIN;
  LastName = "";
  Email = "user@fgddistrib.com"
  UserID = '0000'
  CountUser = 0
  UserInfo = {};
  Password = "0000";
  SelectedSector=[];
  SectorAffacted=[];
  dialogRef: MatDialogRef<ClientInfoComponent>;
  ngOnInit(): void {
    /// get All Email from Database to prevenet Email duplication
    this.CheckEmail()
    /// get Roles available
    this._setting.getSettings('param=role').subscribe(res => {
      this.Roles = res.details.roles
      console.log(res)
    })

    //// get Sectors 
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

  RoleActive() {
    if (this.role == "Seller")
     { 
       return true;
    }
    else if (this.role == "Supervisor")
      {return true;}
    else if (this.role == "Auditor")
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

  //////////
  ///* Generate Email *///

 async  GenerateEmail() {
    var i=0;
    console.log(this.AllEmail)
    var last = this.LastName.replace(" ", '.')
    var l1 = this.FirstName.toLowerCase().slice(0, 1)
    var email = (l1 + "." + last.toLowerCase() + "@fgddistrib.com").replace(/\s/g, '');
    while(this.AllEmail.includes(email)){
      i++;
      email = (l1 + "." + last.toLowerCase()+String(i)+ "@fgddistrib.com").replace(/\s/g, '');
      console.log(email)
    }
    this.Email=email


  }

  //// get All Emails
  async CheckEmail(){
     this._setting.CheckEmail().subscribe(res=>{
        res.forEach(element => {
            this.AllEmail.push(element.email)
        });
     })
     
  }
  
  //** Generate password */
  GeneratePassword() {
    this.Password = (Math.random() + 1).toString(36).substring(2);
    console.log("random", this.Password);
  }
  /////
 
  ///
  
  SendUser() {
   
    if(this.role=='Seller' || this.role =='Auditor' || this.role =='Supervisor'){
      this.SectorAffacted=this.SelectedSector
    }else{
      this.SectorAffacted=this.AllSectors
    }
    console.log(this.SectorAffacted)
    this.UserInfo = {
      userinfo: {
        UserID: this.UserID,
        name: this.FirstName + " " + this.LastName,
        phone: this.phoneNumber,
        CIN: this.CIN,
        role: this.role,
        email: this.Email,
        password:this.Password,
        status:"Active"
      },
      Sectors: this.SectorAffacted
    }
    this._setting.CreateUser(this.UserInfo).subscribe(res=>{
      console.log(res)
      this.openAlertDialog()
    })
  }
   ///////********************* Open Dialog *********************////////

   openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message:"Please Copy this credentials and send them to the User before Exit \n " +"[Email:"+this.Email +"-"+"Password:"+this.Password+"]",
        buttonText: {
          ok: 'Ok',
        }
      }
    });
  }
  ////////////////////////////////////////////////////////////////////
}