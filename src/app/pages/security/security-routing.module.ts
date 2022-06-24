import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';

const routes: Routes = [
    {
        path: '',
        component: SecurityComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
            },
            {
                path: 'general-security',
                loadChildren: () => import('./general-security/general-security.module').then(m => m.GeneralSecurityModule)
            },
            {
                path: 'multi-factor-authentication',
                loadChildren: () => import('./multi-factor-auth/multi-factor-auth.module').then(m => m.MultiFactorAuthModule)
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
export class SecurityRoutingModule { }
