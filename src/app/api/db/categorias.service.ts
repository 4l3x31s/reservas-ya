import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UtilService } from '../util.service';
import { Categorias } from 'src/app/models/mdlCategorias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  rootRef: firebase.database.Reference;
  constructor(
    public afDB: AngularFireDatabase,
    public utilService: UtilService
  ) { this.rootRef = this.afDB.database.ref(); }

  crearCategoria(mldCategorias: Categorias): Promise<any> {
    if (!mldCategorias.id) {
      mldCategorias.id = Date.now();
    }
    return this.afDB.database.ref('categorias/' + mldCategorias.id).set(this.utilService.serializar(mldCategorias));
  }
  listaCategorias() {
    return this.afDB.list<Categorias>('categorias').valueChanges();
  }
  getCategoria(id: number): Observable<Categorias> {
    return this.afDB.object<Categorias>('categorias/' + id).valueChanges();
  }
}
