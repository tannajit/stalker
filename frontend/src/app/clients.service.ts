import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  // for update functionality
  private currentClient;
  uri="localhost:3000";
  private _clientUrl="http://"+this.uri+"/api1/clients";
  private _secteurUrl="http://"+this.uri+"/api1/secteurs";
  private _addclient="http://"+this.uri+"/api1/AddClient";
  private _getclient = "http://"+this.uri+"/api1/addedClients";
  private _updateclient = "http://"+this.uri+"/api1/updateClient";
  private getClientBySell = "http://"+this.uri+"/api1/getClientBySeller";
  private _validate = "http://"+this.uri+"/api1/validate";

  
   getNFC(){
    var url="http://localhost:7000/nfc"
    return this.http.post<any>(url,"0633691574")
  }
  getSMS(phone){
    var url="http://localhost:7000/sms"
    return this.http.post<any>(url,phone)
   
  }

  SendClient(client: any) {
    return this.http.post(this._addclient, client);
  }

  constructor(private http:HttpClient,private _router:Router) { }

  getAllClient(){
    return this.http.get<any>(this._clientUrl)
  }

  getClientBySeller(lat,long){
     var url="http://localhost:3000/api1/getClientBySeller/"+lat+"/"+long+""
    console.log(url)
    return this.http.get<any>(url)
  }

  getClientByAuditor(lat,long){
    var url="http://localhost:3000/api1/getClientByAuditor/"+lat+"/"+long+""
   console.log(url)
   return this.http.get<any>(url)
 }

  getAllSecteurs(){
    return this.http.get<any>(this._secteurUrl)
  }
  getClient() {
    return this.http.get<any>(this._getclient);
  }

  // used for update functionality
  setCurrentClientInfo(client: any) {
    this.currentClient = client;
    console.log('***************************'+this.currentClient.NomPrenom)
  }

  getClientInfo(){
    return this.currentClient;
  }

  updateClient(client:any){
    return this.http.post(this._updateclient, client);
  }

  

  validateAuditorInfo(info){
    console.log("#############################")
    console.log(info)
    return this.http.post<any>(this._validate,info);
  }
}
