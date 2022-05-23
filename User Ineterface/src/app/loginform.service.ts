import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {EmployeeLogins} from './loginform';

@Injectable({
  providedIn: 'root'
})
export class LoginformService {
  url = 'https://localhost:44346/api';
  addEmployee: any;
  onSubmit: any;


  constructor(private fb:FormBuilder, private http:HttpClient) { }

  Logins( EmployeeLogins): Observable<EmployeeLogins>{	
    //   const httpOptions ={headers:new HttpHeaders({'Content-Type':'application/json'})};	 
    console.log(EmployeeLogins);
     return this.http.post<EmployeeLogins>(this.url+'/EmployeeLogins',EmployeeLogins);
      }
    
}
