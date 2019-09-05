import { Component, OnInit } from '@angular/core';

// local imports
import { IEmployee } from 'src/app/employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: IEmployee[];
  selectedEmployeeCountRadioButton = 'All';

  constructor() {
    this.employees = [
      {
        code: 'emp101',
        name: 'Johny Joestar',
        gender: 'Male',
        annualSalary: 50000,
        dateOfBirth: '7/21/1894'
      },
      {
        code: 'emp102',
        name: 'Joseph Joestar',
        gender: 'Male',
        annualSalary: 140000,
        dateOfBirth: '8/21/1954'
      },
      {
        code: 'emp103',
        name: 'Jotaro Kujo',
        gender: 'Male',
        annualSalary: 250000,
        dateOfBirth: '8/02/1970'
      },
      {
        code: 'emp104',
        name: 'Josuke Higashikata',
        gender: 'Male',
        annualSalary: 120000,
        dateOfBirth: '1/21/1983'
      },
      {
        code: 'emp105',
        name: 'Giorno Giovanna',
        gender: 'Male',
        annualSalary: 1280000,
        dateOfBirth: '9/26/1990'
      },
      {
        code: 'emp106',
        name: 'Jolyne Cujoh',
        gender: 'Female',
        annualSalary: 150000,
        dateOfBirth: '1/21/1993'
      }
    ];
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void{
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  getTotalEmployeesCount(): number {
    return this.employees.length;
  }
  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }
  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }

  // getEmployees() {
  //   this.employees = [
  //     {
  //       code: 'emp101',
  //       name: 'Johny Joestar',
  //       gender: 'Male',
  //       annualSalary: 50000,
  //       dateOfBirth: '7/21/1894'
  //     },
  //     {
  //       code: 'emp102',
  //       name: 'Joseph Joestar',
  //       gender: 'Male',
  //       annualSalary: 140000,
  //       dateOfBirth: '8/21/1954'
  //     },
  //     {
  //       code: 'emp103',
  //       name: 'Jotaro Kujo',
  //       gender: 'Male',
  //       annualSalary: 250000,
  //       dateOfBirth: '8/02/1970'
  //     },
  //     {
  //       code: 'emp104',
  //       name: 'Josuke Higashikata',
  //       gender: 'Male',
  //       annualSalary: 120000,
  //       dateOfBirth: '1/21/1983'
  //     },
  //     {
  //       code: 'emp105',
  //       name: 'Giorno Giovanna',
  //       gender: 'Male',
  //       annualSalary: 1280000,
  //       dateOfBirth: '9/26/1990'
  //     },
  //     {
  //       code: 'emp106',
  //       name: 'Jolyne Cujoh',
  //       gender: 'Female',
  //       annualSalary: 150000,
  //       dateOfBirth: '1/21/1993'
  //     }
  //   ];
  // }
  // trackByEmpCode(index: number, employee: any): string {
  //   return employee.code;
  // }
}
