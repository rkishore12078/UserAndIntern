import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticketmodel } from '../Models/Ticket.model';
import { Observable } from 'rxjs';
import { LogModel } from '../Models/Log.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

    constructor(private http:HttpClient){
    }

    logsLoginTime(log:LogModel){
        return this.http.post("http://localhost:5226/api/Log/Add",log);
    }

    logsLogoutTime(log:LogModel){
        return this.http.put<any>("http://localhost:5226/api/Log/Update",log);
    }
}