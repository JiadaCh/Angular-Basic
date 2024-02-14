import {Component} from '@angular/core';

import {FormBuilder, FormGroup, ReactiveFormsModule, Validators,FormsModule} from "@angular/forms";
@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ex06.component.html',
  styleUrl: './ex06.component.css'
})
export class Ex06Component {
   celcius: String="" ;
   fahrenheit: String = "";

  constructor(private fb: FormBuilder) {
  }
  rForm = this.fb.group({
    celcius: ['', [Validators.required, Validators.pattern("\-?[0-9.]*")]],
    fahrenheit: ['', [Validators.required, Validators.pattern("\-?[0-9.]*")]],
  })

  clear() {
    this.celcius = "0";
    this.fahrenheit = "0";
  }

  convertToCelcius() {
    this.celcius = ((Number(this.fahrenheit) - 32) * 5 / 9)+"";
  }

  converToFahrenheit() {
    this.fahrenheit ="" +(Number(this.celcius) * 9 / 5 + 32);
  }
}
