import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginformService } from 'src/app/loginform.service';

@Component({
  selector: 'app-lrg',
  templateUrl: './lrg.component.html',
  styleUrls: ['./lrg.component.css']
})
export class LrgComponent implements OnInit {
  errorMessage : string = '';
  EmployeeLogins : FormGroup;

  constructor( private apiService:LoginformService,private router:Router) {

   }

  ngOnInit() {
    this.EmployeeLogins = new FormGroup({       
      userName: new FormControl(''),
      password: new FormControl(''),
      password_confirm:new FormControl('')
    });
  }
  onClickSubmit(data: any) 
    {
      console.log(this.EmployeeLogins.value)
      let newDetails=
      {
        userName:this.EmployeeLogins.get('userName').value,
        password:this.EmployeeLogins.get('password').value,
       
     }
        // console.log(newDetails)
        
        this.apiService.Logins(newDetails).subscribe(data=> {console.log(data)});
        alert("Saved!")
        this.EmployeeLogins.reset()
        this.router.navigate(['/exb']);
  }   
    
  }
  


  //     ngOnInit()
  //     {
  //       this.PersonalBankDetails = new FormGroup({
       
  //         bankName: new FormControl(''),
  //         accountNo: new FormControl(''),
  //         ifscCode: new FormControl('')
  //         }); 
  //    }
  //    onClickSubmit(data: any) 
  //    {
  //       console.log(this.PersonalBankDetails.value)
  //         let newDetails=
  //        {
  //          bankName:this.PersonalBankDetails.get('bankName').value,
  //          accountNo:this.PersonalBankDetails.get('accountNo').value,
  //          ifscCode:this.PersonalBankDetails.get('ifscCode').value,
  //         }
  //         console.log(newDetails)
  //         this.PersonalBankDetails.reset()
  //         this.apiService.CreateEmployee(newDetails).subscribe(data=> {console.log(data)});
  //         alert("Saved!")
  //     }   
    
  //  }
   












  