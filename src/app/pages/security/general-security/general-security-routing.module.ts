import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSecurityComponent } from './general-security.component';

const routes: Routes = [{ path: '', component: GeneralSecurityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralSecurityRoutingModule { }
