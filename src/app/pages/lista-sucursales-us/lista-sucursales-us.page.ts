import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../api/db/sucursal.service';
import { LoadingService } from '../../api/loading.service';
import { Sucursales } from 'src/app/models/mdlSucursales';
import { DataService } from '../../api/data.service';
import { Categorias } from 'src/app/models/mdlCategorias';
import { CategoriasService } from '../../api/db/categorias.service';

@Component({
  selector: 'app-lista-sucursales-us',
  templateUrl: './lista-sucursales-us.page.html',
  styleUrls: ['./lista-sucursales-us.page.scss'],
})
export class ListaSucursalesUsPage implements OnInit {
  titulo = 'Sucursales';
  lisSucursal: Array<Sucursales> = [];
  ciudad: string;
  lstCategorias: Array<Categorias>= [];
  constructor(
    private sucursalService: SucursalService,
    private loadingService: LoadingService,
    private data: DataService,
    private categoriaService: CategoriasService
  ) {
    this.ciudad = data.get();
    console.log(this.ciudad);
  }

  ngOnInit() {
    this.loadingService.present();
    this.listarCategorias();
    this.sucursalService.listaSucursalesPorCiudad(this.ciudad)
    .subscribe(data => {
      this.loadingService.dismiss();
      this.lisSucursal = data;
    })
  }
  listarCategorias() {
    this.categoriaService.listaCategorias()
    .subscribe(data=> {
      for(let item of data) {
        item.checked= true;
        this.lstCategorias.push(item);
      }
    })
  }
  cambioCheck(categoria: Categorias) {
    console.log(categoria);
    
  }

}
