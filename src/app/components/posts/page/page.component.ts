import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  
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
      console.log(result, "result")
    })
  }

  async handleOpenPage() {



   await this.router.navigate(['/postsID'])
  }

}
