import { Component, Input } from '@angular/core';
import { Ticketmodel } from '../Models/Ticket.model';
import { ticketDTO } from '../Models/ticketdto.model';
import { GetSolveTicketService } from '../Services/get_solve_ticket.service';

@Component({
  selector: 'app-get-individual-ticket',
  templateUrl: './get-individual-ticket.component.html',
  styleUrls: ['./get-individual-ticket.component.css']
})
export class GetIndividualTicketComponent {
  @Input() ticket:Ticketmodel;
  ticketdto:ticketDTO;
  count:number=0;
  toggleButton:boolean;



  constructor(private getSolveService:GetSolveTicketService)
  {
    this.ticket=new Ticketmodel();
    this.ticketdto=new ticketDTO();
    this.toggleButton=true;

    this.count=Number(localStorage.getItem("count"));
    this.ticketdto.ticketNumber=this.getSolveService.newTickets[this.count].ticketNumber;
    this.count++;

    localStorage.setItem("count",(this.count).toString());
    console.log(this.ticket);

    this.getSolveService.GetSingleTicket(this.ticketdto).subscribe(data=>
    {
      this.ticket=data as Ticketmodel;
      console.log(this.ticket);

    if(this.ticket.solutionStatus)
        this.toggleButton=false;
      else
        this.toggleButton=true;
    });
  }
  provideSolution()
  {
    this.ticketdto.ticketNumber=this.ticket.ticketNumber;
    this.ticketdto.adminID=Number(localStorage.getItem("this.internID"));

    this.getSolveService.solveTicket(this.ticketdto).subscribe(data=>{
      this.ticketdto=data as ticketDTO;

    this.ticket.adminID=this.ticketdto.adminID;
    this.ticket.resolvedDate=this.ticketdto.resolvedDate;

    if(this.ticketdto.adminID!=0)
        this.toggleButton=!this.toggleButton;
    });
  }
}
