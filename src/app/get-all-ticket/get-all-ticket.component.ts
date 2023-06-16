import { Component } from '@angular/core';
import { Ticketmodel } from '../Models/Ticket.model';
import { GetSolveTicketService } from '../Services/get_solve_ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-ticket',
  templateUrl: './get-all-ticket.component.html',
  styleUrls: ['./get-all-ticket.component.css']
})
export class GetAllTicketComponent {
  tickets:Ticketmodel[];

  constructor(private getSolveService:GetSolveTicketService,
              private router:Router)
  {
    this.tickets=[];

    this.getSolveService.GetTickets().subscribe(data=>
    {
      this.tickets=data as Ticketmodel[];
      console.log(this.tickets);
      localStorage.setItem("count","0");
      this.getSolveService.newTickets=this.tickets;
    });
  }
  gotoHome()
  {
    this.router.navigate(['GetAll']);
  }
  logsPage(){
    this.router.navigate(['LogsPage']);
  }
  logOutPage(){
    this.router.navigate(['logIN']);
  }
}
