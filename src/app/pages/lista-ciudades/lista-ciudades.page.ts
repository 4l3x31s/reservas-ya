import { Component, OnInit } from '@angular/core';
import { CiudadesService } from '../../api/db/ciudades.service';
import { Ciudades } from 'src/app/models/mdlCiudades';

@Component({
  selector: 'app-lista-ciudades',
  templateUrl: './lista-ciudades.page.html',
  styleUrls: ['./lista-ciudades.page.scss'],
})
export class ListaCiudadesPage implements OnInit {
  titulo = 'Ciudades';
  lstCiudades: Array<Ciudades> = [];
  constructor(
    public ciudadesService: CiudadesService,
    ) { }
  ngOnInit() {
  }
  listarCiudades() {
    this.ciudadesService.listaCiudades()
    .subscribe(data => {
      this.lstCiudades = data;
    });
  }

}
