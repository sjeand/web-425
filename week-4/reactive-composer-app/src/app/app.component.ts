/*
==========================================
  Title: enhanced composer app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/19/2021
  Description: enhanced-composer-app
==========================================
*/

// import statement
import { Component } from '@angular/core';

//Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//export the class
export class AppComponent {
  assignment: string = 'Exercise 4.3 - Handling Events with Observables';
}


