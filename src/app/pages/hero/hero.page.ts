import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelService } from 'src/app/services/marvel.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage {
  
  character:Hero;
  constructor(private marvelApi:MarvelService) { 
    this.character = this.marvelApi.getData() as Hero;
  }

}
