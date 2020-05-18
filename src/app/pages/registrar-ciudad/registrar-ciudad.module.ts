import { environment } from './../../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCiudadPageRoutingModule } from './registrar-ciudad-routing.module';

import { RegistrarCiudadPage } from './registrar-ciudad.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCiudadPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarCiudadPage]
})
export class RegistrarCiudadPageModule {}
