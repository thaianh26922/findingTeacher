import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindTeacherPageRoutingModule } from './find-teacher-routing.module';

import { FindTeacherPage } from './find-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindTeacherPageRoutingModule
  ],
  declarations: [FindTeacherPage]
})
export class FindTeacherPageModule {}
