import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UtilService } from '../util.service';
import { Ciudades } from 'src/app/models/mdlCiudades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  rootRef: firebase.database.Reference;
  constructor(
    public afDB: AngularFireDatabase,
    public utilService: UtilService
  ) { this.rootRef = this.afDB.database.ref();}
  crearCiudad(mldCiudades: Ciudades): Promise<any> {
    if (!mldCiudades.id) {
      mldCiudades.id = Date.now();
    }
    return this.afDB.database.ref('ciudades/' + mldCiudades.id).set(this.utilService.serializar(mldCiudades));
  }
  listaCiudades() {
    return this.afDB.list<Ciudades>('ciudades').valueChanges();
  }
  getCiudad(id: number): Observable<Ciudades> {
    return this.afDB.object<Ciudades>('ciudades/' + id).valueChanges();
  }
}
