import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  usuario: Usuario;

  constructor(public http: HttpClient) { }

  guardarStorage(token: string, usuario: Usuario){
    this.token = token;
    this.usuario = usuario;
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  login(usuario: Usuario){
    let url = URL_SERVICIO+'/login';
    return this.http.post(url, usuario).pipe(map((resp: any) => {
      this.guardarStorage(resp.token, resp.usuario);
      return true;
    }));
  }
}
