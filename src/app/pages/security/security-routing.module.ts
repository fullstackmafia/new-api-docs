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
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
                data: {
                    title: 'Overview - Security | Reloadly Developer Documentation',
                    seoTitle: 'Overview - Security | Reloadly Developer Documentation',
                    description: 'Security overview for developers using reloadly.',
                    keywords: 'Integration security resources, multi-factor authentication',
                }
            },
            {
                path: 'general-security',
                loadChildren: () => import('./general-security/general-security.module').then(m => m.GeneralSecurityModule),
                data: {
                    title: 'General Security - Security | Reloadly Developer Documentation',
                    seoTitle: 'General Security - Security | Reloadly Developer Documentation',
                    description: 'General security for developers using reloadly.',
                    keywords: 'Integration security resources, multi-factor authentication',
                }
            },
            {
                path: 'multi-factor-authentication',
                loadChildren: () => import('./multi-factor-auth/multi-factor-auth.module').then(m => m.MultiFactorAuthModule),
                data: {
                    title: 'Multi-factor Authentication - Security | Reloadly Developer Documentation',
                    seoTitle: 'Multi-factor Authentication - Security | Reloadly Developer Documentation',
                    description: 'Multi-factor authentication for developers using reloadly.',
                    keywords: 'Integration security resources, multi-factor authentication, enabling 2FA, two-factor',
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
export class SecurityRoutingModule { }
