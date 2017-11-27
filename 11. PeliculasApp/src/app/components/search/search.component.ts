import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar:string = "";

  constructor( public _peliService:PeliculasService,
               public router:ActivatedRoute) {
                 
    this.router.params.subscribe( params => {
      console.log(params)
      if(params['text']){
        this.buscar = params['text'];
        this.buscarPelicula();
      }
    })

  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }

    this._peliService.buscarPelicula(this.buscar).subscribe();
  }

}
