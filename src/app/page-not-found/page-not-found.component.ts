import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  startSonido = new Audio("assets\\Musica\\puebliLavanda.mp3");

  ngOnInit() {
    this.startSonido.play();

    this.startSonido.volume=0.2;
  }

}
