import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilityComponent } from './utility.component';

const routes: Routes = [
    {
        path: '',
        component: UtilityComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
                data: {
                    title: 'Overview - Utility Payments | Reloadly Developer Documentation',
                    seoTitle: 'Overview - Utility Payments | Reloadly Developer Documentation',
                    description: 'Utility Payments overview for developers using reloadly.',
                    keywords: 'Utility Payments API, Make utility payment, payment providers',
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
export class UtilityRoutingModule { }
