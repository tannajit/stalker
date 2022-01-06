import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  REQUESTS = [
    {id : '00011', name: 'Khaoula Mellah', cin: "JT789621",phone: "0656434566", email: 'khaoula@gmail.com',role: "Seller",sectors: "Berrechid"},
    {id : '00011', name: 'Khaoula Mellah', cin: "JT789621",phone: "0656434566", email: 'khaoula@gmail.com',role: "Seller",sectors: "Berrechid"},
    {id : '00011', name: 'Khaoula Mellah', cin: "JT789621",phone: "0656434566", email: 'khaoula@gmail.com',role: "Seller",sectors: "Berrechid"},
    {id : '00011', name: 'Khaoula Mellah', cin: "JT789621",phone: "0656434566", email: 'khaoula@gmail.com',role: "Seller",sectors: "Berrechid"},
    {id : '00011', name: 'Khaoula Mellah', cin: "JT789621",phone: "0656434566", email: 'khaoula@gmail.com',role: "Seller",sectors: "Berrechid"},
    {id : '00011', name: 'Khaoula Mellah', cin: "JT789621",phone: "0656434566", email: 'khaoula@gmail.com',role: "Seller",sectors: "Berrechid"},
    {id : '00011', name: 'Khaoula Mellah', cin: "JT789621",phone: "0656434566", email: 'khaoula@gmail.com',role: "Seller",sectors: "Berrechid"},
    
    
  ];

  dataSource;
  columnsToDisplay = ['Id', 'Name','CIN','Phone Number', 'Email', 'Role', 'Sectors', 'Actions'];
  dataSubject = new BehaviorSubject<Element[]>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.REQUESTS);
      this.dataSource.data = this.REQUESTS;
      this.dataSource.sort = this.REQUESTS;
  }

}
