import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Book } from '../models/book';
import { Query } from '../models/query';
import { NetworkService } from './network.service';

@Injectable()
export class BookService {

  constructor(private networkService:NetworkService) {}

  getBook (id:string):Observable<Book> {
      return this.networkService.get(id, [])
      .pipe(map(this.transformBook));
  }

  getBooksBySearchTerm (searchTerm):Observable<Book[]> {
      const query:Query = { key: 'q', value: searchTerm };

      return this.networkService.get('', [query])
      .pipe(
        map((response:any) => {
            const books:Book[] = response.items.map(this.transformBook)
            return books;
        })
      )
  }

  private transformBook (item:any) {
    const book:Book = {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.description,
      coverImage: item.imageLinks.thumbnail
    }

    return book;
  }

}
