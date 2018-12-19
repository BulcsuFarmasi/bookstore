import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.scss']
})
export class BookFilterComponent implements OnInit {

  searchTerm:string;
  @Output('searchtermchange') searchTermChange:EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  submit () {
    this.searchTermChange.emit(this.searchTerm);
  }

}
