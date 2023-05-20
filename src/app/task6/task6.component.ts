import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  template: `
  <input type="checkbox" [checked]="isChecked" (change)="isChecked = !isChecked">
  <input type="checkbox" [checked]="isChecked" (change)="isChecked = !isChecked">  
  `
})
export class Task6 {
    isChecked: boolean = false;
}
