import { Component } from '@angular/core';
import { Ticketmodel } from '../Models/Ticket.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketRaiseService } from '../Services/ticketRaise.service';
import { Router } from '@angular/router';
import { LogsService } from '../Services/logs.service';

@Component({
  selector: 'app-intern-ticket',
  templateUrl: './intern-ticket.component.html',
  styleUrls: ['./intern-ticket.component.css']
})
export class InternTicketComponent 
{

  ticket:Ticketmodel;
  myForm:FormGroup;
  tickets:Ticketmodel[];
  constructor(private ticketService:TicketRaiseService,
              private router:Router,
              private logsService:LogsService)
  {
    this.ticket=new Ticketmodel();
    this.tickets=[];

    this.myForm=new FormGroup(//custom validation for forms
      {
        "heading":new FormControl(null,Validators.required),
        "description":new FormControl(null,[Validators.required,Validators.minLength(10)])
      }
    );

    //showing available tickets for the login intern
    this.ticket.internID=Number(localStorage.getItem("this.internID"));//get the token from localStorage
    this.ticketService.GetAllTickets(this.ticket).subscribe(data=>//calling the getAll in the api
    {
      this.tickets=data as Ticketmodel[];//assign all list of tickets into tickets object
      console.log(this.tickets);
    });
    
  }

  public get heading() : any {
    return this.myForm.get("heading");
  }

  public get description() : any {
    return this.myForm.get("description");
  }

  logout(){
    this.router.navigate(['logIN']);
  }

  raiseTicket()
  {
    //populate the object
    this.ticket.internID=Number(localStorage.getItem("this.internID"));
    this.ticket.title=this.heading.value;
    this.ticket.description=this.description.value;

    console.log(this.ticket);
    console.log(this.myForm);

    this.ticketService.ticketRaise(this.ticket).subscribe(data=>//Insert the entered ticket details into the database table
    {
      this.ticket=data as Ticketmodel;
      console.log(this.ticket);
    });

    if(this.myForm.valid && this.ticket!=null)
    {
      alert("Ticket Raised");
      this.tickets.push(this.ticket);
    }
    else
      alert("Ticket Not Raised");
  }

  details()
  {
    this.router.navigate(['internDetails']);
  }
}
