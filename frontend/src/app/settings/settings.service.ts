import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  uri = "http://localhost:3000";
  private _setting =this.uri + "/api1/settings";
  private _settingUp =this.uri + "/api1/settingsUp";
  private _user=this.uri+"/api1/register"
  private _user_email=this.uri+"/api1/GeEmail"

  constructor(private http: HttpClient) { }
  setTimeSMS(time) {
    return this.http.post<any>(this._setting, { 'time': time })
  }
  getSettings(params) {
    console.log("params",params)

    //console.log(params)
    return this.http.get<any>(this._setting+"?"+params);
  }
  CreateUser(user){

    return this.http.post<any>(this._user,user)
  }
  CheckEmail(){
      return this.http.get<any>(this._user_email)
  }
  UpdateUser(data){
    return this.http.put(this.uri+"/api1/UpdateUser",data);
  }
}
