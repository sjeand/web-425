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
import { IComposer } from './composer.interface';

// Class to require first and last name
export class Composer {

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
  getComposers() {
    return this.composers;
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
}
