import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
// local imports
import { IEmployee } from "./employee";

@Injectable() // for injecting dependenices i.e Http
export class EmployeeService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: Http) {}
  getEmployees(): Observable<IEmployee[]> {
    return this._http
      .get("http://localhost:57238/api/employees/")
      .pipe(map((response: Response) => response.json() as IEmployee[]));

    // return [
    //   {
    //     code: 'emp101',
    //     name: 'Johny Joestar',
    //     gender: 'Male',
    //     annualSalary: 50000,
    //     dateOfBirth: '7/21/1894'
    //   },
    //   {
    //     code: 'emp102',
    //     name: 'Joseph Joestar',
    //     gender: 'Male',
    //     annualSalary: 140000,
    //     dateOfBirth: '8/21/1954'
    //   },
    //   {
    //     code: 'emp103',
    //     name: 'Jotaro Kujo',
    //     gender: 'Male',
    //     annualSalary: 250000,
    //     dateOfBirth: '8/02/1970'
    //   },
    //   {
    //     code: 'emp104',
    //     name: 'Josuke Higashikata',
    //     gender: 'Male',
    //     annualSalary: 120000,
    //     dateOfBirth: '1/21/1983'
    //   },
    //   {
    //     code: 'emp105',
    //     name: 'Giorno Giovanna',
    //     gender: 'Male',
    //     annualSalary: 1280000,
    //     dateOfBirth: '9/26/1990'
    //   },
    //   {
    //     code: 'emp106',
    //     name: 'Jolyne Cujoh',
    //     gender: 'Female',
    //     annualSalary: 150000,
    //     dateOfBirth: '1/21/1993'
    //   }
    // ];
  }
}
