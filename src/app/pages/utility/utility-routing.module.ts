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
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
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
