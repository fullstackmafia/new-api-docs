import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { FooterModule } from 'src/app/components/footer/footer.module';


@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    FooterModule,

  ]
})
export class AllProductsModule { }
