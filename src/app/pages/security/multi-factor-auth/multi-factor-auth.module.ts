import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiFactorAuthRoutingModule } from './multi-factor-auth-routing.module';
import { MultiFactorAuthComponent } from './multi-factor-auth.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { QuickstartBoxModule } from 'src/app/components/quickstart-box/quickstart-box.module';


@NgModule({
    declarations: [
        MultiFactorAuthComponent
    ],
    imports: [
        CommonModule,
        MultiFactorAuthRoutingModule,
        QuickstartBoxModule,
        FooterModule,
    ]
})
export class MultiFactorAuthModule { }
