import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-items'
import { CargaImagenesService } from '../../service/carga-imagenes.service'

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
})
export class CargaComponent {

  estaSobreDropZone:boolean = false;
  permiteCargar:boolean = true;
  archivos:FileItem[] = [];


  constructor( public _cargaImagenes:CargaImagenesService ) {
    
   }

   archivoSobreDropZone( evento:boolean){
      this.estaSobreDropZone = evento;
   }

   cargaImagenesFirebase(){
     this.permiteCargar = false;
     this._cargaImagenes.cargarImagenesFirebase(this.archivos);
   }


   limpiarArchivos(){
     this.archivos = [];
     this.permiteCargar = true;
   }

}
