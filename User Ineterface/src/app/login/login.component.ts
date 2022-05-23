import { EmployeeLogins } from './../loginform';
import { AdminLogins } from './../admin';
import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormControl, Validators } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RegisterService } from '../Register.service';
import{ActivatedRoute, Router, RouterModule,Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  AdminForm: FormGroup;
  EmployeeForm:FormGroup;
  adminLogin:AdminLogins;
  employeeLogins:EmployeeLogins;
  id: number;
 EmployeeUserName:any;
  
  

  constructor(private route:ActivatedRoute, private router:  Router,private service:RegisterService) { }

  ngOnInit() {
    this.AdminForm=new FormGroup({
      userName:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    });
    this.EmployeeForm=new FormGroup({
      userName:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(10)])
    });

    this.id=this.route.snapshot.params['id'];
    this.getAdminLogins();
  }

  getAdminLogins(){
    
  this.service.getAdminLogins()
  .subscribe(employee => {this.adminLogin=employee;
  });
  if(this.AdminForm.get('userName').value==this.adminLogin.userName && this.AdminForm.get('password').value==this.adminLogin.password){
    alert("Welcome Admin");
    this.router.navigate(['/admin-home']);
  }
  else{
          alert("Please enter Valid Credentials");
        }
        this.AdminForm.reset()
}
getEmployeeLogins()
{
  
  var loginvalue = 
  {
    userName:this.EmployeeForm.get('userName').value,
  password:this.EmployeeForm.get('password').value}
 
  
  this.service.getEmployeeLogin(loginvalue)
  .subscribe(employee => {
    console.log(employee);
    this.employeeLogins=employee;
    
  });
  if(this.EmployeeForm.get('userName').value==this.employeeLogins.userName && this.EmployeeForm.get('password').value==this.employeeLogins.password){
    alert("Welcome Employee");
    this.router.navigate(['/employee-home']);
    localStorage.setItem("username",this.employeeLogins.userName)
    //alert(localStorage.getItem("username"))
    
  }
  else{
          alert("Please enter Valid Credentials");
          
        }
        this.EmployeeForm.reset()
}
 

}
 
 
 


