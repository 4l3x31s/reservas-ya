import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../api/loading.service';
import { CategoriasService } from '../../api/db/categorias.service';
import { Categorias } from 'src/app/models/mdlCategorias';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.page.html',
  styleUrls: ['./lista-categorias.page.scss'],
})
export class ListaCategoriasPage implements OnInit {
  titulo = 'Categorias';
  lstCategorias: Array<Categorias> = [];
  constructor(
    public loadingService: LoadingService,
    public categoriaService: CategoriasService
    ) { }

  ngOnInit() {
    this.cargarCategorias();
  }

  cargarCategorias() {
    this.loadingService.present();
    this.categoriaService.listaCategorias()
    .subscribe(data => {
      this.loadingService.dismiss();
      this.lstCategorias = data;
    }, error => {
      this.loadingService.dismiss();
    });
  }

}
