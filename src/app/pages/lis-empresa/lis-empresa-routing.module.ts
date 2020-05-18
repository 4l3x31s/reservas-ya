import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisEmpresaPage } from './lis-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: LisEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisEmpresaPageRoutingModule {}
