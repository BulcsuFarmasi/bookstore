import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Book } from '../models/book';
import { Query } from '../models/query';
import { NetworkService } from './network.service';

@Injectable()
export class BookServiceService {

  constructor(private networkService:NetworkService) {}

  getBooksBySearchTerm (searchTerm):Observable<Book[]> {
      const query:Query = { key: 'q', value: searchTerm };

      return this.networkService.get('', [query]).pipe(
        map((response:any) => {
            let books:Book[] = [];

            response.items.map((item:any) => {
              let book:Book = {
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                description: item.description,
                coverImage: item.imageLinks.thumbnail
              }
              books.push(book)
            })

            return books;
        })
      )
  }
}
