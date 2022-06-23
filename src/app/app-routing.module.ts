import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
