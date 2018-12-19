import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {

  book:Book
  private bookSubscription:Subscription;

  constructor(private bookService:BookService, private route:ActivatedRoute)  { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.bookSubscription = this.bookService.getBook(id).subscribe((book) => {
        this.book = book;
    })
  }

  ngOnDestroy () {
    this.bookSubscription.unsubscribe();
  }

}
