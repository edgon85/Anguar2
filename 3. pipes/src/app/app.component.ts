import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'González';
  nombre2= 'edwin iSaac hernÁndez gONzález'

  arreglo = [1,2,3,4,5,6,7,8,9,0];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre:'logan',
    clave:'Wolverine',
    edad: '500',
    direccion:{
      calle:'primera',
      casa:'19'
    }
  };

  valorDePromesa = new Promise((resolve, reject) =>{
    setTimeout( ()=>resolve('llego la data'), 3500);
  })

  fecha = new Date();

  video = 'QrG5Q0nJa6A';
  
  activar:boolean = true;
}