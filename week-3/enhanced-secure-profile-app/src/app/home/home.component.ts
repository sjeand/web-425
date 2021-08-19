/*
==========================================
  Title: secure profile app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/19/2021
  Description: home
==========================================
*/

// Import statements
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Export class
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
  }

}
