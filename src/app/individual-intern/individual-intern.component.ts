import { Component, Input } from '@angular/core';
import { InternModel } from '../Models/intern.model';
import { UserDTOModel } from '../Models/userDTO.model';

@Component({
  selector: 'app-individual-intern',
  templateUrl: './individual-intern.component.html',
  styleUrls: ['./individual-intern.component.css']
})
export class IndividualInternComponent {
  @Input() intern:InternModel;
  userdto:UserDTOModel;
  constructor(){
    //this.intern=new InternModel(1,"Kishore",new Date(),21,"Male","8765678","jhfdrtyhbn","jhgtyuh");
    this.intern=new InternModel();
    this.userdto=new UserDTOModel();

    this.userdto.userId=this.intern.id
  }

  changeStatus(){
    this.
  }
}
