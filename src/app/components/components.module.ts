import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { BarRatingModule } from "ngx-bar-rating";
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [  
    NavbarComponent, SlideShowComponent, PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BarRatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent
  ]
})
export class ComponentsModule { }
