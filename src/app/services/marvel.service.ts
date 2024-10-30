import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Hero } from '../models/hero.model';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';


const BASE_URL = environment.BASE_URL;
const API_KEY = environment.API_KEY
const HASH = environment.HASH

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private data:WritableSignal<Hero | undefined>  = signal(undefined);
 
  
  constructor(private http:HttpClient) {
  }
  
  setData(update: Hero) {
    this.data.set(update);
  }

  getData(){
    return this.data();
  }
   /* getCharacters(){
    return this.http.get(`${BASE_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}`);
   } */
   async getCharactersWithCapacitorHttp(){
    const options : HttpOptions = {
      url: `${BASE_URL}characters?ts=1&apikey=${API_KEY}&hash=${HASH}`,
      params: {}
    }
    return await CapacitorHttp.get(options);
   }

}
