import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Register.service';

@Component({
  selector: 'app-employee-balance',
  templateUrl: './employee-balance.component.html',
  styleUrls: ['./employee-balance.component.css']
})
export class EmployeeBalanceComponent implements OnInit {
  public total: object;
  constructor(private balance: RegisterService) { }

  ngOnInit() {
    this.balance.getEmployeeTotalBalance().subscribe((data) => {
      this.total = data;
      console.log(data);

    })
  }

}
