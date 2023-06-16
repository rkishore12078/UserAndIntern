import { Component } from '@angular/core';
import { UserDTOModel } from '../Models/userDTO.model';
import { UserInternService } from '../Services/user-intern.service';
import { Router } from '@angular/router';
import { LogsService } from '../Services/logs.service';
import { LogModel } from '../Models/Log.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  user:UserDTOModel;
  log:LogModel;
  toggle:boolean;

  constructor(private userInterService:UserInternService,
              private router:Router,
              private logsService:LogsService)
  {
    this.user=new UserDTOModel();
    this.log=new LogModel;
    this.toggle=false;
  }

  addUser()
  {
    this.userInterService.userlogin(this.user).subscribe(data=>
    {
      this.user=data as UserDTOModel;//copy the returned user from the api if the user is present and id and password is match

      //Setting the object properties into the localStorage for the further operation
      localStorage.setItem("token",this.user.token);
      localStorage.setItem("this.internID",(this.user.userId).toString());
      sessionStorage.setItem("role",this.user.role);
      console.log(this.user);

  
      if(this.user.role=="Intern")
      {
        this.logIn();
        this.router.navigate(['ticket']);
      }
      else if(this.user.role=="Admin")
      {
        this.logIn();
        this.router.navigate(['GetAll']);
      }
      else{
        this.toggle=!this.toggle;
      }
    },
    err=>{
      console.log(err);
    });
    
  }

  register()
  {
    this.router.navigate(['register']);
  }

  logIn()
  {
        this.log.interId=Number(localStorage.getItem("this.internID"));
        console.log(this.log);
        this.logsService.logsLoginTime(this.log).subscribe(data=>//While user register his login time will be inserted into database
        {
          this.log=data as LogModel;
          console.log(this.log);
        });
  }
}
