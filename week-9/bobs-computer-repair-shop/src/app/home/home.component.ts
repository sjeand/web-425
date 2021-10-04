/*
==========================================
  Title: Bobs Computer Repair Shop
  Author: Sarah Jean Baptiste
  Date: 10/03/2021
  Description:Bobs Computer Repair Shop
==========================================
*/

//import statements
import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';
import { IService } from '../services.interface';
import { MatSelectionList } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSelectionList) selectedServices!: MatSelectionList;
  services: IService[] = [];
  laborHours = "";
  partsAmount = "";


  constructor(servicesService: ServicesService, public dialog: MatDialog) {
    this.services = servicesService.typesOfServices;
   }

  ngOnInit(): void {
  }

// open dialog to display selected services, parts, labor and total of invoice
  openDialog(): void {
    this.laborHours = this.laborHours.trim() === "" ? "0" : this.laborHours;
    const laborHoursNum = parseFloat(this.laborHours);
    const partsAmountNum = parseFloat(this.partsAmount);
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      data: { services: this.selectedServices.selectedOptions.selected,
        laborHours: laborHoursNum,
        partsAmount: partsAmountNum
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
