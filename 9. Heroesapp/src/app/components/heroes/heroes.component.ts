import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent {

  heroes:any[] = [];
  loading:boolean = true;

  constructor( private _heroesService: HeroesService) { 
    this._heroesService.getHeroes().subscribe(data=>{
      console.log(data);
      this.heroes = data;
      this.loading = false;
    })
  }

  borrarHeroe( key$:string ){
    this._heroesService.borrarHeroe(key$)
      .subscribe(respuesta => {
        if(respuesta){
          console.log(respuesta); 
        }else{
          //todo bien
          delete this.heroes[key$];
        }
      })
  }
}
