import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  uri = "http://localhost:3000";
  private getUsersURL = this.uri+"/api1/getAllUsers"
  private deleteUserURL = this.uri+"/api1/deleteUser"
  private restoreUserURL = this.uri+"/api1/restoreUser"

  currentUser;


  constructor(
    private http: HttpClient, 
    private _router: Router,
  ) { }

  getAllUsers() {
    return this.http.get<any>(this.getUsersURL)
  }

  deleteUser(user){
    return this.http.post<any>(this.deleteUserURL,user)
  }

  restoreUser(user){
    return this.http.post<any>(this.restoreUserURL,user)
  }

  setUserInfo(user){
    this.currentUser = user
  }


  getUserInfo() {
    return this.currentUser;
  }
}
