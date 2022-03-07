import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http:HttpClient
    
  ) { }
  userLogin(Username,Password)
  {
    if(Username != "" && Password != "")
    {
      var liveAPIPath="https://localhost:44383/api/Login/userLogin";
      $.ajax
          ({
            type: "get",
            url:liveAPIPath,
            dataType: "json",
            data:{
              Username,
              Password,
            },
            success: function (message) {
              debugger;
              alert(message);
            }
          })
    }
    else{
      alert("Please Username Or Password");
    }
    
  }
}
