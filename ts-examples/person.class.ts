/*
==========================================
  Title: Assignment 1.4
  Author: Professor Krasso
  Date: 08/5/2021
  Modified by: Sarah Jean Baptiste
  Description: person.class.ts
==========================================
*/

// import IPerson.
import { IPerson } from "./person.interface";

// Class to require first and last name
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Create myName variable to create new person. 
let myName = new Person("Sarah", "Jean Baptiste");
console.log(`My name is ${myName.firstName} ${myName.lastName}`); //Display "My name is" with new person variable. 