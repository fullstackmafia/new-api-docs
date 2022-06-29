import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperToolsComponent } from './developer-tools.component';

const routes: Routes = [
    {
        path: '',
        component: DeveloperToolsComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
                data: {
                    title: 'Overview - Developer Tools | Reloadly Developer Documentation',
                    seoTitle: 'Overview - Developer Tools | Reloadly Developer Documentation',
                    description: 'Developer Tools overview for developers using reloadly.',
                    keywords: 'Integration options, guides and references, API reference, Articles, Tutorials',
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
export class DeveloperToolsRoutingModule { }
