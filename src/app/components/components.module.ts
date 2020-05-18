import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PrintErrorComponent } from './print-error/print-error.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';
import { UploadCompressComponent } from './upload-compress/upload-compress.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PrintErrorComponent,
    HeaderBackComponent,
    SubirImagenComponent,
    UploadCompressComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    PrintErrorComponent,
    HeaderBackComponent,
    SubirImagenComponent,
    UploadCompressComponent
  ]
})
export class ComponentsModule { }
