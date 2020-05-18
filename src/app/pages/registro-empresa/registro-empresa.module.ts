import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEmpresaPageRoutingModule } from './registro-empresa-routing.module';

import { RegistroEmpresaPage } from './registro-empresa.page';
import { ComponentsModule } from '../../components/components.module';
import { MapasPageModule } from '../comun/mapas/mapas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEmpresaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    MapasPageModule
  ],
  declarations: [RegistroEmpresaPage]
})
export class RegistroEmpresaPageModule {}
