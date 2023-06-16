import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ticketDTO } from "../Models/ticketdto.model";
import { Ticketmodel } from "../Models/Ticket.model";

@Injectable()
export class GetSolveTicketService{

    newTickets:Ticketmodel[];

    constructor(private httpClient:HttpClient){
        this.newTickets=[];
    }
    GetTickets()
    {
        return this.httpClient.get("http://localhost:5137/api/Ticket/GetAll");
    }

    solveTicket(ticketdto:ticketDTO)
    {
        return this.httpClient.post("http://localhost:5137/api/Ticket/ResolveTicket",ticketdto);
    }

    GetSingleTicket(ticketdto:ticketDTO)
    {
        return this.httpClient.post("http://localhost:5137/api/Ticket/GetTicket",ticketdto);
    }


}