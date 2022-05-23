import { UserInfo } from './../../../userInfo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/Register.service';
import { AccountDetails } from 'src/app/Register';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
   public user:UserInfo=new UserInfo();
  userName: any;
  public accountDetail:AccountDetails=new AccountDetails();
  errorMsg: any;
  constructor(private route:ActivatedRoute,private employeeService:RegisterService) { }
  
  ngOnInit() {
    console.log(localStorage.getItem('userName'));
    this.userName=this.route.snapshot.params['userName'];
    this.getEmpByName();
   
  }
  
    getEmpByName(){
      this.employeeService.getEmpByName(this.userName)
      .subscribe(employee => {
        
        this.accountDetail=employee;
        console.log(employee);
      });
  
  
}
}
