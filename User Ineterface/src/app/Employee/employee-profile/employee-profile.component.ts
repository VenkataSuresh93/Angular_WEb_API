import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDetails } from 'src/app/Register';
import { RegisterService } from 'src/app/Register.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  public accountDetail:AccountDetails=new AccountDetails();
  errorMsg: any;
 
  userName:any;
  
  constructor(private route:ActivatedRoute,
    private employeeService:RegisterService) { 
    
   }

  
  ngOnInit() {
    
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
 





