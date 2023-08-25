import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';


import { AppStoreService } from '../../storage/app-store.service'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class PageComponent {
  userList: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private appstore: AppStoreService
  ) {
    this.userList = [];
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
 //if (this.appstore.getisLogin()) { 
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result: any) => {
        this.userList = result;
      });
 //}
  }

  async handleOpenPage(id: number) {
    this.appstore.setIdPost(id);

    await this.router.navigate([`/postsID/${this.appstore.getIdPost()}`]);
  }

  async onLogOut() {
    await this.router.navigate([`login`]);
    this.appstore.setisLogin(false)
  }


}
