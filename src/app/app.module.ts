import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInternService } from './Services/user-intern.service';
import { HttpClientModule } from '@angular/common/http';
import { InternTicketComponent } from './raise-ticket/intern-ticket.component';
import { TicketRaiseService } from './Services/ticketRaise.service';
import { LogsComponent } from './individual-log/logs.component';
import { GetAllInternsComponent } from './get-all-interns/get-all-interns.component';
import { IndividualInternComponent } from './individual-intern/individual-intern.component';
import { GetAllInternService } from './Services/getAllInterns.service';
import { ChangeStatusService } from './Services/changeStatus.service';
import { GetAllTicketComponent } from './get-all-ticket/get-all-ticket.component';
import { GetIndividualTicketComponent } from './individual-ticket/get-individual-ticket.component';
import { GetSolveTicketService } from './Services/get_solve_ticket.service';
import { LogsService } from './Services/logs.service';
import { LogoutComponent } from './logout/logout.component';
import { GetAllLogsComponent } from './get-all-logs/get-all-logs.component';
import { GetLogService } from './Services/get_log.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { UpdateDetailsService } from './Services/updateDetails.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    InternTicketComponent,
    LogsComponent,
    GetAllInternsComponent,
    IndividualInternComponent,
    GetAllInternsComponent,
    GetAllTicketComponent,
    GetIndividualTicketComponent,
    LogoutComponent,
    GetAllLogsComponent,
    NavBarComponent,
    UpdateDetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [UserInternService,
              TicketRaiseService,
              GetAllInternService,
              ChangeStatusService,
              GetSolveTicketService,
              LogsService,
              GetLogService,
              UpdateDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
