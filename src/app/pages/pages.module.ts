import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouter } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MaterialComponentsModule } from '../material-components/material-components/material-components.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { PipesModule } from '../pipes/pipes.module';
import { PerfilComponent } from './perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../interceptors/token-interceptor.service';



@NgModule({
  declarations: [
    PagesComponent,
    UsuariosComponent,
    ProductosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PagesRouter,
    MaterialComponentsModule,
    RouterModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports:[
    PagesComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class PagesModule { }
