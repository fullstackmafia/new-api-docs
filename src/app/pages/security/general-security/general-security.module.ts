import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralSecurityRoutingModule } from './general-security-routing.module';
import { GeneralSecurityComponent } from './general-security.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { QuickstartBoxModule } from 'src/app/components/quickstart-box/quickstart-box.module';


@NgModule({
    declarations: [
        GeneralSecurityComponent
    ],
    imports: [
        CommonModule,
        GeneralSecurityRoutingModule,
        QuickstartBoxModule,
        FooterModule,
    ]
})
export class GeneralSecurityModule { }
