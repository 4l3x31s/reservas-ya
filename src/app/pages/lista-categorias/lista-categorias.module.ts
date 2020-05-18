import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCategoriasPageRoutingModule } from './lista-categorias-routing.module';

import { ListaCategoriasPage } from './lista-categorias.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCategoriasPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ListaCategoriasPage]
})
export class ListaCategoriasPageModule {}
