import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { CategoriasService } from 'src/app/api/db/categorias.service';
import { SucursalService } from '../../api/db/sucursal.service';
import { LoadingService } from '../../api/loading.service';
import { ToastService } from '../../api/toast.service';
import { AlertService } from '../../api/alert.service';
import { Sucursales } from 'src/app/models/mdlSucursales';
import { MapasPage } from '../comun/mapas/mapas.page';
import { DataService } from '../../api/data.service';
import { Categorias } from 'src/app/models/mdlCategorias';

@Component({
  selector: 'app-registro-sucursal',
  templateUrl: './registro-sucursal.page.html',
  styleUrls: ['./registro-sucursal.page.scss'],
})
export class RegistroSucursalPage implements OnInit {
  public titulo = 'Registro Negocios';
  form: FormGroup;
  sucursal: Sucursales = {} as Sucursales;
  lstSucursales: Array<Sucursales> = [];
  strUbicacion: string;
  strCategoria: string;
  mostrarImagen: boolean = false;
  lstCategorias: Array<Categorias> = [];
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public categoriasService: CategoriasService,
    public modalController: ModalController,
    public sucursalService: SucursalService,
    public loadingService: LoadingService,
    public toastCtrl: ToastService,
    public alertCtrl: AlertService,
    public navController: NavController,
    public data: DataService,) {
      if(data.get()) {
        this.sucursal = data.get();
        this.strUbicacion = this.sucursal.lat + ', ' + this.sucursal.lng;
        this.mostrarImagen = true;
      }else {
        this.mostrarImagen = false;
        this.sucursal.estado = false;
      }
      
      console.log(this.sucursal);
    }

  ngOnInit() {
    this.iniciarValidaciones();
    this.listarCategorias();
  }
  listarCategorias() {
    this.categoriasService.listaCategorias().subscribe(data => {
      this.lstCategorias = data;
    });
  }
  iniciarValidaciones() {
    this.form = this.fb.group({
      vNombre: ['', [
        Validators.required,
      ]],
      vTelefono: ['', [
        Validators.required,
      ]],
      vCelular: ['', [
        Validators.required,
      ]],
      vDireccion: ['', [
        Validators.required
      ]],
      vCiudad: ['', [
        Validators.required,
      ]],
      vPais: ['', [
        Validators.required,
      ]],
      vUbicacion: ['', [
        Validators.required,
      ]],
      vEstado: ['', [
        Validators.required,
      ]],
      vCategoria: ['', [
        Validators.required,
      ]],
    });
  }
  get f(): any { return this.form.controls; }
  async abrirModal() {
    await this.modalController.create({
      component: MapasPage
    }).then( dato => {
      dato.present();
      dato.onDidDismiss().then(resultado => {
        if(resultado.data && resultado.data.lat){
          console.log(resultado);
          this.sucursal.lat = resultado.data.lat;
          this.sucursal.lng = resultado.data.lng;
          this.strUbicacion = this.sucursal.lat + ', ' + this.sucursal.lng;
          this.form.markAsDirty();
        }
      });
    });
  }
  registrar() {
    console.log(this.sucursal);
    this.sucursalService.crearSucursal(this.sucursal)
    .then(data => {
      this.data.set({idEmpresa: this.sucursal.idEmpresa});
      this.toastCtrl.presentToast('La sucursal se registró correctamente.');
      this.navController.navigateForward(['lis-sucursales']);

    })
    .catch(err => {
      console.log(err);
      this.alertCtrl.present('Error', 'La sucursal no se registró correctamente, disculpe las molestias.');
    })
  }
}
