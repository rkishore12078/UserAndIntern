import { Component } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { GetAllInternService } from '../Services/getAllInterns.service';

@Component({
  selector: 'app-get-all-interns',
  templateUrl: './get-all-interns.component.html',
  styleUrls: ['./get-all-interns.component.css']
})
export class GetAllInternsComponent {
  interns:InternModel[];
  constructor(private getAllService:GetAllInternService)
  {
    this.interns=[];
    this.getAllService.getinterns().subscribe(data=>{
      this.interns=data as InternModel[];
      console.log(this.interns);
    })
  }
}
