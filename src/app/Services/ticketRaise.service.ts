import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticketmodel } from '../Models/Ticket.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketRaiseService {

    constructor(private http:HttpClient){

    }

    ticketRaise(ticket:Ticketmodel):Observable<any>
    {
        return this.http.post("http://localhost:5137/api/Ticket/RaiseTicket",ticket);
    }
}