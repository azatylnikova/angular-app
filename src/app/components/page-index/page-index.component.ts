import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppStoreService } from '../../storage/app-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss'],
  template: ` <p>{{ testVariable }}</p> `,
})
export class PageIndexComponent {
  userList: any;

  constructor(
    private httpClient: HttpClient,
    private appstore: AppStoreService,
    private router: Router,) {
    this.userList = [];
  }
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.httpClient
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.appstore.getIdPost()}`
      )
      .subscribe((result: object) => {
        console.log(result)
        console.log(result, 'result');
        if (result) {
          this.userList.push(result);
        }
      });
  }

  async onBackOut(){
    await this.router.navigate(['/posts'])
  }
}
