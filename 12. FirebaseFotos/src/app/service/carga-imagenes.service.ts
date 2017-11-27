import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FileItem } from '../models/file-items'
import * as firebase from 'firebase';
import { storage } from 'firebase/app';

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES:string = 'img';

  constructor(public afd:AngularFireDatabase) { 
     
  }

  listaUltimasImagenes( numeroImagenes:number ) : FirebaseListObservable<any[]>{

    return this.afd.list(`/${this.CARPETA_IMAGENES}`, {
      query:{
        limitToLast: numeroImagenes
      }
    }
  )}

  cargarImagenesFirebase(archivos:FileItem[]){
      console.log(archivos)

      let storageRef = firebase.storage().ref(); 

      for(let item of archivos){

        item.stadoSubiendo = true; 

        let uploadTask:firebase.storage.UploadTask = 
                        storageRef.child(`${ this.CARPETA_IMAGENES}/${ item.nombreArchivo }`)
                        .put(item.archivo);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        //  ( snapshot ) => item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
         function(snapshot){ 
          item.progreso = ((snapshot as firebase.storage.UploadTaskSnapshot).bytesTransferred / (snapshot as firebase.storage.UploadTaskSnapshot).totalBytes) * 100
         },
          ( error ) => console.error('Error al subir', error),
          (  ) => {
            item.url = uploadTask.snapshot.downloadURL;
            item.stadoSubiendo = false;
            this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
          }
        )
      }
  }

  private guardarImagen( imagen:any){
    this.afd.list(`/${this.CARPETA_IMAGENES}`)
        .push(imagen); 
  }
}