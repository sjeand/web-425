/*
==========================================
  Title: gpa-calculator-app3
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 09/18/2021
  Description: gpa calculator app
==========================================
*/

//import statements
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]
   }

   validate(studentId: number){
     return this.studentIds.some(id => id === studentId); 
   }
}
