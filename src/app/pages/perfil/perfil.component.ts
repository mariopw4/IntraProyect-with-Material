import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  form: FormGroup;

  constructor(public _us: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this._us.usuario;
    this.form = new FormGroup({
      nombre: new FormControl(this.usuario.nombre, Validators.required),
      email: new FormControl(this.usuario.email, [Validators.email, Validators.required])
    });
  }

  actualizarUsuario(){
    if(this.form.invalid){
      swal('Error', 'Rellena todos los campos correctamente', 'error');
      return;
    }

    this.usuario.nombre = this.form.value.nombre;
    this.usuario.email = this.form.value.email;
    this._us.actualizarUsuario(this.usuario._id, this.usuario).subscribe(resp => {
      console.log(resp);
    });
  }

}
