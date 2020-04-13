import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisReservasSolicitadasPageRoutingModule } from './lis-reservas-solicitadas-routing.module';

import { LisReservasSolicitadasPage } from './lis-reservas-solicitadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisReservasSolicitadasPageRoutingModule
  ],
  declarations: [LisReservasSolicitadasPage]
})
export class LisReservasSolicitadasPageModule {}
