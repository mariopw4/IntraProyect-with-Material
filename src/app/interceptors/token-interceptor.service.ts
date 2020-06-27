import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public _us: UsuarioService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token': this._us.token
    });
    if(req.method === 'GET'){
      return next.handle(req);
    }

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone);
  }
}
