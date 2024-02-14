import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EMPLOYEE_LIST} from "../employee-list";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
 employees: Employee[] = [];
  sortBy:string[] = ["Name","Salary","Position"];
  selection:string = "Name";
  modo:string = "Ascending";
  constructor() { }

  sortEmployees() {
    if (this.selection === "Salary" && this.modo==="Ascending")
      this.employees = this.employees.sort((a, b) => a.salary-b.salary)
    else if (this.selection === "Salary" && this.modo==="Descending")
      this.employees = this.employees.sort((a, b) => b.salary-a.salary)
    else if (this.selection === "Position" && this.modo==="Ascending")
      this.employees = this.employees.sort((a, b) => a.position.localeCompare(b.position))
    else if (this.selection === "Position" && this.modo==="Descending")
      this.employees = this.employees.sort((a, b) => a.position.localeCompare(b.position)).reverse()
    else if (this.selection === "Name" && this.modo==="Descending")
      this.employees = this.employees.sort((a, b) => a.name.localeCompare(b.name)).reverse()
    else if (this.selection === "Name" && this.modo==="Ascending")
      this.employees = this.employees.sort((a, b) => a.name.localeCompare(b.name));
  }

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;

    this.employees = this.employees.sort((a, b) => a.name.localeCompare(b.name));
  }

}
