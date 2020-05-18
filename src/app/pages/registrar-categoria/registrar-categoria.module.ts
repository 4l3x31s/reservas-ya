import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCategoriaPageRoutingModule } from './registrar-categoria-routing.module';

import { RegistrarCategoriaPage } from './registrar-categoria.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCategoriaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarCategoriaPage]
})
export class RegistrarCategoriaPageModule {}
