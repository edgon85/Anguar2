import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesKids:any;

  constructor( public _pelisService:PeliculasService) {
    
    this._pelisService.getCaltelera()
      .subscribe(data => this.cartelera = data)

    this._pelisService.getPopulares()
      .subscribe(data => this.populares = data)

    this._pelisService.getPopularesKids()
      .subscribe(data => this.popularesKids = data)
   }

  ngOnInit() {
  }

}
