import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { IndexdbService } from '../indexdb.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide: boolean = false;
  constructor(private fb: FormBuilder,
    private _auth: AuthenticationService,
    private _router: Router,
    private aroute: ActivatedRoute,
    private client: ClientsService,
    private index: IndexdbService) { }

  ngOnInit() {
    this.index.createDatabase()
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
        'password': password
      }
      this._auth.getUserLogin(user).subscribe(
        res => this.Response(res),
        err => console.log(err));
    }
  }
  
  // Store Token and delegate to Home page
  Response(res) {
    console.log(res)
    localStorage.setItem('token', res.Data.token)
    localStorage.setItem("user", JSON.stringify(res.Data.user))
    console.log(this._auth.getToken())
    localStorage.setItem("name", res.Data.user.name)
    //this.index.AddItem();
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
  version=6

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
          //window.location.reload();
        });

        //console.log(allclient)
      });
    }
  }

}
