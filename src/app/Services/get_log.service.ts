import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLogService {

    constructor(private http:HttpClient)
    {
      localStorage.getItem("role");
    }

    GetLogs()
    {
        return this.http.get("http://localhost:5226/api/Log/GetAll");
    }
}