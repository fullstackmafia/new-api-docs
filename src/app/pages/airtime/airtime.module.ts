import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirtimeRoutingModule } from './airtime-routing.module';
import { AirtimeComponent } from './airtime.component';


@NgModule({
  declarations: [
    AirtimeComponent
  ],
  imports: [
    CommonModule,
    AirtimeRoutingModule
  ]
})
export class AirtimeModule { }
