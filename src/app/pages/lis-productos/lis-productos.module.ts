import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisProductosPageRoutingModule } from './lis-productos-routing.module';

import { LisProductosPage } from './lis-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisProductosPageRoutingModule
  ],
  declarations: [LisProductosPage]
})
export class LisProductosPageModule {}
