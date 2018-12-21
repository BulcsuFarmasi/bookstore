import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Query } from '../models/query';

@Injectable()
export class NetworkService {
  
  private url = 'https://www.googleapis.com/books/v1/volumes/'
  
  constructor(private httpClient:HttpClient) {}

  get (urlPart:string, queries:Query[]) {
    const query = this.constructQuery(queries);

    return this.httpClient.get(this.url + urlPart + query);
  }

  private constructQuery (queries:Query[]):string {
    let queryString = (queries.length > 0) ? '?' : '';

    queries.map((query, index) => {
        if(index !== 0) {
          queryString += '&';
        }
        
        queryString += query.key + '=' + query.value; 
      })

      return queryString;
  }
}
