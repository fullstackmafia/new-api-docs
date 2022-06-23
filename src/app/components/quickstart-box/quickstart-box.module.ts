import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickstartBoxComponent } from './quickstart-box.component';



@NgModule({
    declarations: [
        QuickstartBoxComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [QuickstartBoxComponent]
})
export class QuickstartBoxModule { }
