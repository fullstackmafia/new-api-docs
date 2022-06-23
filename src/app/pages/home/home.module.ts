import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from 'src/app/components/footer/footer.module';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FooterModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ])
    ],
})
export class HomeModule { }
