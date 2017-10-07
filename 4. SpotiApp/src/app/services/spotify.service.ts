import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda: string = "https://api.spotify.com/v1/search";
  urlArtista: string = "https://api.spotify.com/v1/artists";

  bearer = 'Bearer BQB5t8zftLV8gzMHahdvAmo5IRBEkeII7i1LTt9qxpMr30O9e3VJeuqxk5AM_uemhs-SAZudMS7gLajg1NxgXA';
          //Bearer BQCAa19ckIuSFWyKwL3tjdhfnZVLEDY6nAW5ucJGSzvcVzJhp9OQNAyqI6lCy8FEaCoIR_STUOqMj8x4qu_teg
  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization',this.bearer);
                                         
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers }).map(res => {
                        // console.log(res.json().artist.items);
                        this.artistas = res.json().artists.items;
                        console.log(this.artistas);
                        //return res.json().artists.items;
                    });
  }

  getArtista(id: string) {

    let headers = new Headers();
    headers.append('authorization', this.bearer);

    let query: string = `/${ id }`;
    let url: string  = this.urlArtista + query;

    return this.http.get(url, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getTopTrack(id: string) {

    let headers = new Headers();
    headers.append('authorization', this.bearer);

    let query: string = `/${id}/top-tracks?country=US`;
    let url: string = this.urlArtista + query;

    return this.http.get(url, { headers }).map(res => {
      console.log(res.json().tracks);
      return res.json().tracks;
    });
  }
}
