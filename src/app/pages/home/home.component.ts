import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/intefaces/now_playing_interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  movies_slideshow: Movie[] = [];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos > max){
      this.peliculasService.getNowPlaying().subscribe((_peliculas) => {
        this.movies.push(..._peliculas);
        
      })
    }
  }

  constructor(
    private peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.peliculasService.getNowPlaying().subscribe((_peliculas) => {
      this.movies_slideshow = _peliculas;
      this.movies = _peliculas;
    })
  }

}
