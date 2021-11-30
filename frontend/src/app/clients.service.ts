import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private _clientUrl="http://localhost:3000/api/clients"
  private _secteurUrl="http://localhost:3000/api/secteurs"

  constructor(private http:HttpClient,private _router:Router) { }

  getAllClient(){
    return this.http.get<any>(this._clientUrl)
  }
  getAllSecteurs(){
    return this.http.get<any>(this._secteurUrl)
  }

}
