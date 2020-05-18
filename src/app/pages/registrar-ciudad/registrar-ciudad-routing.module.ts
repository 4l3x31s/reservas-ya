import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCiudadPage } from './registrar-ciudad.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCiudadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCiudadPageRoutingModule {}
