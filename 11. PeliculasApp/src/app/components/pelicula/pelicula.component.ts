import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PeliculasService } from '../../services/peliculas.service'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresarA:string = "";

  constructor( public _pelisService:PeliculasService,
               public route:ActivatedRoute) { 
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];

      this._pelisService.getPelicula( parametros['id'])
          .subscribe( pelicula => this.pelicula = pelicula)
    })
}

  ngOnInit() {
  }



}
