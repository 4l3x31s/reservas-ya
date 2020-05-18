import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LstRestaurantPage } from './lst-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: LstRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LstRestaurantPageRoutingModule {}
