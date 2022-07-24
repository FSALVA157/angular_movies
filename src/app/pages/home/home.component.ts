import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/intefaces/now_playing_interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.peliculasService.getNowPlaying().subscribe((_peliculas) => {
      this.movies = _peliculas;
      
    })
  }

}
