import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { IndexdbService } from '../indexdb.service';
import { ClientsService } from '../clients.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide: boolean = true;
  errorMessage
  version = 6

  constructor(private fb: FormBuilder,
    private _auth: AuthenticationService,
    private _router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private client: ClientsService,
    private index: IndexdbService) { }
    
    selectedRole;
    RoleSelected=["Seller","Auditor","Admin","Supervisor","Controler","Back Office"]
  ngOnInit() {
    this.index.createDatabase()
    this.index.createDatabaseOffline();

  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    } else {
      var email = this.loginForm.value.email;
      var password = this.loginForm.value.password;
      console.log(email, password)
      var user = {
        'email': email,
        'password': password,
        'role' :this.selectedRole
      }

      this._auth.getUserLogin(user,this.httpOptions).subscribe(
        res => {
          console.log("----getUserLogin----")
          console.log(res)
          //console.log(res.status)
          this.Response(res)
        },err=>{
          console.log(err)
          this.errorMessage=err.error.Data
          //this.openAlertDialog(err.error.Data)
        }
       );
    }
  }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), observe: 'response'}
  ////******* Store Token and delegate to Home page *******////
  Response(res) {
    //console.log(res)
    console.log("----Response----")
          console.log(res)
    localStorage.setItem('token', res.Data.token)
    localStorage.setItem("user", JSON.stringify(res.Data.user))
    console.log(this._auth.getToken())
    localStorage.setItem("name", res.Data.user.name)
    console.log("----localStorage----")
    console.log(localStorage)
    ///******* GET DATA  ******/
    this.PutDataClient()
  }

  PutDataClient() {
    var db; var transaction
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log("success Login")
      var allclient = []
      this.client.getAllClient().subscribe(res => {
        res.forEach(element => {
          var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) }
          allclient.push(geo)
          transaction = db.transaction(['data'], 'readwrite');
          var objectStore = transaction.objectStore("data");
          var request = objectStore.add(geo)
          request.onsuccess = function (event) {
            console.log("done Adding login")
          };
        });
        this.PutDataSector()
      });
    }
  }

  PutDataSector() {
    var db; var transaction
    var request = window.indexedDB.open("off", this.version)
    request.onerror = function (event: Event & { target: { result: IDBDatabase } }) {
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = (event: Event & { target: { result: IDBDatabase } }) => {
      db = event.target.result;
      console.log("success Sector Login")
      this.client.getAllSecteurs().subscribe(res => {
        res.forEach(element => {
          transaction = db.transaction(['sector'], 'readwrite');
          var objectStore = transaction.objectStore("sector");
          var geo = { _id: element._id, Valeur: JSON.stringify(element.geometry) }
          console.log("$sector login$")
          console.log(geo)
          var request = objectStore.add(geo)
          request.onsuccess = function (event) {
            console.log("done Adding Sector login")
          };
        });
        this._router.navigate(['/map']).then(() => {
        });
      });
    }
  }

  onChange(){
    
    console.log("role",this.selectedRole);
    
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
 
  clearErrMesg(){
    this.errorMessage=''
  }
  


}
