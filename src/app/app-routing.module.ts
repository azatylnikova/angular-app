import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdminComponent } from './components/form/form-admin/form-admin.component';
import { PageComponent } from './components/posts/page/page.component';
import { PageIndexComponent } from './components/page-index/page-index.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
  path: 'login',
  component: FormAdminComponent
},
{
  path: 'posts',
  component: PageComponent
},
{
  path: 'postsID',
  component: PageIndexComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
