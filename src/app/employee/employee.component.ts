import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// local imports
import { EmployeeService } from "./employee.service";
import { IEmployee } from "./employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employee: IEmployee;
  statusMessage: string='loading data please wait';

  constructor(
    private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // to retrieve the route paramater value i.e code
    let empCode: string = this._activatedRoute.snapshot.params["code"];
    this._employeeService.getEmployeeByCode(empCode).subscribe(
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
