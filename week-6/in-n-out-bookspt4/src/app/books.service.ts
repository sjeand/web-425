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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  // Book information to fill out table
  constructor() {
    this.books = [
      {
        isbn: '123456789',
        title: 'Llama Lama Red Pajamas',
        description: 'Llama Llama navigates bedtime and sleeping in his own bed',
        numOfPages: 16,
        authors: ['Anna Dewdney']
      },
      {
        isbn: '123456788',
        title: 'Goodnight Construction Site',
        description: 'Help tuck the big rigs in for bed after a long day of working on the lot',
        numOfPages: 10,
        authors: ['Sherri Duskey Rinker']
      },
      {
        isbn: '123456787',
        title: 'Hop on Pop',
        description: 'A tongue twister, rhyming book',
        numOfPages: 22,
        authors: ['Dr. Seuss']
      },
      {
        isbn: '123456786',
        title: 'The Three Bears',
        description: 'Classic story of Goldilocks and the Three Bears',
        numOfPages: 16,
        authors: ['F. Rojankosvsky']
      },
      {
        isbn: '123456785',
        title: 'Pout Pout Fish',
        description: 'The Story of the Pout Pout fish and his dreary life that suddenly changes.',
        numOfPages: 20,
        authors: ['Deborah Diesen']
      },
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
