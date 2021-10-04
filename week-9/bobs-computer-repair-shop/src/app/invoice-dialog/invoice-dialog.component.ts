/*
==========================================
  Title: Bobs Computer Repair Shop
  Author: Sarah Jean Baptiste
  Date: 10/03/2021
  Description:Bobs Computer Repair Shop
==========================================
*/

//import statements
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';



@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})

export class InvoiceDialogComponent implements OnInit {

  date: Date | undefined;
  total = 0;

  // total to be displayed of all needed services and parts
  constructor(@Inject(MAT_DIALOG_DATA) public data: { services: MatListOption[],
    laborHours: number,
    partsAmount: number
  }) {
    this.date = new Date();
    for( let service of data.services){
      this.total = this.total + service.value.value;
    }
    this.total = this.total + data.partsAmount;
    this.total = this.total + (data.laborHours *50);
  }


  calculate(){
    let total = 0;

    console.log(total);
  }

  ngOnInit(): void {
  }



}
