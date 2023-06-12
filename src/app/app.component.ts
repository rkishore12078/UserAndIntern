import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInternService } from './Services/user-intern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleShownav:boolean;
  title = 'UserAndInternManagement';
  constructor(private router:Router,private userinterService:UserInternService){
    this.toggleShownav=this.userinterService.shownav;
  }

  Register()
  {
    this.router.navigate(['register']);
  }

  login()
  {
    this.router.navigate(['logIN']);
  }
}
