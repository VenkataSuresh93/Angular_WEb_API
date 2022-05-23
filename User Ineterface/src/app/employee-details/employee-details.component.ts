import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDetails } from '../Register';
import { RegisterService } from '../Register.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public accountDetail:AccountDetails=new AccountDetails();
  errorMsg: any;
 
  id:any;
  
  constructor(private route:ActivatedRoute,
    private employeeService:RegisterService) { 
    
   }

  
   ngOnInit() {
    
    this.id=this.route.snapshot.params['id'];
    this.getEmpById();

    }
    getEmpById(){
      this.employeeService.getEmpById(this.id)
      .subscribe(employee => {
        
        this.accountDetail=employee;
        console.log(employee);
      });
    }
    }
   
    


