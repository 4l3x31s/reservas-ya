import { Component, OnInit } from '@angular/core';
import { SlidesAnimationsService } from '../../api/slides-animations.service';
import { CiudadesService } from '../../api/db/ciudades.service';
import { Ciudades } from 'src/app/models/mdlCiudades';
import { LoadingService } from '../../api/loading.service';
import { EnumCiudades } from '../../utils/ciudades-util';
import { DataService } from '../../api/data.service';
import { AlertService } from '../../api/alert.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  titulo = 'Inicio';
  slideOpts: any = this.animacionServices.coverflow();
  public lstCiudades: Array<Ciudades> = [];
  constructor(
    public animacionServices: SlidesAnimationsService,
    public ciudadesService: CiudadesService,
    public loadingService: LoadingService,
    public navController: NavController,
    public data: DataService,
    private alertService: AlertService
    ) {

    }
  ngOnInit() {
    this.loadingService.present();
    this.ciudadesService.listaCiudades()
    .subscribe(data => {
      this.loadingService.dismiss();
      this.lstCiudades = data;
      for (let i = 0; i< this.lstCiudades.length; i++) {
        if (this.lstCiudades[i].ciudad === 'LA PAZ') {
          this.lstCiudades[i].imagen = EnumCiudades.laPaz;
        }
        if (this.lstCiudades[i].ciudad === 'COCHABAMBA') {
          this.lstCiudades[i].imagen = EnumCiudades.cochabamba;
        }
        if (this.lstCiudades[i].ciudad === 'SANTA CRUZ') {
          this.lstCiudades[i].imagen = EnumCiudades.santaCruz;
        }
        if (this.lstCiudades[i].ciudad === 'ORURO') {
          this.lstCiudades[i].imagen = EnumCiudades.oruro;
        }
        if (this.lstCiudades[i].ciudad === 'POTOSI') {
          this.lstCiudades[i].imagen = EnumCiudades.potosi;
        }
        if (this.lstCiudades[i].ciudad === 'CHUQUISACA') {
          this.lstCiudades[i].imagen = EnumCiudades.chuquisaca;
        }
        if (this.lstCiudades[i].ciudad === 'TARIJA') {
          this.lstCiudades[i].imagen = EnumCiudades.tarija;
        }
        if (this.lstCiudades[i].ciudad === 'PANDO') {
          this.lstCiudades[i].imagen = EnumCiudades.pando;
        }
        if (this.lstCiudades[i].ciudad === 'BENI') {
          this.lstCiudades[i].imagen = EnumCiudades.beni;
        }
      }
    }, err => {
      this.loadingService.dismiss();
      console.log(err);
      this.alertService.present('Error', 'No se pudo encontrar ninguna ciudad disponible en estos momentos, disculpe las molestias.')
    });
  }
  irRestaurantes(ciudad: Ciudades) {
    this.data.set(ciudad.ciudad);
    console.log(ciudad);
    this.navController.navigateBack(['lista-sucursales-us']);
  }
}
