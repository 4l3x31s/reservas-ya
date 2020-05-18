import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCiudadesPage } from './lista-ciudades.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCiudadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCiudadesPageRoutingModule {}
