import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';

import { NgForm } from '@angular/forms';
import { Lmodelos } from '../modelos/lmodelos';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ServicioService ]
})
export class LoginComponent implements OnInit {
  private lmodelos: Lmodelos;
  constructor( ) {
    this.lmodelos = new Lmodelos;
  }
  ngOnInit() {
  }
  /** validateLogin() {
    if(this.lmodelos.usuario && this.lmodelos.contrase) {
      this.s.validateLogin(this.user).subscribe(result => {
      console.log('result is ', result);
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('enter user name and password');
    }
  }
  */

}
