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
  sortBy:string[] = ["name","salary","position"];
  selection:keyof Employee= "name";
  modo:string = "Ascending";
  constructor() { }

  sortEmployees(emplKey:keyof Employee,modo:String) {
      this.employees = this.employees.sort((a, b) => a[emplKey]>=b[emplKey] ? 1:-1)
      console.log(emplKey)

    if (modo === "Descending")
      this.employees = this.employees.sort((a, b) => a[emplKey]>=b[emplKey] ? 1:-1).reverse()
  }

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;

    this.employees = this.employees.sort((a, b) => a.name.localeCompare(b.name));
  }

}
