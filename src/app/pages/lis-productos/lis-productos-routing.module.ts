import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisProductosPage } from './lis-productos.page';

const routes: Routes = [
  {
    path: '',
    component: LisProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisProductosPageRoutingModule {}
