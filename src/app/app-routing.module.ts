import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdminComponent } from './components/form/form-admin/form-admin.component';
import { PageComponent } from './components/posts/page/page.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
  path: 'login',
  component: FormAdminComponent
},
{
  path: 'posts',
  component: PageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
