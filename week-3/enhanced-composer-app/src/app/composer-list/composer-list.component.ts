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
import { IComposer } from '../composer.interface'
import { Composer } from '../composer.class'

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit{

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void{
  }
}


