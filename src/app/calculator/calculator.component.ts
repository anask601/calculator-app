import { Component, OnInit } from '@angular/core';
import { buttons } from '../button';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  buttons = buttons;

  constructor() {}

  ngOnInit(): void {}
}
