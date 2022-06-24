import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperToolsRoutingModule } from './developer-tools-routing.module';
import { DeveloperToolsComponent } from './developer-tools.component';


@NgModule({
  declarations: [
    DeveloperToolsComponent
  ],
  imports: [
    CommonModule,
    DeveloperToolsRoutingModule
  ]
})
export class DeveloperToolsModule { }
