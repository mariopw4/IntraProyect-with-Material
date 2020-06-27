import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginGuard } from '../services/guards/login.guard';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [LoginGuard],
        data: {titulo: 'Inicio'},
        children: [
            { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuarios'}},
            { path: 'productos', component: ProductosComponent, data: {titulo: 'Mantenimiento de productos'}},
            { path: 'perfil', component: PerfilComponent, data: {titulo: 'Editar perfil'}},
            { path: '', pathMatch:'full', redirectTo: '/'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRouter {}
