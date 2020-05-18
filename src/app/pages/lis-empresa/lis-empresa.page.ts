import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/mdlEmpresa';
import { EmpresaService } from '../../api/db/empresa.service';
import { LoadingService } from '../../api/loading.service';
import { AlertService } from '../../api/alert.service';
import { ToastService } from '../../api/toast.service';
import { NavController } from '@ionic/angular';
import { SucursalService } from 'src/app/api/db/sucursal.service';
import { Sucursales } from 'src/app/models/mdlSucursales';
import { DataService } from '../../api/data.service';

@Component({
  selector: 'app-lis-empresa',
  templateUrl: './lis-empresa.page.html',
  styleUrls: ['./lis-empresa.page.scss'],
})
export class LisEmpresaPage implements OnInit {
  lstEmpresa: Array<Empresa> = [];
  lstSucursales: Array<Sucursales> = [];
  titulo = 'Empresas';
  constructor(
    public empresaService: EmpresaService,
    public loadingService: LoadingService,
    public alertService: AlertService,
    public toastService: ToastService,
    public navController: NavController,
    public sucursalesService: SucursalService,
    public data: DataService
  ) { }

  ngOnInit() {
    this.listarEmpresa();
  }
  listarEmpresa() {
    this.empresaService.listaEmpresa()
      .subscribe(data => {
        this.lstEmpresa = data;
      }, error => {
        this.alertService.present('Error', 'Error al cargar los datos');
        //TODO: nav controller
      })
  }
  irSucursal(empresa: Empresa) {
    this.data.set({idEmpresa: empresa.id});
    this.navController.navigateForward(['lis-sucursales']);
    
  }
  
}
