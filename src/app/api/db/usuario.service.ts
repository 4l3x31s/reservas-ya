import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from './../../models/mdlUsuario';
import { UtilService } from '../util.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public afDB: AngularFireDatabase,
    public utilService: UtilService
  ) { }

  crearCliente(mdlCliente: Usuario): Promise<any> {
    if (!mdlCliente.id) {
     mdlCliente.id = Date.now();
    }
    if (!mdlCliente.estado) {
      mdlCliente.estado = true;
    }
    return this.afDB.database.ref('usuario/' + mdlCliente.id).set(this.utilService.serializar(mdlCliente));
 }
 actualzarCliente() {
   
 }
}
