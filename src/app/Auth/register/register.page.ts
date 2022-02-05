import { Component, OnInit } from '@angular/core';
import { HTTP} from '@awesome-cordova-plugins/http/ngx';
import {
 
  HttpClient
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurdOprService } from 'src/app/curd-opr.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class registerPage implements OnInit {

  Username: string="";
  Password: string ="";
  Email : string ="";
  ddlRole : int ="";
  constructor(
    // private http: HTTP

    private http: HttpClient,
    private crudOpr: CurdOprService
        ) {
      this.onSubmit()

     }
  ngOnInit() {
  }
  onSubmit()
  {
    let getval=this.crudOpr.insertValues(this.Username,this.Password,this.Email,this.ddlRole)
    this.Username="";
    this.Password="";
    this.Email="";
  }
}

