import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
  inputs: ['news']
})
export class NewsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
