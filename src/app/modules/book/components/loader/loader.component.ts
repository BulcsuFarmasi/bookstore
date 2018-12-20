import { Component, OnInit } from '@angular/core';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  faSpinner = faSpinner;
  
  constructor() { }

  ngOnInit() {
  }

}
