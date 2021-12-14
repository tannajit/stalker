import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  uri = 'https://192.168.43.47/client';
  
   getNFC(){
    var url="http://localhost:7000/nfc"
    return this.http.post<any>(url,"0633691574")
  }
  getSMS(phone){
    var url="http://localhost:7000/sms"
    return this.http.post<any>(url,phone)
   
  }
  constructor(private http: HttpClient) {}

  SendClient(client: any) {
    return this.http.post(this.uri+'/Add', client);
  }
}
