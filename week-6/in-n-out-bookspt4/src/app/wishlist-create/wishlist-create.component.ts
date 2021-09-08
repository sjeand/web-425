/*
==========================================
  Title: in-n-out book
  Author: Professor Krasso
  Modifier: Sarah Jean Baptiste
  Date: 09/08/2021
  Description: part four
==========================================
*/

//import statements
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
//export class
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  item: IWishListItem;

  constructor() {
    this.item = {} as IWishListItem;
   }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishListItem;
  }
}
