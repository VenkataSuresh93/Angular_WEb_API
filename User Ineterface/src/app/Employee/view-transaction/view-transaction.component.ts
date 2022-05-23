import { RegisterService } from 'src/app/Register.service';
import { Component, OnInit } from '@angular/core';
import { Withdraws } from 'src/withdraws';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {

  errorMsg: any;
  public withdraw:Withdraws[]=[];
  constructor(private viewService:RegisterService) { }

  
  ngOnInit(): void {

    this.viewService.getAllWithdraws()
    .subscribe(
      data=>{this.withdraw=data
        console.log(data);},
         error =>{
      this.errorMsg = error;
      console.error(error) 
      alert(this.withdraw);
    } );

}


}
