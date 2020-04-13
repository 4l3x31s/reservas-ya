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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
