import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


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

  constructor(private snackBar:MatSnackBar, private router:Router, private http: HttpClient){

  }
  register() {
    this.http.post<any>('http://localhost:3000/createusers',{usuario: this.re_nombre_usuario,contrasena: this.r_password}).subscribe(data => {
      if(data.message!='undefined'){
        console.log(data.nombreusuario);
        this.snackBar.open('Registro con éxito!!!'+data.message,'',{duration:3000});
        this.router.navigate(['/appgym']);
      }else{
        this.snackBar.open('Ha colocado mal las credenciales','',{duration:1000})
      }
  });
  }
  login() {
   /* if(this.nombre_usuario=="admin" && this.password=="admin"){
        this.snackBar.open('Entró con éxito!!!','',{duration:3000});
        this.router.navigate(['/appgym']);
    }else{
      this.snackBar.open('Ha colocado mal las credenciales','',{duration:1000})
    }
    , where: { nombreusuario: nombre }
    */
    this.http.post<any>('http://localhost:3000/users',{nombre: this.nombre_usuario,contrasena: this.password}).subscribe(data => {
        if(data.nombreusuario!='undefined'){
          console.log(data);
          this.snackBar.open('Entró con éxito!!!'+data.nombreusuario,'',{duration:3000});
          this.router.navigate(['/appgym']);
        }else{
          this.snackBar.open('Ha colocado mal las credenciales','',{duration:1000})
        }
    });
  }
///users
}
