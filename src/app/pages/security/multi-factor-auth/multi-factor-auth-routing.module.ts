import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiFactorAuthComponent } from './multi-factor-auth.component';

const routes: Routes = [{ path: '', component: MultiFactorAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiFactorAuthRoutingModule { }
