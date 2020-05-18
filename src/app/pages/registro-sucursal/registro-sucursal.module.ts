import { MapasPageModule } from './../comun/mapas/mapas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSucursalPageRoutingModule } from './registro-sucursal-routing.module';

import { RegistroSucursalPage } from './registro-sucursal.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSucursalPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    MapasPageModule
  ],
  declarations: [RegistroSucursalPage]
})
export class RegistroSucursalPageModule {}
