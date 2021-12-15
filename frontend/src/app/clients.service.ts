import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
	 uri="localhost:3000";
  private _clientUrl="http://"+this.uri+"/api1/clients";
  private _secteurUrl="http://"+this.uri+"/api1/secteurs";
  private _addclient="http://"+this.uri+"/api1/addClient";
  private urii = "http://"+this.uri+"/api1/client";

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
