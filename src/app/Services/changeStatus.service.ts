import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDTOModel } from "../Models/userDTO.model";
import { Observable } from "rxjs";
import { InternModel } from "../Models/intern.model";

@Injectable()
export class ChangeStatusService{

    newInterns:InternModel[];
    constructor(private httpClient:HttpClient){
        this.newInterns=[];
    }

    changeStatus(userdto: UserDTOModel): Observable<any> //Pass the token by the header to authorize
    {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
    
        const url = 'http://localhost:5023/api/User/ChangeStatus';
    
        return this.httpClient.post<any>(url, userdto, { headers });
    }

    GetUser(userDTO:UserDTOModel)
    {
        return this.httpClient.post<any>("http://localhost:5023/api/User/GetUser", userDTO);
    }
}