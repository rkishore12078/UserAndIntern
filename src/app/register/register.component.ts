import { Component } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { UserInternService } from '../Services/user-intern.service';
import { UserDTOModel } from '../Models/userDTO.model';
import { Router } from '@angular/router';
import { LogModel } from '../Models/Log.model';
import { LogsService } from '../Services/logs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  intern:InternModel;
  userdto:UserDTOModel;
  log:LogModel;


  constructor(private userInternService:UserInternService,//Injections
              private router:Router,
              private logsService:LogsService)
  {
    this.intern = new InternModel();
    this.userdto=new UserDTOModel();
    this.log=new LogModel();       
  }

  addGender(gender:any){
    this.intern.gender = gender;
  }

  addIntern()
  {
      this.userInternService.userRegister(this.intern).subscribe(data=>//Entered details inserted into database
      {
        this.userdto = data as UserDTOModel;//copying the returned data into userdto object
        localStorage.setItem("token",this.userdto.token);//set token into localStorage
        localStorage.setItem("this.internID",(this.userdto.userId).toString());//set ID into localStorage


        this.log.interId=Number(localStorage.getItem("this.internID"));
        console.log(this.log);
        this.logsService.logsLoginTime(this.log).subscribe(data=>//While user register his login time will be inserted into database
        {
          this.log=data as LogModel;
          console.log(this.log);
        });
 
        if(this.userdto.role=="Intern")//If user is intern navigate to intern restricted page
        {
          this.router.navigate(['ticket']);
        }
        else if(this.userdto.role=="Admin")//If user is Admin navigate to intern restricted page
        {
          this.router.navigate(['GetAll']);
        }
        else{

        }
        console.log(this.userdto);
      },

      err=>{
        console.log(err)
      });

  }

  logIn()//Navigate into Login page
  {
    this.router.navigate(['logIN']);
  }

}
