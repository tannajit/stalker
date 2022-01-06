import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  uri = "http://localhost:3000";
  private _setting =this.uri + "/api1/settings";
  private _user=this.uri+"/api1/register"

  constructor(private http: HttpClient) { }
  setTimeSMS(time) {
    return this.http.post<any>(this._setting, { 'time': time })
  }
  getSettings(params) {
    console.log(params)
    return this.http.get<any>(this._setting+"?"+params);
  }
  CreateUser(user){
    return this.http.post<any>(this._user,user)
  }
  
}
