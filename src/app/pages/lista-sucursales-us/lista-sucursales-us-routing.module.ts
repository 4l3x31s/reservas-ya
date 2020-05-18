import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSucursalesUsPage } from './lista-sucursales-us.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSucursalesUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSucursalesUsPageRoutingModule {}
