import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksComponent } from '../../components/books/books.component';
import { BookComponent } from '../../components/book/book.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'books', component: BooksComponent },
      { path: 'book/:id', component: BookComponent  }
    ])
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
