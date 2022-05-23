import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/Employee.service';
//import { HttpClient } from '@angular/common/http';
//import { EmployeeService } from 'src/app/Employee.service';
//import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exb',
  templateUrl: './exb.component.html',
  styleUrls: ['./exb.component.css']
})
export class ExbComponent implements OnInit {
 errorMessage : string = '';
 PersonalBankDetails : FormGroup;
  
  constructor(private apiService:EmployeeService,private router:Router) { } 

 
  ngOnInit()
   {
     this.PersonalBankDetails = new FormGroup({
    
       bankName: new FormControl(''),
       accountNo: new FormControl(''),
       ifscCode: new FormControl('')
       }); 
  }
  onClickSubmit(data: any) 
  {
     console.log(this.PersonalBankDetails.value)
       let newDetails=
      {
        bankName:this.PersonalBankDetails.get('bankName').value,
        accountNo:this.PersonalBankDetails.get('accountNo').value,
        ifscCode:this.PersonalBankDetails.get('ifscCode').value,
       }
      //  console.log(newDetails)
       
       this.apiService.CreateEmployee(newDetails).subscribe(data=> {console.log(data)});
       alert("Registration Completed!");
       this.PersonalBankDetails.reset();
       this.router.navigate(['/login']);
   }   
 
}

