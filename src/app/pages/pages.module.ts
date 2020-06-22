import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouter } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MaterialComponentsModule } from '../material-components/material-components/material-components.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    PagesComponent,
    UsuariosComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    PagesRouter,
    MaterialComponentsModule,
    RouterModule
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
