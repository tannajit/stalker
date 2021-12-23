import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  time=2;
  Message;
  constructor(private _setting:SettingsService,
              private _router:Router) { }

  ngOnInit(): void {
    this.getSMS()
  }
  send(){
    this._setting.setTimeSMS(this.time).subscribe(res=>{
      console.log(res)
      this.Message=res
      this._router.navigate([''])
    })
  }
  getSMS(){
    this._setting.getTimeSMS().subscribe(res=>{
      if(res!=null){
        this.time=res.details.time
      }
    })
  }

}
