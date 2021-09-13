import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';


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

  constructor(private snackBar:MatSnackBar, private router:Router){

  }
  register() {

  }
  login() {
    if(this.nombre_usuario=="admin" && this.password=="admin"){
        this.snackBar.open('Entró con éxito!!!','',{duration:3000});
        this.router.navigate(['/appgym']);
    }else{
      this.snackBar.open('Ha colocado mal las credenciales','',{duration:1000})
    }
  }

}
