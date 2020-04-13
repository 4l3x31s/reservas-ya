import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisReservasSolicitadasPage } from './lis-reservas-solicitadas.page';

const routes: Routes = [
  {
    path: '',
    component: LisReservasSolicitadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisReservasSolicitadasPageRoutingModule {}
