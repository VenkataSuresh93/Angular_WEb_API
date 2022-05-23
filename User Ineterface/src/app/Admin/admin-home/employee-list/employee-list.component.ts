import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDetails } from 'src/app/Register';
import { RegisterService } from 'src/app/Register.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public accountDetails:AccountDetails[]=[];
  errorMsg: any;
  getData: AccountDetails;
 
  constructor(private route:ActivatedRoute,private employeeService:RegisterService) {  }
  
  ngOnInit() {
   
    this.employeeService.getAllEmployee()
    .subscribe(data=>{this.accountDetails=data;},error =>{
      this.errorMsg = error;
      console.error(error) 
    } );

    // const id=Number(this.route.snapshot.paramMap.get('id'));

  }
  //  viewDetail(id:number){
  //  var emp=this.employeeService.getEmpById(id);
  //  }
  deleteEmployee(id:number){
    if(confirm('Are You Sure To Delete??')){
     this.employeeService.deleteEmployee(id)
     .subscribe(data=>{this.getData=data;
       this.employeeService.getAllEmployee()
       
     },
       
       error =>{
       this.errorMsg = error;

       });
   }

  }
}
