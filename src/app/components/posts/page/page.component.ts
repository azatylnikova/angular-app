import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Injectable, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class PageComponent {
  $isId = new EventEmitter()
  @Output() testVariable  = new EventEmitter<string>();

  userList: any;

  constructor(private httpClient : HttpClient, private router: Router) {

    this.userList=[]
  }
   
  ngOnInit(): void {
  this.getUserList()
  }

  getUserList(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((result: any) => 
    {
      this.userList = result;
    })
  }

  async handleOpenPage(id:any) {
    
    alert(id);
    this.testVariable.emit(id)

   await this.router.navigate(['/postsID'])
  }

}
