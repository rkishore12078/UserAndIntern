import { Component, Input } from '@angular/core';
import { LogModel } from '../Models/Log.model';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  @Input() log:LogModel;

  constructor(){
    //this.log=new LogModel(1,3,new Date(),new Date());
    this.log=new LogModel();
  }

}
