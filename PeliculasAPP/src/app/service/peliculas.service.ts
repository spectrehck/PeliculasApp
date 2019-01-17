/* import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Jsonp} from '@angular/http';

@Injectable()

export class PeliculasService {

private apikey = '<b3ab1b9a05c43d91d5b95c58693e6f08>';
private urlMoviedb = 'https://api.themoviedb.org/3/';

  constructor( private  jsonp: Jsonp) {   }
  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

         return this.jsonp.get( url)
         .pipe(map( res => res.json()));
  }

  buscarPelicula( texto: string ) {

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .pipe(map( res => res.json()));
  }

}


 */