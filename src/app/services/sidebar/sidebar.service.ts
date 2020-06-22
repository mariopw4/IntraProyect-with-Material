import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menus = [
    {
      nombre: 'Mantenimiento',
      icon: 'fa fa-tools',
      submenus: [
        { nombre: 'Usuarios', url: '/usuarios' },
        { nombre: 'Productos', url: '/productos'}
      ]
    }
  ]

  constructor() { }
}
