import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {
            title: 'Home | Reloadly Developer Documentation',
            seoTitle: 'Home | Reloadly Developer Documentation',
            description: 'Documentation for developers using reloadly.',
            keywords: 'Developers documentation, Mobile bill payment API, Bill pay API, Utility bill payment api provider, Gift cards',
        }
    },
    {
        path: 'airtime',
        loadChildren: () => import('./pages/airtime/airtime.module').then(m => m.AirtimeModule)
    },
    {
        path: 'gift-cards',
        loadChildren: () => import('./pages/giftcards/giftcards.module').then(m => m.GiftcardsModule)
    },
    {
        path: 'utility-payments',
        loadChildren: () => import('./pages/utility/utility.module').then(m => m.UtilityModule)
    },
    {
        path: 'developer-tools',
        loadChildren: () => import('./pages/developer-tools/developer-tools.module').then(m => m.DeveloperToolsModule)
    },
    {
        path: 'security',
        loadChildren: () => import('./pages/security/security.module').then(m => m.SecurityModule)
    },
    {
        path: 'all-products',
        loadChildren: () => import('./pages/all-products/all-products.module').then(m => m.AllProductsModule),
        data: {
            title: 'All Products | Reloadly Developer Documentation',
            seoTitle: 'All Products | Reloadly Developer Documentation',
            description: 'All reloadly products for developers using reloadly.',
            keywords: 'Mobile bill payment API, Bill pay API, Utility bill payment api provider, Gift cards',
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
