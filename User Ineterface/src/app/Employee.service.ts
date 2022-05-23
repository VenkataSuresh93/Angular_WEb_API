import { Injectable } from '@angular/core';
import {​​​​​​​​ HttpClient  }​​​​​​​​ from '@angular/common/http';  
import {​​​​​​​​ HttpHeaders }​​​​​​​​ from '@angular/common/http';  
import {​​​​​​​​ Observable }​​​​​​​​ from 'rxjs';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  PersonalBankDetails} from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
 url = 'https://localhost:44346/api';
  addEmployee: any;
  onSubmit: any;
  
  constructor(private fb:FormBuilder, private http:HttpClient) { }


  CreateEmployee( PersonalBankDetails): Observable<PersonalBankDetails>{	
 	//   const httpOptions ={headers:new HttpHeaders({'Content-Type':'application/json'})};	 
 	console.log(PersonalBankDetails);
		return this.http.post<PersonalBankDetails>(this.url+'/PersonalBankDetails',PersonalBankDetails);
 	  }
	  
	 
   } 
   
   

  
   
   
	
    

    //  AddBankdetails(exb: PersonalBankDetails): Observable<PersonalBankDetails>{
 	//  console.log(PersonalBankDetails);
	//  return this.http.post<PersonalBankDetails>(this.url+'/PersonalBankDetails',exb);
    //  }

	 
	


  

















//formData : Employee;

	//url = 'https://localhost:44346/api/AccountDetails';




//readonly BaseURL ='https://localhost:44346/api';

//   postData(){
// 	  return this.http.post('api/AccountDetails')


 //SaveRecord()	
/*import {​​​​​​​​ Injectable }​​​​​​​​ from '@angular/core';  
	import {​​​​​​​​ HttpClient }​​​​​​​​ from '@angular/common/http';  
	import {​​​​​​​​ HttpHeaders }​​​​​​​​ from '@angular/common/http';  
	import {​​​​​​​​ Observable }​​​​​​​​ from 'rxjs';  
	import {​​​​​​​​ Employee }​​​​​​​​ from './employee';  
	//After that we write all methods related to consume web in employee.service.ts  
	 @Injectable({​​​​​​​​  
	  providedIn: 'root'
	}​​​​​​​​)  
	exportclass EmployeeService {​​​​​​​​  
	  url = 'http://localhost:65389/Api/Employee';  
	  constructor(private http: HttpClient) {​​​​​​​​ }​​​​​​​​  
	  getAllEmployee(): Observable<Employee[]> {​​​​​​​​  
	    returnthis.http.get<Employee[]>(this.url + '/AllEmployeeDetails');  
	  }​​​​​​​​  
	  getEmployeeById(employeeId: string): Observable<Employee> {​​​​​​​​  
	    returnthis.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);  
	  }​​​​​​​​  
	  createEmployee(employee: Employee): Observable<Employee> {​​​​​​​​  
	    const httpOptions = {​​​​​​​​ headers: new HttpHeaders({​​​​​​​​ 'Content-Type': 'application/json'}​​​​​​​​) }​​​​​​​​;  
	    returnthis.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
	    employee, httpOptions);  
	  }​​​​​​​​  
	  updateEmployee(employee: Employee): Observable<Employee> {​​​​​​​​  
	    const httpOptions = {​​​​​​​​ headers: new HttpHeaders({​​​​​​​​ 'Content-Type': 'application/json'}​​​​​​​​) }​​​​​​​​;  
	    returnthis.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
	    employee, httpOptions);  
	  }​​​​​​​​  
	  deleteEmployeeById(employeeid: string): Observable<number> {​​​​​​​​  
	    const httpOptions = {​​​​​​​​ headers: new HttpHeaders({​​​​​​​​ 'Content-Type': 'application/json'}​​​​​​​​) }​​​​​​​​;  
	    returnthis.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +employeeid,  
	 httpOptions);  
	  }​​​​​​​​  
	}​​​​​​​*/ 



	// formModel = this.fb.group({
// 	UserName:['', Validators.email],
// 	Password: this.fb.group({
// 	Password : ['',Validators.required],
// 	ConfirmPassword : ['', Validators.required]
// 	},{Validator : this.comparePasswords})
// });
// 	comparePasswords(fb:FormGroup){
	
// }
// save(){
// var body ={
// 	Username : this.formModel.value.UserName,
// 	Password : this.formModel.value.Password
// };
//  return this.http.post(this.BaseURL+'EmployeeLogins',body);
// }
// }


// CreateEmployee(obj){
// 	this.http.post("https://localhost:44346/api/AccountDetails",obj)   

