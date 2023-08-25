import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { PageComponent } from './components/page/page.component';
import { PageIndexComponent } from './components/page-index/page-index.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    FormAdminComponent,
    PageComponent,
    PageIndexComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf , MatButtonModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  @Input() testVariable: any;
  
 }
