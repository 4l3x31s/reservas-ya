import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../models/mdlCategorias';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CategoriasService } from 'src/app/api/db/categorias.service';
import { ToastController, NavController } from '@ionic/angular';
import { LoadingService } from '../../api/loading.service';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.page.html',
  styleUrls: ['./registrar-categoria.page.scss'],
})
export class RegistrarCategoriaPage implements OnInit {
  titulo = 'Registro Categorias';
  form: FormGroup;
  categoria: Categorias = {estado: false} as Categorias;
  constructor(
    public fb: FormBuilder,
    public categoriaService: CategoriasService,
    public toastController: ToastController,
    public navController: NavController,
    public loadingService: LoadingService
    ) { }

  ngOnInit() {
    this.iniciarValidaciones();
  }
  iniciarValidaciones() {
    this.form = this.fb.group({
      vCategoria: ['', [
        Validators.required,
      ]]
    });
  }
  get f(): any { return this.form.controls; }
  registrar() {
    console.log('registro');
    console.log(this.form);
    this.loadingService.present();
    if (!this.form.invalid) {
      this.categoriaService.crearCategoria(this.categoria)
      .then(data => {
        this.loadingService.dismiss();
        this.presentToast('La categoria fue registrada correctamente.');
        this.navController.navigateBack(['lista-categorias']);
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
