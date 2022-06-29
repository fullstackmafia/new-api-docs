import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftcardsComponent } from './giftcards.component';

const routes: Routes = [
    {
        path: '',
        component: GiftcardsComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
                data: {
                    title: 'Overview - Gift Cards | Reloadly Developer Documentation',
                    seoTitle: 'Overview - Gift Cards | Reloadly Developer Documentation',
                    description: 'Gift Cards overview for developers using reloadly.',
                    keywords: 'Gift Cards API, Order gift card, Gift Cards promo, FX rate, promotions',
                }
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'overview'
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GiftcardsRoutingModule { }
