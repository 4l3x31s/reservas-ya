import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/mdlCategorias';
import { CategoriasService } from '../../api/db/categorias.service';
import { LoadingService } from '../../api/loading.service';
import { AlertService } from '../../api/alert.service';
import { DataService } from '../../api/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lst-restaurant',
  templateUrl: './lst-restaurant.page.html',
  styleUrls: ['./lst-restaurant.page.scss'],
})
export class LstRestaurantPage implements OnInit {
  titulo= 'Restaurantes';
  public lstCategorias: Array<Categorias> = [];
  public categoriaSeleccionada: string;
  constructor(
    public categoriasService: CategoriasService,
    public loadingService: LoadingService,
    private alertService: AlertService,
    public navController: NavController,
    
    private dataService: DataService
  ) { }

  ngOnInit() {
    if(this.dataService) {
      this.loadingService.present();
      this.categoriasService.listaCategorias()
      .subscribe(data => {
        this.loadingService.dismiss();
        this.lstCategorias = data;
      }, err => {
        this.loadingService.dismiss();
        this.alertService.present('Error',  'Hubo un error al listar las categorias, disculpe las molestias.');
        this.navController.navigateBack(['home']);
      });
    }
  }
  filtrarRestaurantes() {

  }

}
