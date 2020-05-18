import { Component, OnInit } from '@angular/core';
import { DataService } from '../../api/data.service';
import { Sucursales } from 'src/app/models/mdlSucursales';
import { NavController } from '@ionic/angular';
import { SucursalService } from '../../api/db/sucursal.service';

@Component({
  selector: 'app-lis-sucursales',
  templateUrl: './lis-sucursales.page.html',
  styleUrls: ['./lis-sucursales.page.scss'],
})
export class LisSucursalesPage implements OnInit {
  titulo = 'Sucursales';
  lstSucursales: Array<Sucursales> = [];
  idEmpresa: number;
  constructor(
    public data: DataService,
    public navController: NavController,
    public sucursalService: SucursalService
  ) {
    this.idEmpresa = data.get().idEmpresa;
    this.sucursalService.listaSucursalesPorEmpresa(this.idEmpresa)
    .subscribe(data => {
      this.lstSucursales = data;
    })
  }
  ngOnInit() {
    
  }
  irSucursal(sucursal: Sucursales) {
    this.data.set(sucursal);
    this.navController.navigateForward(['registro-sucursal']);
  }
  irRegSucursal() {
    
    this.data.set({idEmpresa: this.lstSucursales[0].idEmpresa});
    this.navController.navigateForward(['registro-sucursal']);
  }

}
