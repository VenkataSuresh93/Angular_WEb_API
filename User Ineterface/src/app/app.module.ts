import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { RgFormComponent } from './rg-form/rg-form.component';
import { LoginComponent } from './login/login.component';
import { LrgComponent } from './rg-form/lrg/lrg.component';
import { ExbComponent } from './rg-form/exb/exb.component';

import { EmployeeService } from './Employee.service';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminProfileComponent } from './Admin/admin-home/admin-profile/admin-profile.component';
import { HomeComponent } from './Home/home/home.component';
import { AboutComponent } from './Home/about/about.component';
import { HelpComponent } from './Home/help/help.component';
import { ManageAccountComponent } from './Admin/admin-home/manage-account/manage-account.component';
import { EmployeeListComponent } from './Admin/admin-home/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './Employee/employee-profile/employee-profile.component';
import { EmployeeHomeComponent } from './Employee/employee-profile/employee-home/employee-home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ViewBalanceComponent } from './Admin/view-balance/view-balance.component';
import { WithdrawComponent } from './Employee/withdraw/withdraw.component';
import { EmployeeBalanceComponent } from './Employee/employee-balance/employee-balance.component';
import { ViewTransactionComponent } from './Employee/view-transaction/view-transaction.component';






@NgModule({
  declarations: [
    AppComponent,   
    RgFormComponent,   
    LoginComponent, 
    LrgComponent,
    ExbComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    ManageAccountComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    EmployeeHomeComponent,
    EmployeeDetailsComponent,
    ViewBalanceComponent,
    WithdrawComponent,
    EmployeeBalanceComponent,
    ViewTransactionComponent,
    
    
    
   
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
