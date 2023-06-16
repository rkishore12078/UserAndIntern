import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private route:Router)
  {

  }

  Register(){
    this.route.navigate(['register']);
  }
  login(){
    this.route.navigate(['logIN']);
  }
}


