import { Component, OnInit } from '@angular/core';
import { buttons } from '../button';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  buttons = buttons;
  parentValue: string = '';
  constructor() {}

  ngOnInit(): void {}
  showWhichButtonHasBeenClicked(e: any) {
    switch (e.action) {
      case 'clearAll': {
        this.clearInput();
        break;
      }
      default: {
        this.parentValue += e.value;
        break;
      }
    }
  }

  clearInput() {
    this.parentValue = '';
  }

  calculateResult() {
    console.log(this.parentValue);
    if (this.parentValue === '') {
      return;
    }
    this.parentValue = eval(this.parentValue);
  }
}
