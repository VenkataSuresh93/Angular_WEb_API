import { ViewTransactionComponent } from './Employee/view-transaction/view-transaction.component';
import { ViewBalanceComponent } from './Admin/view-balance/view-balance.component';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminProfileComponent } from './Admin/admin-home/admin-profile/admin-profile.component';
import { EmployeeListComponent } from './Admin/admin-home/employee-list/employee-list.component';

import { ManageAccountComponent } from './Admin/admin-home/manage-account/manage-account.component';
import { EmployeeHomeComponent } from './Employee/employee-profile/employee-home/employee-home.component';
import { EmployeeProfileComponent } from './Employee/employee-profile/employee-profile.component';
import { AboutComponent } from './Home/about/about.component';
import { HelpComponent } from './Home/help/help.component';
import { HomeComponent } from './Home/home/home.component';

import { LoginComponent } from './login/login.component';
import { ExbComponent } from './rg-form/exb/exb.component';
import { LrgComponent } from './rg-form/lrg/lrg.component';

import { RgFormComponent } from './rg-form/rg-form.component';
import { WithdrawComponent } from './Employee/withdraw/withdraw.component';
import { EmployeeBalanceComponent } from './Employee/employee-balance/employee-balance.component';


const routes: Routes = [


{path:"login", component:LoginComponent},
{path:"rg-form", component:RgFormComponent},
{path:"lrg", component:LrgComponent},
{path:"exb", component:ExbComponent},
{path:"home", component:HomeComponent},
{path:"about", component:AboutComponent},
{path:"help", component:HelpComponent},
// {path:"employee-list",component:EmployeeListComponent} ,
{path:"admin-home",component:AdminHomeComponent},
{path:"admin-profile",component:AdminProfileComponent},
{path:"manage-account",component:ManageAccountComponent},
{path:"employee-list",component:EmployeeListComponent},
{path:"employee-profile/:userName",component:EmployeeProfileComponent},
{path:"employee-home",component:EmployeeHomeComponent},
{path:"employee-details/:id",component:EmployeeDetailsComponent},
{path:"view-balance",component:ViewBalanceComponent},
{path:"withdraw",component:WithdrawComponent},
{path:"employee-balance",component:EmployeeBalanceComponent},
{path:"view-transaction",component:ViewTransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
