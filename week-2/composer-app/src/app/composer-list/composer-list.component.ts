/*
==========================================
  Title: composer app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/9/2021
  Description: composer list
==========================================
*/

import { Component, OnInit } from '@angular/core';

// Class to require first and last name
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
      this.fullName = fullName;
      this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit{
  composers: Array<Composer>;

  constructor() {
      this.composers = [
        new Composer("Paul Simon", "Rock"),
        new Composer("Freddie Mercury", "Rock"),
        new Composer("Elton John", "Rock"),
        new Composer("John Lennon", "Rock"),
        new Composer("Billy Joel", "Rock"),
      ]
  }

  ngOnInit(): void{
  }
}


