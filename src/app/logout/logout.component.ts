import { Component } from '@angular/core';
import { LogsService } from '../Services/logs.service';
import { LogModel } from '../Models/Log.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  log:LogModel;

  constructor(private logsService:LogsService,private router:Router)
  {

    this.router.navigate(['logIN']);

    this.log=new LogModel();
    this.log.interId=Number(localStorage.getItem("this.internID"));
    console.log(this.log);
    this.logsService.logsLogoutTime(this.log).subscribe(data=>{
      this.log=data as LogModel;
      console.log(this.log);

      localStorage.removeItem("token");
      localStorage.removeItem("role");
      
      
    });
  }
}
