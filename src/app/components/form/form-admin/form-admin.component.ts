import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.scss']
})
export class FormAdminComponent {
  form:FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor( private fb: FormBuilder, private router: Router) {}

 async login() {

    ///// если логин и пароль есть в LocalStorage, то переходи на страницу всех постов
    let username = this.form.value.username;
    let password = this.form.value.password;
   
   await this.router.navigate(['/posts'])
    alert (username + password)
  }

}
