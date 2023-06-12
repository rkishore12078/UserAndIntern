import { Component } from '@angular/core';
import { Ticketmodel } from '../Models/Ticket.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketRaiseService } from '../Services/ticketRaise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-ticket',
  templateUrl: './intern-ticket.component.html',
  styleUrls: ['./intern-ticket.component.css']
})
export class InternTicketComponent {

  ticket:Ticketmodel;
  myForm:FormGroup;
  constructor(private ticketService:TicketRaiseService,private router:Router)
  {
    this.ticket=new Ticketmodel();
    this.myForm=new FormGroup(
      {
        "heading":new FormControl(null,Validators.required),
        "description":new FormControl(null,[Validators.required,Validators.minLength(10)])
      }
    );
    
  }

  public get heading() : any {
    return this.myForm.get("heading");
  }

  public get description() : any {
    return this.myForm.get("description");
  }

  logout(){
    localStorage.setItem("logoutTime",(new Date()).toString());
    localStorage.removeItem("token");
    this.router.navigate(['logIN']);
  }

  raiseTicket(){
    this.ticket.internID=Number(localStorage.getItem("this.internID"));
    this.ticket.title=this.heading.value;
    this.ticket.description=this.description.value;
    console.log(this.ticket);
    console.log(this.myForm);
    this.ticketService.ticketRaise(this.ticket).subscribe(data=>{
      this.ticket=data as Ticketmodel;
      console.log(this.ticket);
    });
    if(this.myForm.valid && this.ticket!=null)
      alert("Ticket Raised");
    else
      alert("Ticket Not Raised");
  }
}
