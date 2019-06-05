import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import{Pokemon} from '../../modelo/Pokemon'
import { pokeApi } from '../pokeApi';
@Component({
  selector: 'app-poke-inicio',
  templateUrl: './poke-inicio.component.html',
  styleUrls: ['./poke-inicio.component.css']
})
export class PokeInicioComponent implements OnInit {


  pokemon: Pokemon;
  pokemonList: Pokemon[];
  errMsg: string;
  nombreBuscar: string;
  carga:boolean=false;

  constructor(private client: pokeApi) {}

  ngOnInit() {

  this.pokemonList=[];
  console.time("TIEMPO DE CARGA");
  //Hace la llamada al servicio que está en el constructor y meto el resultado en la lista
  this.client.getPokemons()
  .then(patata =>{patata.forEach(element => {



    this.pokemonList.push(element)


    ;});})
  .catch(err =>{this.errMsg = "MENSAJE DE ERROR: "+err });


  console.timeEnd("TIEMPO DE CARGA");

  }


}

