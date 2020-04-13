import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroSucursalPage } from './registro-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroSucursalPageRoutingModule {}
