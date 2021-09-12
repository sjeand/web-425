/*
==========================================
  Title: gpa-calculator-app2
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 09/08/2021
  Description: gpa calculator app
==========================================
*/

// Import statements
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})

// Export class
export class BaseLayoutComponent implements OnInit {

  assignment: string;
  
  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
   }

  ngOnInit(): void {
  }

}
