import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import{WithdrawService} from './withdraw.service'
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  errorMessage : string = '' ;
  withdrawForm: FormGroup;
  constructor(private withdraw:WithdrawService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this. withdrawForm = this.fb.group({ 
      FromAccountNo : ['',[Validators.required]],
      ToAccountNo : ['',[Validators.required]],
      Amount :  ['',[Validators.required]],
    });
  }
  Submits() : void {
    console.log(this. withdrawForm.value)
      let newWithdraw  = 
      {
        FromAccountNo : this. withdrawForm.get('FromAccountNo').value ,
        ToAccountNo :this. withdrawForm.get('ToAccountNo').value ,
        Amount : this. withdrawForm.get('Amount').value ,
        
      } 
      if(newWithdraw.Amount<=30000){
      console.log(newWithdraw)
      this.withdraw.addWithdraw(newWithdraw).subscribe(data=> { console.log(data)});
      alert("Successfully Transfer");
 
      }
      else
      {
        alert("Insufficent Balance");
      }
      this.withdrawForm.reset();
  }

}
