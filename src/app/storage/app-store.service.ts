import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  public id_post: number = 0;
  public isLogin: boolean = false;

  constructor() { 
  }

  setIdPost(id_post: number){
    this.id_post = id_post;
  }
  getIdPost(){
    return this.id_post;
  }

  setisLogin(isLogin: boolean){
    this.isLogin = isLogin;
  }
  getisLogin(){
    return this.isLogin;
  }
}
