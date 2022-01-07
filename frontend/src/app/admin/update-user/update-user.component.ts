import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userInfo;
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
   
    this.userInfo = this.adminService.getUserInfo()
    console.log(this.userInfo)
  }

}
