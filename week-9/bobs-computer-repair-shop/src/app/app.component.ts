/*
==========================================
  Title: Bobs Computer Repair Shop
  Author: Sarah Jean Baptiste
  Date: 10/03/2021
  Description:Bobs Computer Repair Shop
==========================================
*/

// import statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = "Bob's Computer Repair Shop";
  }
}
