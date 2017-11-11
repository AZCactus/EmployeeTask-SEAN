import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  employeeA: any[];
  employeeB: any[];
  employeeC: any[];

  constructor() { }

  addTaskA(task) {
    let employeeA
    if (localStorage.getItem('task') === null) {
      employeeA = []
      employeeA.unshift(task);
      console.log(task)
      localStorage.setItem('task', task)
    }
    else {
      this.employeeA = JSON.parse(localStorage.getItem('task'))
    }
  }


  addTaskB(task) {
    let employeeA
    if (localStorage.getItem('task') === null) {
      employeeA = []
      employeeA.unshift(task);
      console.log(task)
      localStorage.setItem('task', task)
    }
    else {
      this.employeeA = JSON.parse(localStorage.getItem('task'))
    }
  }


  addTaskC(task) {
    let employeeA
    if (localStorage.getItem('task') === null) {
      employeeA = []
      employeeA.unshift(task);
      console.log(task)
      localStorage.setItem('task', task)
    }
    else {
      this.employeeA = JSON.parse(localStorage.getItem('task'))
    }
  }


}
