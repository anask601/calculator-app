import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css'],
})
export class CalculatorButtonComponent implements OnInit {
  @Input() valueToShowOnButton!: { value: any; color: string };
  constructor() {}

  ngOnInit(): void {}
}
