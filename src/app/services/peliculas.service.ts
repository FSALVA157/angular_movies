import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INowPlaying, Movie } from '../intefaces/now_playing_interface';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  base_url: string = environment.api_base_url;
  api_key: string = environment.api_key;
  language: string = "es-ES";
  page: number = 1;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  get parametros(){
    return {
      base_url: this.base_url,
      api_key: this.api_key,
      language: this.language,
      page: this.page
    }
  }


 getNowPlaying(): Observable<Movie[]>{  
  let url: string =  `${this.base_url}now_playing`;
  
  if(this.isLoading){
    //el of de rxjs devuelve un Observable de lo que yo especifique
    return of([]);
  }
  this.isLoading = true;
  console.log('REALIZANDO PETICION');
  return this.http.get<INowPlaying>(url, {params: this.parametros}).pipe(
    map(obj => {
      return obj.results.map(pelicula => {
        let obj_peli: Movie;
        obj_peli = pelicula;
        
        return obj_peli;
      });
    }),
    tap(()=>{
      this.page += 1;
      this.isLoading = false;
    })
  );

 }



}
