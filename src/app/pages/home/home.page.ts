import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  characters:WritableSignal<Hero[]> = signal([]);
  character:WritableSignal<Hero | undefined> = signal(undefined);

  constructor(private marvelApi:MarvelService, private nav:Router, private spinner: NgxSpinnerService) {
    
  }
  ngOnInit(): void {
    this.getAllCharacters();
  }
  async getAllCharacters(){
    this.spinner.show();
    this.marvelApi.getCharacters().subscribe({
      next: (characters:any)=>{
        this.characters.set(characters.data.results as Hero[]);
        this.spinner.hide();
      },
      error: (e)=>{
        this.spinner.hide();
        console.log(e)
      },
      complete: ()=>{
        console.log('AllCharacters');
      },
    });
  }
  
  getCharDetails(id:number){
    const heroes = this.characters();
    const index = heroes.findIndex((hero) => hero.id === id );
    this.character.set(heroes[index]);
    this.marvelApi.setData(this.character()as Hero);
    this.nav.navigate([`hero`]).then();
  }
 
}