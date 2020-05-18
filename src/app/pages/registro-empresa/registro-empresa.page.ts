import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from '../../models/mdlUsuario';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Empresa } from '../../models/mdlEmpresa';
import { Sucursales } from '../../models/mdlSucursales';
import { CategoriasService } from '../../api/db/categorias.service';
import { CiudadesService } from '../../api/db/ciudades.service';
import { Categorias } from 'src/app/models/mdlCategorias';
import { Ciudades } from 'src/app/models/mdlCiudades';
import { MapasPage } from '../comun/mapas/mapas.page';
import { UsuarioService } from '../../api/db/usuario.service';
import { EmpresaService } from '../../api/db/empresa.service';
import { SucursalService } from '../../api/db/sucursal.service';
import { LoadingService } from '../../api/loading.service';
import { ToastService } from '../../api/toast.service';
import { AlertService } from '../../api/alert.service';


@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.page.html',
  styleUrls: ['./registro-empresa.page.scss'],
})
export class RegistroEmpresaPage implements OnInit {
  public titulo = 'Registro Negocios';
  form: FormGroup;
  usuarios: Usuario = {} as Usuario;
  empresa: Empresa = {} as Empresa;
  sucursal: Sucursales = {} as Sucursales;
  strUbicacion: string;
  strCategoria: string;
  lstCategorias: Array<Categorias> = [];
  lstCiudades: Array<Ciudades> = [];
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public categoriasService: CategoriasService,
    public ciudadesService: CiudadesService,
    public modalController: ModalController,
    public usuarioService: UsuarioService,
    public empresaService: EmpresaService,
    public sucursalService: SucursalService,
    public loadingService: LoadingService,
    public toastCtrl: ToastService,
    public alertCtrl: AlertService,
    public navController: NavController
    ) { }

  ngOnInit() {
    this.listarCategorias();
    this.iniciarValidaciones();
  }
  listarCategorias() {
    this.categoriasService.listaCategorias()
    .subscribe(data => {
      this.lstCategorias = data;
    });
  }
  listarCiudades() {
    this.ciudadesService.listaCiudades()
    .subscribe(data => {
      this.lstCiudades = data;
    });
  }
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

  iniciarValidaciones() {
    this.form = this.fb.group({
      vNombre: ['', [
        Validators.required,
      ]],
      vEmail: ['', [
        Validators.required,
        Validators.email
      ]],
      vFecha: ['', [
        Validators.required,
        // Validators.pattern(`^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$`)
      ]],
      vCelular: ['', [
        Validators.required,
      ]],
      vCiudad: ['', [
        Validators.required,
      ]],
      vPais: ['', [
        Validators.required,
      ]],
      vNombreNeg: ['', [
        Validators.required
      ]],
      vTelefNeg: ['', [
        Validators.required
      ]],
      vCelNeg: ['', [
        Validators.required
      ]],
      vDireccNeg: ['', [
        Validators.required
      ]],
      vUbicNeg: ['', [
        Validators.required
      ]],
      vDescrNeg: ['', [
        Validators.required
      ]],
      vCategNeg: ['', [
        Validators.required
      ]],
      vPassword: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      vConfirmPass: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    }, {
      validator: this.mustMatch('vPassword', 'vConfirmPass')
    });
  }
  get f(): any { return this.form.controls; }
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
              // return if another validator has already found an error on the matchingControl
              return;
          }

          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: 'Las contraseñas no coinciden' });
          } else {
              matchingControl.setErrors(null);
          }
      };
  }
  registrar() {
    console.log('Registrado');
    if (!this.form.invalid) {
      this.loadingService.present();
      this.usuarioService.crearUsuario(this.usuarios)
      .then(data => {
        this.empresa.email = this.usuarios.email.trim();
        this.empresa.tipo = this.strCategoria;
        this.empresaService.crearEmpresa(this.empresa)
        .then(data => {
          this.sucursal.celular = this.empresa.celular;
          this.sucursal.direccion = this.empresa.direccion;
          this.sucursal.idEmpresa = this.empresa.id;
          this.sucursal.nombre = this.empresa.nombre;
          this.sucursal.nombreEmpresa = this.empresa.nombre;
          this.sucursal.telefono = this.empresa.telefono;
          this.sucursal.ciudad = this.usuarios.ciudad;
          this.sucursal.pais = this.usuarios.pais;
          this.sucursal.categoria = this.strCategoria;
          this.sucursalService.crearSucursal(this.sucursal)
          .then(data => {
            this.loadingService.dismiss();
            this.toastCtrl.presentToast('La empresa fue registrada correctamente.');
            this.navController.navigateBack(['login']);
          }).catch(err => {
            this.loadingService.dismiss();
            this.toastCtrl.presentToast('Hubo un error al registrar los datos.');
            // this.route.navigate(['login']);
          })
        }).catch(err => {
          this.loadingService.dismiss();
          this.toastCtrl.presentToast('Hubo un error al registrar los datos.');
          // this.route.navigate(['login']);
        })
      }).catch(err => {
        this.loadingService.dismiss();
        this.toastCtrl.presentToast('Hubo un error al registrar los datos.');
        // this.route.navigate(['login']);
      })
    }
  }

}
