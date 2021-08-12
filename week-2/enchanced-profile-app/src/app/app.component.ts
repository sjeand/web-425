/*
==========================================
  Title: enhanced profile app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/9/2021
  Description: components
==========================================
*/

//import and export components
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
