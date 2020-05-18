import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LstRestaurantPageRoutingModule } from './lst-restaurant-routing.module';

import { LstRestaurantPage } from './lst-restaurant.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LstRestaurantPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [LstRestaurantPage]
})
export class LstRestaurantPageModule {}
