import { CurdOprService } from 'src/app/curd-opr.service';
import { Component, OnInit } from '@angular/core';
import {HTTP} from '@awesome-cordova-plugins/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginServiceService } from '../Services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName="";
  passWord="";
  constructor(
    private http : HttpClient,
    private login: LoginServiceService

  ) { }

  ngOnInit() {
  }
  btnLoginClick(){
    let getVal=this.login.userLogin(this.userName,this.passWord);
    this.userName="";
    this.passWord="";
  }
}
