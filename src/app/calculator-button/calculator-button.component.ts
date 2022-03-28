import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css'],
})
export class CalculatorButtonComponent implements OnInit {
  @Input() valueToShowOnButton!: { value: any; color: string };
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onEnteredValue(value: any): void {
    this.buttonClicked.emit(value);
  }
}
