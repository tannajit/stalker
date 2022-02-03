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
  private getSectorsByUserURL = this.uri+"/api1/getSectorsByUser"
  private _user=this.uri+"/api1/register"
  private _user_email=this.uri+"/api1/GeEmail"
  private _setting =this.uri + "/api1/settings";
  private getRolesURL = this.uri + "/api1/getRoles"
  private _updateRole = this.uri + "/api1/updateRole"
  private _addRole = this.uri + "/api1/addRole"
  private _getUserRoles = this.uri + "/api1/UserRoles"
  private _deleteClient =this.uri+"/api1/ValidateDeleteClient"
  private _deleteRole = this.uri+"/api1/deleteRole"

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

  getSectorsByUser(user){
    return this.http.get<any>(this.getSectorsByUserURL+"?userId="+user._id)
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

  ValidateDeleteClient(request){
    
    console.log(request)
    return this.http.post<any>(this._deleteClient,{request:request});
  }
  //////

  // Test fadma 
  
  getAllRoles(){
    return this.http.get<any>(this.getRolesURL)
  }

  updateRole(role){
    console.log(role)
    return this.http.post<any>(this._updateRole,{request:role});
  }
  deleteRole(role){
    console.log(role)
    return this.http.post<any>(this._deleteRole, {request:role});
  }

  addRole(role){
    console.log(role)
    return this.http.post<any>(this._addRole,{request:role});
  }
  getUserRoles(email){
    return this.http.get(this._getUserRoles+"/"+email)
  }
}
