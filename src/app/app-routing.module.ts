import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {BookDetailsComponent} from './book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'details',
    component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
