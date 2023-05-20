import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  template: `
    <ul>
      <li *ngFor="let course of courses">
        <input type="checkbox" [checked]="course.value"> {{ course.key }}
      </li>
    </ul>
  `
})
export class Task7 {
  courses = [
    { key: 'html', value: true },
    { key: 'css', value: true },
    { key: 'php', value: false },
    { key: 'js', value: true },
    { key: 'angular', value: false }
  ];
}
