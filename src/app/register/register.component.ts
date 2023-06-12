import { Component } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { UserInternService } from '../Services/user-intern.service';
import { UserDTOModel } from '../Models/userDTO.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  intern:InternModel;
  userdto:UserDTOModel;

  constructor(private userInternService:UserInternService,private router:Router){
    this.intern = new InternModel();
    this.userdto=new UserDTOModel();
  }
  addGender(gender:any){
    this.intern.gender = gender;
  }
  addIntern(){

      this.userInternService.userRegister(this.intern).subscribe(data=>{
      this.userdto = data as UserDTOModel;
      localStorage.setItem("token",this.userdto.token);
      localStorage.setItem("this.internID",(this.userdto.userId).toString());
      localStorage.setItem("logINTime",new Date().toString());
      if(this.userdto.role=="Intern")
      {
        console.log("hello");
        this.router.navigate(['ticket']);
      }
      else{
        this.router.navigate(['']);
      }
      console.log(this.userdto);
    },

    err=>{
      console.log(err)
    });

    
  }

}
