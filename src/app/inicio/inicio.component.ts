import { Component, OnInit } from '@angular/core';
import { listaConsejos } from '../listaConsejos';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  title = 'app';
  musicaInicio = new Audio("assets\\Musica\\intromusica.mp3");
  startSonido = new Audio("assets\\Musica\\start.mp3");

  claselenta: string = 'entrarPaginaLenta';
  claserapida: string = 'entrarPaginaRapida';


  tipRandom:string ="Mesajes aleatorios"
  constructor(private router: Router) {}

  navigateToLogin() {

  }
  cargarConsejo(){
  //   this.listatoaguapa.push("caca")
  //   console.log(this.listatoaguapa[0])
    //var numero:number = Math.floor(Math.random()*(10-1+1)+1);console.log(numero);
    //setInterval(function(){console.log(this.listatoaguapa[0])}, 3000);
  }


  iniciarMusica(){
    this.musicaInicio.play();
    this.musicaInicio.volume=0.2;
  }
   start(){
    var timer = setInterval(()=>{this.router.navigateByUrl('/entrada');clearInterval(timer) }, 1500);
    this.claselenta = this.claserapida;
    this.musicaInicio.pause();
    this.startSonido.volume=0.2;
    this.startSonido.play();

  }

  ngOnInit(){

    this.iniciarMusica();
    this.cargarConsejo()

  }

}
