import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _UsersUrl="http://localhost:3000/api1/login"
  

  constructor(private http:HttpClient,private _router: Router) { }

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
    this._router.navigate(['login']).then(() => {
      window.location.reload();
   });
  }
}
