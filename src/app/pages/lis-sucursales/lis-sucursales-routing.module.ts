import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisSucursalesPage } from './lis-sucursales.page';

const routes: Routes = [
  {
    path: '',
    component: LisSucursalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisSucursalesPageRoutingModule {}
