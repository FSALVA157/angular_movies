import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/intefaces/now_playing_interface';


@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input()
  listado: Movie[]=[];

  constructor() { }

  ngOnInit(): void {
    
   
  }

}
