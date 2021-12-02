import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  uri = 'http://localhost:3000/client';
  constructor(private http: HttpClient) {}

  SendClient(client: any) {
    return this.http.post(this.uri+'/Add', client);
  }
}
