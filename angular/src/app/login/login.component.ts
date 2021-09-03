import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  nombre_usuario:string;
  password:string;
  re_nombre_usuario:string;
  r_password:string;
  rc_password:string;

  constructor(private snackBar:MatSnackBar){

  }
  register() {

  }
  login() {
    if(this.nombre_usuario=="admin" && this.password=="admin"){
        this.snackBar.open('Entró con éxito :D','',{duration:1000})
    }else{
      this.snackBar.open('Pusiste mal las credenciales :v','',{duration:1000})
    }
  }

}
