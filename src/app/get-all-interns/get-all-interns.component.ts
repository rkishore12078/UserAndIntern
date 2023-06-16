import { Component } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { GetAllInternService } from '../Services/getAllInterns.service';
import { ChangeStatusService } from '../Services/changeStatus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-interns',
  templateUrl: './get-all-interns.component.html',
  styleUrls: ['./get-all-interns.component.css']
})
export class GetAllInternsComponent {
  interns:InternModel[];
  constructor(private getAllService:GetAllInternService,
              private changeStatusService:ChangeStatusService,
              private router:Router)
  {
    this.interns=[];
    this.getAllService.getinterns().subscribe(data=>//get all the interns
    {
      this.interns=data as InternModel[];
      console.log(this.interns);
      this.changeStatusService.newInterns=this.interns;
      localStorage.setItem("count","0");//set the count into the localstorage and to 0
    })
  }

  ticketpage()
  {
    this.router.navigate(['ticketPage']);
  }

  logPage()
  {
    this.router.navigate(['LogsPage']);
  }
  logOutPage(){
    this.router.navigate(['logIN']);
  }
}
