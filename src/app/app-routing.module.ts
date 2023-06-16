import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InternTicketComponent } from './raise-ticket/intern-ticket.component';
import { GetAllInternsComponent } from './get-all-interns/get-all-interns.component';
import { GetAllTicketComponent } from './get-all-ticket/get-all-ticket.component';
import { LogoutComponent } from './logout/logout.component';
import { GetAllLogsComponent } from './get-all-logs/get-all-logs.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:NavBarComponent},
  {path:'register',component:RegisterComponent},
  {path:'ticket',component:InternTicketComponent},
  {path:'logIN',component:LoginComponent},
  {path:'GetAll',component:GetAllInternsComponent},
  {path:'ticketPage',component:GetAllTicketComponent},
  {path:'LogsPage',component:GetAllLogsComponent},
  {path:'logout',component:LogoutComponent},
  {path:'internDetails',component:UpdateDetailsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
