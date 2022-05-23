import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{WithdrawDetails} from './withdraw'

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {
  reset() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) {  }
  addWithdraw(WithdrawDetails):Observable<WithdrawDetails> {
    console.log(WithdrawDetails);
    return this.http.post<WithdrawDetails>('https://localhost:44346/api/Withdraws/Post',WithdrawDetails);
}  


}
