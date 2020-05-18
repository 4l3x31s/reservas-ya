import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'registro-empresa',
    loadChildren: () => import('./pages/registro-empresa/registro-empresa.module').then( m => m.RegistroEmpresaPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./pages/comun/mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'registro-sucursal',
    loadChildren: () => import('./pages/registro-sucursal/registro-sucursal.module').then( m => m.RegistroSucursalPageModule)
  },
  {
    path: 'registro-productos',
    loadChildren: () => import('./pages/registro-productos/registro-productos.module').then( m => m.RegistroProductosPageModule)
  },
  {
    path: 'lis-productos',
    loadChildren: () => import('./pages/lis-productos/lis-productos.module').then( m => m.LisProductosPageModule)
  },
  {
    path: 'lis-reservas',
    loadChildren: () => import('./pages/lis-reservas/lis-reservas.module').then( m => m.LisReservasPageModule)
  },
  {
    path: 'lis-reservas-solicitadas',
    loadChildren: () => import('./pages/lis-reservas-solicitadas/lis-reservas-solicitadas.module').then( m => m.LisReservasSolicitadasPageModule)
  },
  {
    path: 'confirmar-reserva',
    loadChildren: () => import('./pages/confirmar-reserva/confirmar-reserva.module').then( m => m.ConfirmarReservaPageModule)
  },
  {
    path: 'registrar-categoria',
    loadChildren: () => import('./pages/registrar-categoria/registrar-categoria.module').then( m => m.RegistrarCategoriaPageModule)
  },
  {
    path: 'registrar-ciudad',
    loadChildren: () => import('./pages/registrar-ciudad/registrar-ciudad.module').then( m => m.RegistrarCiudadPageModule)
  },
  {
    path: 'lista-categorias',
    loadChildren: () => import('./pages/lista-categorias/lista-categorias.module').then( m => m.ListaCategoriasPageModule)
  },
  {
    path: 'lista-ciudades',
    loadChildren: () => import('./pages/lista-ciudades/lista-ciudades.module').then( m => m.ListaCiudadesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lst-restaurant',
    loadChildren: () => import('./pages/lst-restaurant/lst-restaurant.module').then( m => m.LstRestaurantPageModule)
  },
  {
    path: 'lis-empresa',
    loadChildren: () => import('./pages/lis-empresa/lis-empresa.module').then( m => m.LisEmpresaPageModule)
  },
  {
    path: 'lis-sucursales',
    loadChildren: () => import('./pages/lis-sucursales/lis-sucursales.module').then( m => m.LisSucursalesPageModule)
  },
  {
    path: 'lista-sucursales-us',
    loadChildren: () => import('./pages/lista-sucursales-us/lista-sucursales-us.module').then( m => m.ListaSucursalesUsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
