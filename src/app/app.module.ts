import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task4 } from './task4/task4.component';
import { Task5 } from './task5/task5.component';
import { Task6 } from './task6/task6.component';
import { Task7 } from './task7/task7.component';

@NgModule({
  declarations: [
    AppComponent,
    Task4,
    Task5,
    Task6,
    Task7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
