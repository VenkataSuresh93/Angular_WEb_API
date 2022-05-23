import { AdminLogins } from './admin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetails } from './Register';
import { EmployeeLogins } from './loginform';
import { Withdraws } from 'src/withdraws';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    
  url = 'https://localhost:44346/api';
  addEmployee: any;
  onSubmit: any;
  id:any;

  constructor(private http: HttpClient) { }
  getAllWithdraws(): Observable<Withdraws[]> 
 {
  return this.http.get<Withdraws[]>('https://localhost:44346/api/Withdraws');
 }
  getEmployeeLogin(employeeLogins:EmployeeLogins){

    return this.http.post<EmployeeLogins>('https://localhost:44346/api/EmployeeLogins/UserLogin',employeeLogins);
  }
  getAdminLogins(){
    return this.http.get<AdminLogins>('https://localhost:44346/api/AdminLogins/1');
  }
  getTotalBalance() {
    return this.http.get('https://localhost:44346/api/TotalBalance');
  }

  getEmployeeTotalBalance() {
    return this.http.get('https://localhost:44346/api/EmployeeTotalAmount');
  }

  RegisterEmployee(AccountDetails): Observable<AccountDetails> {
    //   const httpOptions ={headers:new HttpHeaders({'Content-Type':'application/json'})};	 
    console.log(AccountDetails);
    return this.http.post<AccountDetails>(this.url + '/AccountDetails', AccountDetails);
  }

  getAllEmployee(): Observable<AccountDetails[]> {
    return this.http.get<AccountDetails[]>(this.url + '/AccountDetails');
  }

  getEmpById(id): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(this.url + '/AccountDetails/' + id);
  }
  getEmpByName(userName): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(this.url + '/AccountDetails/' + userName);
  }
  deleteEmployee(id: number): Observable<AccountDetails> {
    const httpOptions = { Headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<AccountDetails>(this.url + '/AccountDetails/' + id);

  }

}
