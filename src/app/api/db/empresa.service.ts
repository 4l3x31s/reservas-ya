import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UtilService } from '../util.service';
import { Empresa } from 'src/app/models/mdlEmpresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  rootRef: firebase.database.Reference;
  constructor(
    public afDB: AngularFireDatabase,
    public utilService: UtilService
  ) { this.rootRef = this.afDB.database.ref();}
  crearEmpresa(mldEmpresa: Empresa): Promise<any> {
    if (!mldEmpresa.id) {
      mldEmpresa.id = Date.now();
    }
    if (!mldEmpresa.estado) {
      mldEmpresa.estado = true;
    }
    return this.afDB.database.ref('empresa/' + mldEmpresa.id).set(this.utilService.serializar(mldEmpresa));
  }
  listaEmpresa() {
    return this.afDB.list<Empresa>('empresa').valueChanges();
  }
  getEmpresa(id: number): Observable<Empresa> {
    return this.afDB.object<Empresa>('empresa/' + id).valueChanges();
  }
}
