/*
==========================================
  Title: composer app
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 08/29/2021
  Description: composer service
==========================================
*/

//import statements
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName:"Paul Simon", genre:"Rock"},
      {composerId: 101, fullName:"Freddie Mercury", genre:"Rock"},
      {composerId: 102, fullName:"Elton John", genre:"Rock"},
      {composerId: 103, fullName:"John Lennon", genre:"Rock"},
      {composerId: 104, fullName:"Billy Joel", genre:"Rock"},
    ]
  }

  //Function to get list of composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers)
  }

  // Function to get composer by ID
  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
  // function to get composer and filter results based on user entry
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
