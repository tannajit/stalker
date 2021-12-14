import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
	 uri="192.168.43.47";
  private _clientUrl="https://"+this.uri+"/api/clients";
  private _secteurUrl="https://"+this.uri+"/api/secteurs";
  private _addclient="https://"+this.uri+"/api/addClient";
  urii = "https://"+this.uri+"/client";

  constructor(private http:HttpClient,private _router:Router) { }

  getAllClient(){
    return this.http.get<any>(this._clientUrl)
  }
  getAllSecteurs(){
    return this.http.get<any>(this._secteurUrl)
  }
  getClient() {
    return this.http.get<any>(this.urii);
  }

}
