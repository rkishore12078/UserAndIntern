import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GetAllInternService{

    constructor(private httpClient:HttpClient){

    }
    getinterns()
    {
        return this.httpClient.get("http://localhost:5023/api/User/GetAll");
    }
}