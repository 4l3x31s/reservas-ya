import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { AlertService } from '../../../api/alert.service';
import { ToastService } from '../../../api/toast.service';

declare var google;

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit, AfterContentInit  {
  map;
  @ViewChild('mapElement',{static:true}) mapElement;

  latitud: number;
  longitud: number;

  constructor(
    private toastCtrl: ToastService,
    private modalController: ModalController,
    private alertController: AlertService
  ) { }

  ngOnInit() {
    
  }
  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -16.4970405, lng: -68.1323965},
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          streetViewControl: false,
          fullScreenControl: false,
          zoomControl: false,
          scaleControl: false,
          rotateControl: false,
          fullscreenControl: false,
          draggable: true,
        });
    let markers = [];
    markers.push(new google.maps.Marker({
      position: {lat: -16.4970405, lng: -68.1323965},
      map: this.map,
      title: 'Mueveme',
      draggable: false,
      animation: google.maps.Animation.DROP,
    }));
    this.map.addListener('center_changed', () => {
      markers[0].setPosition(this.map.getCenter());
      const objStr: string = JSON.stringify(markers[0].getPosition());
      console.log(objStr);
      const obj = JSON.parse(objStr);
      this.latitud = obj.lat;
      this.longitud = obj.lng;
    });
  }
  guardarLatLong() {
    if(this.latitud && this.longitud){
      this.toastCtrl.presentToast('Los datos fueron guardados exitosamente');
      this.modalController.dismiss({
        lat: this.latitud,
        lng: this.longitud
    });
    } else {
      this.alertController.present('Alerta', 'Debes seleccionar un punto antes de terminar.');
    }
  }

  cerrar(){
    this.modalController.dismiss();
  }
}
