import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";



@Injectable({
  providedIn: 'root'
})
export class CurdOprService {

  liveapipath: string = 'https://localhost:44383//api';

  constructor(
    private http: HttpClient

  ) { }

  insertValues(Username,Password,Email,Role)
  {
      var livepath="https://localhost:44383//api";
      if(Username != "" || Password != "" || Email != "")
      {
          $.ajax
          ({
            type: "get",
            url: livepath+"/login/Registration",
            dataType: "json",
            data:{
              Username,
              Password,
              Email,
              Role
            },
            success: function (message) {
              Username="";
              Password="";
              Email="";
              Role=""
                alert(message);
            }
          })
      }
      else
      {
        alert('Please Enter values in all textboxes');
      }
  }
}
