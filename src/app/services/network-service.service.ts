import { HttpClient } from '@angular/common/http';

export class NetworkServiceService {
  
  private url = 'https://www.googleapis.com/books/v1/volumes/'
  
  constructor(private httpClient:HttpClient) {}

  get (urlPart:string) {
    return this.httpClient.get(this.url + urlPart);
  }
}
