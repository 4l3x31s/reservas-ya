import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AlertController } from '@ionic/angular';
import { LoadingService } from 'src/app/api/loading.service';
import { AlertService } from 'src/app/api/alert.service';
import * as imagemin from 'imagemin';


@Component({
  selector: 'subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.scss'],
})
export class SubirImagenComponent implements OnInit {

  @Input()
  titulo: string;

  @Input()
  urlImagen: string;

  urlImagenFirebase: string;
  cargandoImagen: boolean = false;

  constructor(
    private storage: AngularFireStorage,
    public loadingService: LoadingService,
    public alertService: AlertService,
    public alertController: AlertController
  ) { }

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

  async uploadImagen(event) {
    let upload: AngularFireUploadTask;
    this.loadingService.present()
      .then(() => {
        //imagemin();
        const randomId = Math.random().toString(36).substring(2);
        console.log('URL LOG');
        console.log(this.urlImagen);
        console.log('FILE');
        console.log(event.target.files[0]);
        upload = this.storage.upload(this.urlImagen, event.target.files[0]);
        upload.then(() => {
          this.cargandoImagen = true;
          this.storage.ref(this.urlImagen).getDownloadURL()
            .subscribe(ruta => {
              this.cargandoImagen = false;
              this.urlImagenFirebase = ruta;
            },error=>{
              this.cargandoImagen = false;
            });
          this.loadingService.dismiss();
          this.alertService.present('Info', 'Imagen subida correctamente.');
        }).catch(e => {
          this.loadingService.dismiss();
          this.alertService.present('Error', 'Error al subir la imagen.');
        });
      });
  }

}
