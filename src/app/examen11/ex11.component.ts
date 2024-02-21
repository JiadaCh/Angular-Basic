import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Employee} from "../employee";
import {EMPLOYEE_LIST} from "../employee-list";

@Component({
  selector: 'app-ex11',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ex11.component.html',
  styleUrl:'./ex11.component.css'
})
export class Ex11Component {
  employees: Employee[] = [];
  sortBy:string[] = ["name","salary","position","age"];
  selection:keyof Employee= "name";
  modo:string = "Ascending";
  employee:Employee = {
    name:"",
    position:"",
    salary: 500,
    age: 18
  };
  constructor(private fb: FormBuilder) { }
  rForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern("^[A-Z][a-z]*$")]],
    position: ['', [Validators.required, Validators.pattern("^[A-Z][a-z]*$")]],
    salary: ['', [Validators.required, Validators.pattern("^[0-9.]*"), Validators.min(500.00),Validators.max(99999.99)]],
    age: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(18)]],
  })

  sortEmployees(emplKey:keyof Employee,modo:String) {
    this.employees = this.employees.sort((a, b) => a[emplKey]>=b[emplKey] ? 1:-1)

    if (modo === "Descending")
      this.employees = this.employees.sort((a, b) => a[emplKey]>=b[emplKey] ? 1:-1).reverse()
  }
  submit(): void {
    EMPLOYEE_LIST.push(this.employee)
    console.log(EMPLOYEE_LIST)
  }
  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;

    this.employees = this.employees.sort((a, b) => a.name.localeCompare(b.name));
  }
}
