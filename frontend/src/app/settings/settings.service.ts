import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  uri = "localhost:3000";
  private _setting = "http://" + this.uri + "/api1/settings";

  constructor(private http: HttpClient) { }
  setTimeSMS(time) {
    return this.http.post<any>(this._setting, { 'time': time })
  }
  getTimeSMS() {
    return this.http.get<any>(this._setting);
  }
}
