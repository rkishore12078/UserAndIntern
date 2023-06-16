import { Component, Input } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { UserDTOModel } from '../Models/userDTO.model';
import { ChangeStatusService } from '../Services/changeStatus.service';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-individual-intern',
  templateUrl: './individual-intern.component.html',
  styleUrls: ['./individual-intern.component.css']
})
export class IndividualInternComponent {
  @Input() intern:InternModel;//Parent to child communication
  userdto:UserDTOModel;
  toggleButton:boolean;
  user:UserModel;
  count:number=0;

  constructor(private changestatusService:ChangeStatusService)
  {
    this.intern=new InternModel();
    this.userdto=new UserDTOModel();
    this.user=new UserModel();
    this.toggleButton=true;


    this.count=Number(localStorage.getItem("count"));//get the count from the localStorage
    this.userdto.userId=this.changestatusService.newInterns[this.count].id;
    this.count++;

    localStorage.setItem("count",(this.count).toString());//again set the updated count 
    console.log(this.intern.id);

    this.changestatusService.GetUser(this.userdto).subscribe(data=>//Get the current user by userID
    {
      this.user=data as UserModel;
      console.log(this.user);

      if(this.user.status=="Approved")
        this.toggleButton=false;
      else
        this.toggleButton=true;
    })
    
  }

  changeStatus()
  {
    this.userdto=new UserDTOModel();
    console.log(this.userdto);
    this.userdto.userId=this.intern.id;
    this.changestatusService.changeStatus(this.userdto).subscribe(data=>
    {
      this.userdto=data as UserDTOModel;
      

      if(this.userdto.role!=null)
        this.toggleButton=!this.toggleButton;
      console.log(this.userdto);
    });

  }
}

