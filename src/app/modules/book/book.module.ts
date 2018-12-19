import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './components/books/books.component';
import { BookFilterComponent } from './components/book-filter/book-filter.component';

@NgModule({
  declarations: [BooksComponent, BookFilterComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookModule { }
