import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  time=2;
  Message;
  constructor(private _setting:SettingsService) { }

  ngOnInit(): void {
    this.getSMS()
  }
  send(){
    this._setting.setTimeSMS(this.time).subscribe(res=>{
      console.log(res)
      this.Message=res
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
