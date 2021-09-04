/*
==========================================
  Title: in-n-out book
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 09/01/2021
  Description: part three
==========================================
*/

// import statement
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// export class
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.4 - Dialogs'
  }
}
