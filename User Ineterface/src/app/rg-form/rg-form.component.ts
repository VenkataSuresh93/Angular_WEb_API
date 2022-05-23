import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {RegisterService} from '../Register.service';

@Component({
  selector: 'app-rg-form',
  templateUrl: './rg-form.component.html',
  styleUrls: ['./rg-form.component.css']
})
export class RgFormComponent implements OnInit {
   errorMessage : string = '';
   AccountDetails : FormGroup;  
  constructor(private apiService:  RegisterService,private router:Router) { } 

  ngOnInit() {
     this.AccountDetails = new FormGroup({
    
      employeeCode: new FormControl(''),
       firstName: new FormControl(''),
       lastName: new FormControl(''),
       fatherName: new FormControl(''),
       gender: new FormControl(''),
      birthDate: new FormControl(''),  
       email: new FormControl('')
      
       });
    }
  
    onClickSubmit(data: any) 
    {
     console.log(this.AccountDetails.value)
     let newemp=
     {
       employeeCode:this.AccountDetails.get('employeeCode').value,
       firstName:this.AccountDetails.get('firstName').value,
       lastName:this.AccountDetails.get('lastName').value,
       fatherName:this.AccountDetails.get('fatherName').value,
       gender:this.AccountDetails.get('gender').value,
      birthDate:this.AccountDetails.get('birthDate').value,
       email:this.AccountDetails.get('email').value,
     }
    //  if(newemp.employeeCode||newemp.firstName||newemp.lastName||newemp.fatherName||newemp.gender||newemp.firstName||newemp.email==null){
    //    alert("enter details");
    //  }
     //else{
     console.log(newemp)
      //  this.AccountDetails.reset()
     this.apiService.RegisterEmployee(newemp).subscribe(data=> {console.log(data)});
    alert("Saved!")
    this.AccountDetails.reset()
    this.router.navigate(['/lrg']);
     }   
    //}
  }  

    
  









// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
   // this.employeeService.CreateEmployee()
    // .subscribe(data=>{this.AccountDetails=data;},error =>{
    //   this.errorMsg = error;
    //   console.error(error) 
    // } );


  // addEmployee(formRef){
  //   let obj=formRef.value;
  //   this.employeeService.CreateEmployee(obj)
  //   .subscribe(data =>{
  //    console.log("data");


// function subscribe(arg0: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }
// // function subscribe(arg0: (_data: any) => void) {
//   throw new Error('Function not implemented.');
// }
// function subscribe(_arg0: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }
// function subscribe(arg0: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }
// import { Component, OnInit } from '@angular/core';  
// import { FormBuilder, Validators } from '@angular/forms';  
// import { Observable } from 'rxjs';  
// import { EmployeeService } from '../employee.service';  
// import { Employee } from '../employee';  
  
// @Component({  
//   selector: 'app-employee',  
//   templateUrl: './employee.component.html',  
//   styleUrls: ['./employee.component.css']  
// })  
// export class EmployeeComponent implements OnInit {  
//   dataSaved = false;  
//   employeeForm: any;  
//   allEmployees: Observable<Employee[]>;  
//   employeeIdUpdate = null;  
//   massage = null;  
  
//   constructor(private formbulider: FormBuilder, private employeeService:EmployeeService) { }  
  
//   ngOnInit() {  
//     this.employeeForm = this.formbulider.group({  
//       EmpName: ['', [Validators.required]],  
//       DateOfBirth: ['', [Validators.required]],  
//       EmailId: ['', [Validators.required]],  
//       Gender: ['', [Validators.required]],  
//       Address: ['', [Validators.required]],  
//       PinCode: ['', [Validators.required]],  
//     });  
//     this.loadAllEmployees();  
//   }  
//   loadAllEmployees() {  
//     this.allEmployees = this.employeeService.getAllEmployee();  
//   }  
//   onFormSubmit() {  
//     this.dataSaved = false;  
//     const employee = this.employeeForm.value;  
//     this.CreateEmployee(employee);  
//     this.employeeForm.reset();  
//   }  
//   loadEmployeeToEdit(employeeId: string) {  
//     this.employeeService.getEmployeeById(employeeId).subscribe(employee=> {  
//       this.massage = null;  
//       this.dataSaved = false;  
//       this.employeeIdUpdate = employee.EmpId;  
//       this.employeeForm.controls['EmpName'].setValue(employee.EmpName);  
//      this.employeeForm.controls['DateOfBirth'].setValue(employee.DateOfBirth);  
//       this.employeeForm.controls['EmailId'].setValue(employee.EmailId);  
//       this.employeeForm.controls['Gender'].setValue(employee.Gender);  
//       this.employeeForm.controls['Address'].setValue(employee.Address);  
//       this.employeeForm.controls['PinCode'].setValue(employee.PinCode);  
//     });  
  
//   }  
//   CreateEmployee(employee: Employee) {  
//     if (this.employeeIdUpdate == null) {  
//       this.employeeService.createEmployee(employee).subscribe(  
//         () => {  
//           this.dataSaved = true;  
//           this.massage = 'Record saved Successfully';  
//           this.loadAllEmployees();  
//           this.employeeIdUpdate = null;  
//           this.employeeForm.reset();  
//         }  
//       );  
//     } else {  
//       employee.EmpId = this.employeeIdUpdate;  
//       this.employeeService.updateEmployee(employee).subscribe(() => {  
//         this.dataSaved = true;  
//         this.massage = 'Record Updated Successfully';  
//         this.loadAllEmployees();  
//         this.employeeIdUpdate = null;  
//         this.employeeForm.reset();  
//       });  
//     }  
//   }   
//   deleteEmployee(employeeId: string) {  
//     if (confirm("Are you sure you want to delete this ?")) {   
//     this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {  
//       this.dataSaved = true;  
//       this.massage = 'Record Deleted Succefully';  
//       this.loadAllEmployees();  
//       this.employeeIdUpdate = null;  
//       this.employeeForm.reset();  
  
//     });  
//   }  
// }  
//   resetForm() {  
//     this.employeeForm.reset();  
//     this.massage = null;  
//     this.dataSaved = false;  
//   }  
// }  