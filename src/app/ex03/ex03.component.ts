import {Component} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './ex03.component.html',
  styleUrl: './ex03.component.css'
})
export class Ex03Component {
  n: number = 0;

  constructor() {
  }
  getClassOf(n = 0) {
    if (this.n <= 5) {
      return  "red";
    } else if (this.n >= 9) {

      return "blue";
    } else {
      return "green";
    }
  }
  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
    let num = document.getElementById("num");




  }
}
