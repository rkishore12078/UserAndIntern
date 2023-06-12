import { Component } from '@angular/core';
import { LogModel } from '../Models/Log.model';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  log:LogModel;

  constructor(){
    this.log=new LogModel();
  }

  showLogs(){
    this.log.interId=Number(localStorage.getItem("this.internID"));
    // this.log.logIn=new Date(localStorage.getItem("logINTime"));
    // this.log.logOut=new Date(localStorage.getItem("logoutTime"));
  }

}
