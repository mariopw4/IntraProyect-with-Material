import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'usuarios', component: UsuariosComponent},
            { path: 'productos', component: ProductosComponent},
            { path: '', pathMatch:'full', redirectTo: '/'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRouter {}
