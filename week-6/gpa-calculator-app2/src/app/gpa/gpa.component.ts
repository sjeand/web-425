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
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
