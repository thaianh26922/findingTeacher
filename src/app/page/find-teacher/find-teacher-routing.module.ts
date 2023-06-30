import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindTeacherPage } from './find-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: FindTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindTeacherPageRoutingModule {}
