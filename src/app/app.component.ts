import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display: string = '';

  OnEnteredValue(num: string) {
    if (num === '*' || num === '-' || num === '+' || num === '/') {
      this.display = num;
    }
  }
}
