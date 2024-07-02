import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //Classe de uma biblioteca do JS (RxJS) para usar o paradigma funcional
//Observable é um design pattern que vigia alterações de um tipo especifico, quando ocorre essa alteração, o valor é utilizado. Similar a um canal, em que vc recebe video assim que ocorre novos uploads.
import { PokemonData} from '../models/pokemonData'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = "";
  private pokeData: any;
  constructor(private http: HttpClient) { 
    this.baseURL = environment.pokeAPI // importação das contantes globais do environment
   }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    this.pokeData = this.http.get<PokemonData>(`${this.baseURL}/${pokemonName}`);
    return this.pokeData;
  }
}
