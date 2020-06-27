import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = '0';
  usuario: Usuario;

  constructor(public http: HttpClient) { 
    this.cargarStorage();
  }

  guardarStorage(token: string, usuario: Usuario){
    this.token = token;
    this.usuario = usuario;
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
  }

  isLogged(){
    if(this.token.length > 3){
      return true;
    }else{
      return false;
    }
  }

  login(usuario: Usuario){
    let url = URL_SERVICIO+'/login';
    return this.http.post(url, usuario).pipe(map((resp: any) => {
      this.guardarStorage(resp.token, resp.usuario);
      return true;
    }));
  }

  logout(){
    this.token = '0';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  actualizarUsuario(id: string, usuario: Usuario){
    let url = URL_SERVICIO+'/usuario/'+id;
    return this.http.put(url, usuario).pipe(map( (resp: any) => {
      this.usuario = resp.usuario;
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      return true;
    }));
  }
}
