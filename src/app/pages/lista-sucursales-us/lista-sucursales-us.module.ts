import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSucursalesUsPageRoutingModule } from './lista-sucursales-us-routing.module';

import { ListaSucursalesUsPage } from './lista-sucursales-us.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSucursalesUsPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListaSucursalesUsPage]
})
export class ListaSucursalesUsPageModule {}
