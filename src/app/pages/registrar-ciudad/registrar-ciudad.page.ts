import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Ciudades } from '../../models/mdlCiudades';
import { CiudadesService } from '../../api/db/ciudades.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-ciudad',
  templateUrl: './registrar-ciudad.page.html',
  styleUrls: ['./registrar-ciudad.page.scss'],
})
export class RegistrarCiudadPage implements OnInit {
  titulo = 'Registro Ciudades';
  form: FormGroup;
  ciudad: Ciudades = {estado: false} as Ciudades;
  constructor(
    public fb: FormBuilder,
    public ciudadService: CiudadesService,
    public toastController: ToastController,
    public navController: NavController
    ) { }

  ngOnInit() {
    this.iniciarValidaciones();
  }
  iniciarValidaciones() {
    this.form = this.fb.group({
      vPais: ['', [
        Validators.required,
      ]],
      vCiudad: ['', [
        Validators.required,
      ]]
    });
  }
  get f(): any { return this.form.controls; }
  registrar() {
    console.log('registro');
    console.log(this.form);
    if (!this.form.invalid) {
      this.ciudadService.crearCiudad(this.ciudad)
      .then(data => {
        this.presentToast('La ciudad fue registrada correctamente.');
        this.navController.navigateBack(['lista-ciudades']);
      });
    }
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
