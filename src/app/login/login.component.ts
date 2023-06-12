import { Component } from '@angular/core';
import { UserDTOModel } from '../Models/userDTO.model';
import { UserInternService } from '../Services/user-intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:UserDTOModel;
  internID:string;

  constructor(private userInterService:UserInternService,private router:Router){
    this.user=new UserDTOModel();
    this.internID='';
  }

  addUser(){
    this.userInterService.userlogin(this.user).subscribe(data=>{
      this.user=data as UserDTOModel;
      localStorage.setItem("token",this.user.token);
      localStorage.setItem("this.internID",(this.user.userId).toString());
      localStorage.setItem("logINTime",(new Date()).toString());
      console.log(this.user);

      if(this.user.role=="Intern")
      {
        this.router.navigate(['ticket']);
      }
      else{
        this.router.navigate(['GetAll']);
      }
    },
    err=>{
      console.log(err);
    });
    
  }
}
