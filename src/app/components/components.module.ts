import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PrintErrorComponent } from './print-error/print-error.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PrintErrorComponent,
    HeaderBackComponent,
    SubirImagenComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PrintErrorComponent,
    HeaderBackComponent,
    SubirImagenComponent
  ]
})
export class ComponentsModule { }
