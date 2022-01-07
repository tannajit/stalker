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
  private _user=this.uri+"/api1/register"
  private _user_email=this.uri+"/api1/GeEmail"
  private _setting =this.uri + "/api1/settings";

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
  /////////////***** Add User (Hafsa's code) ***////////////////
  CreateUser(user){
    return this.http.post<any>(this._user,user)
  }
  CheckEmail(){
      return this.http.get<any>(this._user_email)
  }
  getSettings(params) {
    console.log(params)
    return this.http.get<any>(this._setting+"?"+params);
  }
  //////
}
