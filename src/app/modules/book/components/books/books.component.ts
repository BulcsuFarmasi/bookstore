import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books:Book[]
  booksSubscription:Subscription
  
  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

  onSearchTermChange (searchTerm:string) {
    this.bookService.getBooksBySearchTerm(searchTerm).subscribe(books => {
      this.books = books;
    })
  }

}
