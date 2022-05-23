import { RegisterService } from 'src/app/Register.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent implements OnInit {
  public total: object;
  constructor(private balance: RegisterService) { }

  ngOnInit() {
    this.balance.getTotalBalance().subscribe((data) => {
      this.total = data;
      console.log(data);

    })
  }

}
