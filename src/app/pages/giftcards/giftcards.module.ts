import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftcardsRoutingModule } from './giftcards-routing.module';
import { GiftcardsComponent } from './giftcards.component';


@NgModule({
  declarations: [
    GiftcardsComponent
  ],
  imports: [
    CommonModule,
    GiftcardsRoutingModule
  ]
})
export class GiftcardsModule { }
