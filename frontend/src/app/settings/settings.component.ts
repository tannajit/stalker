import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  ////********* VARIABLE'S DECLARATION *****////////
  time=2;
  Message;


  /////******** CONSTRUCTOR *********///////////
  constructor(private _setting:SettingsService,
              private _router:Router) { }

  ////********** INIT FUNCTION ********/////////

  ngOnInit(): void {
    this.getSMS()
  }

  ////////****** SEND SMS TIMER *******//////////
  
  send(){
    this._setting.setTimeSMS(this.time).subscribe(res=>{
      console.log(res)
      this.Message=res
      this._router.navigate([''])
    })
  }
  //////********* GET SMS TIMER *******//////////

  getSMS(){
    this._setting.getSettings('param=sms').subscribe(res=>{
      if(res!=null){
        this.time=res.details.time
      }
    })
  }

}
