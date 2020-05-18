import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public titulo = 'Inicio';
  form: FormGroup;
  usuario: string = "asd@asd.com";
  pass: string = "asdasda";
  constructor(
    public menuCtrl: MenuController,
    public fb: FormBuilder,
    public navController: NavController
    ) { }


  ngOnInit() {
    this.menuCtrl.enable(false);
    this.iniciarValidaciones();
  }
  get f(): any { return this.form.controls; }
  ingresar() {
    this.menuCtrl.enable(true);
    console.log('Olvide contrasenia');
    this.navController.navigateForward('inicio');
  }
  irOlvidarContrasenia() {
    console.log('Olvide contrasenia');
  }
  irRegistroUsuarios() {
    console.log('Registro');
    this.navController.navigateForward('registro-usuario');
  }

  iniciarValidaciones() {
    this.form = this.fb.group({
      vEmail: ['', [
        Validators.required,
        Validators.email
      ]],
      vPass: ['', [
        Validators.required,
      ]],
    });
  }
}
