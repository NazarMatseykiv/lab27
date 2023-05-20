import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  template: `
  <input type="checkbox" [checked]="isChecked" (change)="toggleCheckbox()">
  <a href="#" (click)="toggleCheckbox()">Змінити стан чекбоксу</a>
  `
})
export class Task5 {
    isChecked: boolean = false;

    toggleCheckbox() {
      this.isChecked = !this.isChecked;
    }
}
