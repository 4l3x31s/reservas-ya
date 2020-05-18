import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisEmpresaPageRoutingModule } from './lis-empresa-routing.module';

import { LisEmpresaPage } from './lis-empresa.page';
import { ComponentsModule } from '../../components/components.module';
import { MapasPageModule } from '../comun/mapas/mapas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisEmpresaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    MapasPageModule
  ],
  declarations: [LisEmpresaPage]
})
export class LisEmpresaPageModule {}
