import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss']
})
export class PageIndexComponent {

  @Input()
  title = 'title';
  constructor() {}

}
