import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {

  book:Book;
  error:boolean;
  loading:boolean;
  addedMessage:boolean;
  alreadyAddedMessage:boolean;
  private bookSubscription:Subscription;

  constructor(private bookService:BookService, private route:ActivatedRoute, private cartService:CartService)  { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    
    this.bookSubscription = this.bookService.getBook(id).subscribe(
      (book) => {
        this.loading = false;
        this.book = book;
      },
      () => {
        this.loading = false;
        this.error = true;
      })
  }

  ngOnDestroy () {
    this.bookSubscription.unsubscribe();
  }

  addToCart () {
    try {
      this.cartService.addToCart(this.book);
      this.addedMessage = true;
      this.dismissAddedMessage();
    } catch (e) {
      this.alreadyAddedMessage = true;
      this.dismissAlreadyAddedMessage()    
    }
  }

  private dismissAddedMessage () {
    setTimeout(() => {
      this.addedMessage = false;
    }, 5000)
  }

  private dismissAlreadyAddedMessage () {
    setTimeout(() => {
      this.alreadyAddedMessage = false;
    }, 5000)
  }

}
