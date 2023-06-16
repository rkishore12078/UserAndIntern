import { Component } from '@angular/core';
import { LogModel } from '../Models/Log.model';
import { GetLogService } from '../Services/get_log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-logs',
  templateUrl: './get-all-logs.component.html',
  styleUrls: ['./get-all-logs.component.css']
})
export class GetAllLogsComponent {
  logs:LogModel[];

  constructor(private getLogService:GetLogService,
              private route:Router)
  {
    this.logs=[];

    this.getLogService.GetLogs().subscribe(data=>
    {
      this.logs=data as LogModel[];
      console.log(this.logs);
    });
  }

  ticketpage(){
    this.route.navigate(['ticketPage']);
  }
  logOutPage(){
    this.route.navigate(['logIN']);
  }
  homePage()
  {
    this.route.navigate(['GetAll']);
  }
}
