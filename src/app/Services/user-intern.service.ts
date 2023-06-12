import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTOModel } from '../Models/userDTO.model';
import { InternModel } from '../Models/intern.model';

@Injectable({
  providedIn: 'root'
})
export class UserInternService {

  shownav:boolean;

  constructor(private httpClient:HttpClient) {
    this.shownav=true;
   }

   userlogin(user:UserDTOModel){
    this.shownav=false;
    return this.httpClient.post("http://localhost:5023/api/User/LogIN",user);
   }

   userRegister(intern:InternModel){
    this.shownav=false;
    return this.httpClient.post("http://localhost:5023/api/User/Register",intern);
   }


}
