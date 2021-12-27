import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IndexdbService } from './indexdb.service';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _UsersUrl="http://localhost:3000/api1/login"
  

  constructor(private http:HttpClient,
    private _router: Router,
    private _index:IndexdbService) { }

  getUserLogin(data){
    return this.http.post<any>(this._UsersUrl,data)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  logoutUser() {
    localStorage.removeItem('token')
    this._index.ClearData()
    this._index.ClearDataSector()
    this._router.navigate(['/login']).then(() => {
      window.location.reload();
   });
  }
}
