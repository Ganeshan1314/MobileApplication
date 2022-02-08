import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";



@Injectable({
  providedIn: 'root'
})
export class CurdOprService {

  liveapipath: string = 'http://localhost:83///api';

  constructor(
    private http: HttpClient

  ) { }

  insertValues(Username,Password,Email,RoleID)
  {
      var livepath="http://localhost:83///api";
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
              RoleID
            },
            success: function (message) {
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
