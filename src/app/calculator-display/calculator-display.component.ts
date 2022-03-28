import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.css'],
})
export class CalculatorDisplayComponent implements OnInit {
  @Input() parentValue: string = '';
  constructor() {}

  ngOnInit(): void {}
}
