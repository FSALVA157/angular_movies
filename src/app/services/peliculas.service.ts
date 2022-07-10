import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  base_url: string = environment.api_base_url;
  api_key: string = environment.api_key;
  language: string = "es-ES";
  page: number = 1;

  constructor(
    private http: HttpClient
  ) { }


 getNowPlaying(){
  let url: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=6d6d52189580fcb80212d917146ea0fa&language=en-US&page=${page}";
  console.log(url);
  return this.http.get(url);

 }



}