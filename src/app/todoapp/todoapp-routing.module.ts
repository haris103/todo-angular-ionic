import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoappPage } from './todoapp.page';

const routes: Routes = [
  {
    path: '',
    component: TodoappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoappPageRoutingModule {}
