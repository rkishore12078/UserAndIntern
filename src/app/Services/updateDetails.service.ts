import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { InternDTO } from '../Models/internDTO.model';
import { ChangePasswordDTO } from '../Models/changePasswordDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsService {

    constructor(private http:HttpClient)
    {
    }

    getDetails(intern:InternDTO)
    {
        return this.http.post<any>("http://localhost:5023/api/User/GetIntern",intern);
    }

    updateDetails(intern:InternModel)
    {
        return this.http.put("http://localhost:5023/api/User/Update",intern);
    }

    updatePassword(passwordDTO:ChangePasswordDTO)
    {
        return this.http.put("http://localhost:5023/api/User/ChangePassword",passwordDTO);
    }
}