import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UtilService } from '../util.service';
import { Sucursales } from 'src/app/models/mdlSucursales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  rootRef: firebase.database.Reference;
  constructor(
    public afDB: AngularFireDatabase,
    public utilService: UtilService
  ) { this.rootRef = this.afDB.database.ref();}
  crearSucursal(mdlSucursal: Sucursales): Promise<any> {
    if (!mdlSucursal.id) {
      mdlSucursal.id = Date.now();
    }
    if (!mdlSucursal.estado) {
      mdlSucursal.estado = true;
    }
    return this.afDB.database.ref('sucursal/' + mdlSucursal.id).set(this.utilService.serializar(mdlSucursal));
  }
  listaSucursales() {
    return this.afDB.list<Sucursales>('sucursal').valueChanges();
  }
  listaSucursalesPorEmpresa(id: number) {
    return this.afDB.list<Sucursales>('sucursal', ref => ref.orderByChild('idEmpresa').equalTo(id)).valueChanges();
  }
  listaSucursalesPorCiudad(ciudad: string) {
    return this.afDB.list<Sucursales>('sucursal', ref => ref.orderByChild('ciudad').equalTo(ciudad)).valueChanges();
  }
  getEmpresa(id: number): Observable<Sucursales> {
    return this.afDB.object<Sucursales>('sucursal/' + id).valueChanges();
  }
}
