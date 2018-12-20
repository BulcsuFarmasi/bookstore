import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

  books:Book[];
  booksSubscription:Subscription;
  error:boolean;
  searched:boolean
  
  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

  ngOnDestroy () {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
  }

  dismissError () {
    setTimeout(() => {
      this.error = false;
    }, 10000)
  }

  onSearchTermChange (searchTerm:string) {
    this.booksSubscription = this.bookService.getBooksBySearchTerm(searchTerm).subscribe(
      books => {
      this.books = books;
      this.searched = true;
    },
    () => {
      this.error = true
      this.dismissError();
    })
  }

}
