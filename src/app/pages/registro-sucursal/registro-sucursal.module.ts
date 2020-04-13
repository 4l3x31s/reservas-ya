import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroSucursalPageRoutingModule } from './registro-sucursal-routing.module';

import { RegistroSucursalPage } from './registro-sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroSucursalPageRoutingModule
  ],
  declarations: [RegistroSucursalPage]
})
export class RegistroSucursalPageModule {}
