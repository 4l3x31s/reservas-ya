import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarReservaPage } from './confirmar-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarReservaPageRoutingModule {}
