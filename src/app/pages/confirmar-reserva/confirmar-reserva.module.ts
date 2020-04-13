import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarReservaPageRoutingModule } from './confirmar-reserva-routing.module';

import { ConfirmarReservaPage } from './confirmar-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarReservaPageRoutingModule
  ],
  declarations: [ConfirmarReservaPage]
})
export class ConfirmarReservaPageModule {}
