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
  }
  getEmployeeByCode(empCode: string): Observable<IEmployee> {
    return this._http
      .get("http://localhost:57238/api/employees/" + empCode)
      .pipe(map((response: Response) => response.json() as IEmployee));
  }
}
