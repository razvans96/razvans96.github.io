import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCommentPageRoutingModule } from './add-comment-routing.module';

import { AddCommentPage } from './add-comment.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddCommentPageRoutingModule,
  ],
  declarations: [AddCommentPage],
})
export class AddCommentPageModule {}
