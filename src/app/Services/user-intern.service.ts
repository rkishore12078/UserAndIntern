import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTOModel } from '../Models/userDTO.model';
import { InternModel } from '../Models/intern.model';

@Injectable({
  providedIn: 'root'
})
export class UserInternService {

  constructor(private httpClient:HttpClient) {
   }

   userlogin(user:UserDTOModel){
    return this.httpClient.post("http://localhost:5023/api/User/LogIN",user);
   }

   userRegister(intern:InternModel){
    return this.httpClient.post("http://localhost:5023/api/User/Register",intern);
   }


}
