import { Component, OnInit } from '@angular/core';
import { HeroesService, heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:heroe[] = [];

  constructor( private _serviceHeros:HeroesService,
               private router:Router) {
    //console.log('Constructor');
   }

  ngOnInit() {
    this.heroes = this._serviceHeros.getHeroes();
    //console.log(this.heroes);
  }

  // click para ver a un heroe
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
