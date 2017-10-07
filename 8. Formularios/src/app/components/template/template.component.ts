import { Component} from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
    .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
    }
    `
  ]
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [
    {
      codigo:"GUA",
      nombre:"Guatemala"
    },
    {
      codigo: "MX",
      nombre: "México"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ]

  sexos:string[] = ["Hombre","Mujer"];

  constructor() { }

  guardar(forma: NgForm){
    // console.log("Formulario enviado");
    console.log("ngForm",forma);
    console.log("Valor", forma.value);
  }

}
