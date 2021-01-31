
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 300000;
  min = 100000;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 100000;
  incomeValue = 100000;
  expenseValue = 0;
  vertical = false;
  tickInterval = 1;
  color: ThemePalette = 'accent';
  checked = false;
  tenureList: string[] = ['3 Months', '6 Months', '9 Months', '1 Year'];
  ngOnInit(): void {
  }
  getSliderExpenseTickInterval(): number | 'auto' {
    return 0;
  }
  getSliderIncomeTickInterval(): number | 'auto' {
    this.expenseValue = this.expenseValue > this.incomeValue ? 0 : this.expenseValue;
    return 0;
  }
}
