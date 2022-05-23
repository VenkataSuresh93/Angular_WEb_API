import { Component, OnInit } from '@angular/core';
import { AccountDetails } from 'src/app/Register';
import { RegisterService } from 'src/app/Register.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  public accountDetails:AccountDetails[]=[];
  errorMsg: any;
 
  constructor(private employeeService:RegisterService) {  }
  
  ngOnInit() {
   
    this.employeeService.getAllEmployee()
    .subscribe(data=>{this.accountDetails=data;},error =>{
      this.errorMsg = error;
      console.error(error) 
    } );
  }
  
  deleteEmployee(employeeCode:number){
    
  }

}
