import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService, heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute, 
               private _heroesService:HeroesService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['termimo']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarheroes(params['termino']);
      console.log(this.heroes);
    });
  }

}
