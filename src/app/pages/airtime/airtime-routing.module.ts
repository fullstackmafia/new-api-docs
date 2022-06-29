import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirtimeComponent } from './airtime.component';

const routes: Routes = [
    {
        path: '',
        component: AirtimeComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
                data: {
                    title: 'Overview - Airtime | Reloadly Developer Documentation',
                    seoTitle: 'Overview - Airtime | Reloadly Developer Documentation',
                    description: 'Airtime overview for developers using reloadly.',
                    keywords: 'Airtime API, Top up, Airtime promo, FX rate, promotions',
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
export class AirtimeRoutingModule { }
