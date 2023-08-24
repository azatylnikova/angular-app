import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.scss']
})
export class FormAdminComponent {
 
  
  expression = false; 
  isLogin = false;
  userList: any;
  title = '123123123';
  users: any


  
  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor( private fb: FormBuilder, private router: Router) {
    this.userList=[]
    this.users = []
  } /////////////////////// Жизненный цикл класса

 async login() {
  let user = {     // объект
    name: this.form.value.username,  // под ключом "name" сохраняется значение "Bob"
    password: this.form.value.password        // под ключом "age" сохраняется значение 50
  };
    ///// если логин и пароль есть в LocalStorage, то переходи на страницу всех постов
    let username = this.form.value.username;
    let password = this.form.value.password;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    

    if(!this.isLogin && localStorage.getItem('storedUsers')) { ////// 

 
      this.users = JSON.parse(localStorage.getItem('storedUsers')!)
        for( let key in this.users) {
            if(this.users[key].name === username && this.users[key].password === password ){
              await this.router.navigate(['/posts'])
            }
            else {
              console.log('Ничего не найдено')
            }
        }
        

    }
    else {
      this.userList.push(
        user
      )
      localStorage.setItem("storedUsers", JSON.stringify(this.userList));
    }
  }

  
}
