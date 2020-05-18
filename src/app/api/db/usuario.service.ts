import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from './../../models/mdlUsuario';
import { UtilService } from '../util.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  rootRef: firebase.database.Reference;
  constructor(
    public afDB: AngularFireDatabase,
    public utilService: UtilService
  ) { this.rootRef = this.afDB.database.ref();}
  crearUsuario(mdlCliente: Usuario): Promise<any> {
    if (!mdlCliente.id) {
     mdlCliente.id = Date.now();
    }
    if (!mdlCliente.estado) {
      mdlCliente.estado = true;
    }
    return this.afDB.database.ref('usuario/' + mdlCliente.id).set(this.utilService.serializar(mdlCliente));
  }
  listaUsuarios() {
    return this.afDB.list<Usuario>('usuario').valueChanges();
  }
  getUsuario(id: number): Observable<Usuario> {
    return this.afDB.object<Usuario>('usuario/' + id).valueChanges();
  }
}
