import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  columnSpan = 2;
 
  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
  constructor() {}

  ngOnInit() {}
}
