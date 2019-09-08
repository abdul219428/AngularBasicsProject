import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { retry } from "rxjs/operators/";
import { ISubscription } from 'rxjs/Subscription';

// local imports
import { EmployeeService } from "./employee.service";
import { IEmployee } from "./employee";
import { from } from 'rxjs';

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employee: IEmployee;
  statusMessage: string = "loading data please wait";
  subscription;

  constructor(
    private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute
  ) {}
  cancelRequest(): void{
    this.statusMessage = 'Request Cancelled';
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    // to retrieve the route paramater value i.e /employees/code
    let empCode: string = this._activatedRoute.snapshot.params["code"];
    this.subscription=this._employeeService
      .getEmployeeByCode(empCode)
      .pipe(retry(2))
      .subscribe(
        employeeData => {
          if (employeeData == null) {
            this.statusMessage =
              "Employee with the specified code does not exists";
          } else {
            this.employee = employeeData;
          }
        },
        error => {
          this.statusMessage = "Problem with service try again later";
          console.log(error);
        }
      );
  }
}
