import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { FileResult, ImageCompressorService } from 'src/app/api/image-compressor.service';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AlertService } from '../../api/alert.service';
import { LoadingService } from '../../api/loading.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-upload-compress',
  templateUrl: './upload-compress.component.html',
  styleUrls: ['./upload-compress.component.scss'],
})
export class UploadCompressComponent implements OnInit, OnDestroy {
  compressedImages: Observable<FileResult[]>;
  @Input()
  titulo: string;

  @Input()
  mostrarBotones: boolean;

  @Input()
  urlImagen: string;

  cerrarForEach: any;
  urlImagenFirebase: string;
  cargandoImagen: boolean = false;
  subioImagen = false;
  constructor(
    private ics: ImageCompressorService ,
    private sanitizer : DomSanitizer,
    private storage: AngularFireStorage,
    public alertService: AlertService,
    public loadingService: LoadingService,
    private alertController: AlertController
    ) {
    this.compressedImages = this.ics.getCompressedFiles();
  }
  ngOnDestroy(): void {
    this.compressedImages = undefined;
  }

  async ngOnInit() {
    this.cargandoImagen = true;
    
    await this.storage.ref(this.urlImagen).getDownloadURL().toPromise()
    .then(ruta => {
      this.urlImagenFirebase = ruta;
      this.cargandoImagen = false;
    })
    .catch(error => {
      this.cargandoImagen = false;
    });
  }
  async eliminarImagen() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Esta segura de eliminar la imagen?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Continuar',
          cssClass: 'primary',
          handler: () => {
            this.loadingService.present()
              .then(() => {
                this.storage.ref(this.urlImagen).delete()
                  .subscribe(() => {
                    this.urlImagenFirebase = undefined;
                    this.loadingService.dismiss();
                  });
              });
          }
        }
      ]
    });

    await alert.present();
  }
  async change(files) {
    console.log(files);
    this.ics.compress(files, 'someName', 0.3 , 0.3 , 'image/jpeg', 1);
    this.verImagen();
  }
  async verImagen() {
    return await this.compressedImages.forEach(element => {
      console.log('entrada')
      if(!this.subioImagen){
        console.log(element);
        let upload: AngularFireUploadTask;
        this.loadingService.present();
        //imagemin();
        const randomId = Math.random().toString(36).substring(2);
        upload = this.storage.upload(this.urlImagen, element[0].file);
        upload.then(() => {
          this.loadingService.dismiss();
          this.subioImagen = true;
          this.cargandoImagen = true;
          this.storage.ref(this.urlImagen).getDownloadURL()
            .subscribe(ruta => {
              this.subioImagen = true;
              this.cargandoImagen = false;
              this.urlImagenFirebase = ruta;
            }, error => {
              this.cargandoImagen = false;
            });
          this.alertService.present('Info', 'Imagen subida correctamente.');
        }).catch(e => {
          this.loadingService.dismiss();
          this.alertService.present('Error', 'Error al subir la imagen.');
        });
      }
    });
  }

  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
