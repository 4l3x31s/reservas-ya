import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/mdlUsuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  public titulo = 'Registro';
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
