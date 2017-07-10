import { EventEmitter } from '@angular/core';

export class EmployeeService {
  employeeDataReceived=new EventEmitter<any[]>();

  private empData:any[]=[];

  constructor() { }

  addEmployeeData(data:any[]) {
    this.empData.push(...data);
    this.employeeDataReceived.emit(this.empData.slice()); //Creating a copy of the array so that the original array remains untouched
  }
}
