import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable()
export class BookServiceService {

  private books:Book[];

  constructor(private networkService:NetworkService) {}
}
