import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Pokemon } from '../../src/modelo/Pokemon';

@Injectable()
export class pokeApi {
  private baseURL: string = "http://pokeapi.co/api/v2/";
  pokemons$: Pokemon[];

  constructor(private http: Http) { }


  getPokemons(): Promise<Pokemon[]> {
    //PONER EN EL LIMIT 807 QUE ES LA LISTA ENTERA DE POKEMONS
    return this.http.get(`${this.baseURL}pokemon`+'?offset=0&limit=807')
      .toPromise()
      .then(response => {
        return response.json().results.map((pokemon) => Pokemon.parse(pokemon))
      })
      .catch(this.handleError)
  }

  getPokemonById(id: string): Promise<Pokemon> {
    return this.http.get(`${this.baseURL}pokemon/${id}`)
      .toPromise()
      .then(response => {

        return Pokemon.parse(response.json());
      })
      .catch(this.handleError)
  }

  getPokemonByName(name: string): Promise<Pokemon> {
    name = name.toLowerCase();
    return this.http.get(`${this.baseURL}pokemon/${name}`)
      .toPromise()
      .then(response => {
        console.log('json in by name search', response.json());
        return Pokemon.parse(response.json());
      })
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    // debugger;
    console.error('An error occurred:', error.statusText);
    return Promise.reject(error.statusText || error);
  }

}
