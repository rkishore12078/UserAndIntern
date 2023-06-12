import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInternService } from './Services/user-intern.service';
import { HttpClientModule } from '@angular/common/http';
import { InternTicketComponent } from './intern-ticket/intern-ticket.component';
import { TicketRaiseService } from './Services/ticketRaise.service';
import { LogsComponent } from './logs/logs.component';
import { GetAllInternsComponent } from './get-all-interns/get-all-interns.component';
import { IndividualInternComponent } from './individual-intern/individual-intern.component';
import { GetAllInternService } from './Services/getAllInterns.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    InternTicketComponent,
    LogsComponent,
    GetAllInternsComponent,
    IndividualInternComponent,
    GetAllInternsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserInternService,TicketRaiseService,GetAllInternService],
  bootstrap: [AppComponent]
})
export class AppModule { }
