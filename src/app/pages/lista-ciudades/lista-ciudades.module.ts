import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCiudadesPageRoutingModule } from './lista-ciudades-routing.module';

import { ListaCiudadesPage } from './lista-ciudades.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCiudadesPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ListaCiudadesPage]
})
export class ListaCiudadesPageModule {}
