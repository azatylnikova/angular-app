import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageComponent } from '../posts/page/page.component';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.scss']
})
export class PageIndexComponent {
  userList: any;

  @Input() testVariable: any;
  constructor(private httpClient : HttpClient , private pageComponent : PageComponent ) {
    this.userList=[]
  }
  ngOnInit(): void {
    this.getUserList()
    // console.log( this.testVariable, )
    }
  getUserList(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((result: any) => 
   
    {
      console.log(result, 'result')
      if (result) {
        this.userList.push(result);
      }
     
    })
    
   

  
  }

}
