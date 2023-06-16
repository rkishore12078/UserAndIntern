import { Component } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { UpdateDetailsService } from '../Services/updateDetails.service';
import { InternDTO } from '../Models/internDTO.model';
import { ChangePasswordDTO } from '../Models/changePasswordDTO.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent {
  toggleInputs:boolean;
  toggleButton:boolean;
  togglePassword:boolean;
  togglePasswordButton:boolean;
  intern:InternModel;
  internDTO:InternDTO;
  paswordDTO:ChangePasswordDTO

  constructor(private updateDetailsService:UpdateDetailsService,
              private route:Router)
  {
    this.toggleInputs=true;
    this.toggleButton=true;
    this.togglePassword=false;
    this.togglePasswordButton=false;
    this.intern=new InternModel();
    this.internDTO=new InternDTO();
    this.paswordDTO=new ChangePasswordDTO();

    this.internDTO.internId=Number(localStorage.getItem("this.internID"));
    this.updateDetailsService.getDetails(this.internDTO).subscribe(data =>//get the current user details from database
    {
      this.intern=data as InternModel;
    });
  }

  update()
  {
    this.toggleButton=false;
    this.toggleInputs=!this.toggleInputs;
  }

  onBlur()
  {
      this.togglePasswordButton=!this.togglePasswordButton;
  }

  updateDetails()
  {
    this.updateDetailsService.updateDetails(this.intern).subscribe(data=>//populate the object and pass to the update api
    {
      this.intern=data as InternModel;
      console.log(this.intern);

      if(this.intern!=null)
      {
        this.toggleInputs=!this.toggleInputs;
        this.toggleButton=true;
      }
    });
  }

  updatePassword()
  {
    this.paswordDTO.userID=Number(localStorage.getItem("this.internID"));
    this.updateDetailsService.updatePassword(this.paswordDTO).subscribe(data=>
    {
      this.paswordDTO=data as ChangePasswordDTO;

      console.log(this.paswordDTO);

      if(this.paswordDTO.newPassword!=null)
        this.togglePassword=!this.togglePassword;
    });
  }

  raiseTicket(){
    this.route.navigate(['ticket']);
  }

  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("this.internID");
    this.route.navigate(['logIN']);
  }

}
