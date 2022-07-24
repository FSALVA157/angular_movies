import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/intefaces/now_playing_interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Input()
  peliculas: Movie[]=[];

  swiper: Swiper | undefined;

  constructor() { 
    
  }
  ngAfterViewInit(): void {
     this.swiper = new Swiper('.swiper', {
       direction: 'horizontal',
      loop: true,   
     
    });
     
  }
  

  ngOnInit(): void {
    
  }


  onSlideNext(){
    this.swiper?.slideNext();
  }

  onSlidePrev(){
    this.swiper?.slidePrev();
  }


}
