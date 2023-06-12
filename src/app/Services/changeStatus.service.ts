import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InternModel } from "../Models/intern.model";

@Injectable()
export class ChangeStatusService{

    constructor(private httpClient:HttpClient){
        
    }
    changeStatus(intern:InternModel)
    {
        
        var header=new HttpHearders({
        'Content-Type':application/json',
        'Authorization':'Bearer'+localStorage.getItem("token")?.toString()
        });
        return this.httpClient.get("",{headers:header});
        return this.httpClient.post("",intern);
    }
}