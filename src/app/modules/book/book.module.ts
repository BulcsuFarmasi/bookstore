import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './components/books/books.component';
import { BookFilterComponent } from './components/book-filter/book-filter.component';
import { BookComponent } from './components/book/book.component';
import { BookRoutingModule } from './modules/book-routing/book-routing.module';

@NgModule({
  declarations: [BooksComponent, BookFilterComponent, BookComponent],
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule
  ]
})
export class BookModule { }
