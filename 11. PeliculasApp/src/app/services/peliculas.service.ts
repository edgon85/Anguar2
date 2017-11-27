import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http' 
import 'rxjs/Rx'

@Injectable()
export class PeliculasService {

  private apiKey:string = "1a874ef005de067ae1ee5fe75031c734";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor( private jsonp:Jsonp) {

   }

   getPopulares(){
     let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

     return this.jsonp.get( url )
                .map(res => res.json().results);
   }

   getPopularesKids(){
     let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`

     return this.jsonp.get(url)
                .map(res => res.json().results)
   }


   getCaltelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);

    let desdeStr = `${ desde.getFullYear() }-${desde.getMonth() + 1}-${desde.getDay()}`;
    let hastaStr = `${ hasta.getFullYear() }-${hasta.getMonth() + 1}-${hasta.getDay()}`;

     let url = `${ this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

     return this.jsonp.get(url).map(res => res.json().results);
   }

   buscarPelicula(texto:string){
     
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
            .map(res => {
              this.peliculas = res.json().results;    
              console.log(this.peliculas)
              return res.json().results
            });
   }

   getPelicula( id:string ){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
               .map(res => res.json())
  }
}
