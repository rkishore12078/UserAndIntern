import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InternTicketComponent } from './intern-ticket/intern-ticket.component';
import { GetAllInternsComponent } from './get-all-interns/get-all-interns.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'ticket',component:InternTicketComponent},
  {path:'logIN',component:LoginComponent},
  {path:'GetAll',component:GetAllInternsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
