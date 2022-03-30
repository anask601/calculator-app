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
  actionPerform = false;

  constructor() {}

  ngOnInit(): void {}
  showWhichButtonHasBeenClicked(e: any) {
    if (this.actionPerform) {
      this.actionPerform = false;
      this.parentValue = '';
    }

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
    this.parentValue = eval(this.parentValue);
    this.actionPerform = true;
  }
}
