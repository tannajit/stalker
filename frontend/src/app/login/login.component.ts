import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators}  from '@angular/forms'
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  constructor(private fb: FormBuilder,private _auth:AuthenticationService,private _router:Router) { }
  ngOnInit(){

  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin(){
    if (!this.loginForm.valid) {
      return;
    }else{
            var email=this.loginForm.value.email;
            var password=this.loginForm.value.password;
            console.log(email,password)
            var user={
              'email':email,
              'password':password}
            this._auth.getUserLogin(user).subscribe(
                  res=> this.Response(res),
                  err=>console.log(err));
        }
    }


    // Store Token and delegate to Home page
    Response(res){
      localStorage.setItem('token', res.Data.token)
      console.log(this._auth.getToken())
      this._router.navigate([''])
    }
    

  
}
