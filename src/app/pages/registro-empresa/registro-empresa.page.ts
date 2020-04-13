import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from '../../models/mdlUsuario';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.page.html',
  styleUrls: ['./registro-empresa.page.scss'],
})
export class RegistroEmpresaPage implements OnInit {
  public titulo = 'Registre Negocios';
  form: FormGroup;
  usuarios: Usuario = {} as Usuario;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.iniciarValidaciones();
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
  }

}
