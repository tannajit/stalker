import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _UsersUrl="http://localhost:3000/users/login"
  constructor(private http:HttpClient) { }

  getUserLogin(data){
    return this.http.post<any>(this._UsersUrl,data)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}