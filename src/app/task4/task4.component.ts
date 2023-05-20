import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  template: `
  <input type="checkbox" [checked]="isChecked"> <br>
  <a href="#" (click)="setChecked(true)">Позначити</a> <br>
  <a href="#" (click)="setChecked(false)">Зняти позначку</a>
  `
})
export class Task4 {
    isChecked: boolean = false;

    setChecked(value: boolean) {
      this.isChecked = value;
    }
}
