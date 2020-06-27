import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarService } from '../services/sidebar/sidebar.service';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router, ActivationEnd } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;

  usuario: Usuario = this._us.usuario;
  titulo: string;

  constructor(
    public _sbs: SidebarService, 
    public _us: UsuarioService,
    public router: Router
    ) {
      this.getDataRouter().subscribe((resp: any) => this.titulo = resp.titulo);
     }

  ngOnInit(): void {
    if(window.innerWidth > 576){
      setTimeout(()=>{
        this.drawer.toggle();
      },100);
    }
  }

  logout(){
    this.router.navigateByUrl('/login');
    this._us.logout();
  }

  getDataRouter(){
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
