import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import { CalculatorButtonComponent } from './calculator-button/calculator-button.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    CalculatorButtonComponent,
    CalculatorDisplayComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
