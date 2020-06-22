import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: boolean;

  constructor(public _us: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      recuerdame: new FormControl(false)
    });

    if(localStorage.getItem('email')){
      this.form.setValue({
        email: localStorage.getItem('email'),
        password: '',
        recuerdame: true
      });
    }
  }

  validarForm(){
    if(this.form.invalid){
      Swal.fire('Problemas con el login', 'Los campos solicitados tienen datos inválidos', 'warning');
      return;
    }

    if(this.form.value.recuerdame === true){
      localStorage.setItem('email', this.form.value.email);
    }else{
      localStorage.removeItem('email');
    }

    let usuario = new Usuario('', this.form.value.password, this.form.value.email);
    this._us.login(usuario).subscribe(resp => {
      this.router.navigateByUrl('/');
    }, err => {
      this.error = true;
    });
  }

}
