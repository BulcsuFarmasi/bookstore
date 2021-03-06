import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BooksComponent } from './components/books/books.component';
import { BookFilterComponent } from './components/book-filter/book-filter.component';
import { BookComponent } from './components/book/book.component';
import { BookRoutingModule } from './modules/book-routing/book-routing.module';
import { BookService } from 'src/app/services/book.service';
import { NetworkService } from 'src/app/services/network.service';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [BooksComponent, BookFilterComponent, BookComponent, LoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BookRoutingModule
  ],
  providers: [ BookService, CartService, NetworkService, StorageService ],
  exports: [BooksComponent, BookFilterComponent, BookComponent]
})
export class BookModule { }
