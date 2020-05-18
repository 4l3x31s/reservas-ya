import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UtilService } from '../util.service';
import { Producto } from 'src/app/models/mdlProducto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  rootRef: firebase.database.Reference;
  constructor(
    public afDB: AngularFireDatabase,
    public utilService: UtilService
  ) { this.rootRef = this.afDB.database.ref();}
  crearProducto(mdlProducto: Producto): Promise<any> {
    if (!mdlProducto.id) {
      mdlProducto.id = Date.now();
    }
    if (!mdlProducto.estado) {
      mdlProducto.estado = true;
    }
    return this.afDB.database.ref('producto/' + mdlProducto.id).set(this.utilService.serializar(mdlProducto));
  }
  listaEmpresa() {
    return this.afDB.list<Producto>('producto').valueChanges();
  }
  getEmpresa(id: number): Observable<Producto> {
    return this.afDB.object<Producto>('producto/' + id).valueChanges();
  }
}
