import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PokeInicioComponent } from './poke-inicio/poke-inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { pokeApi } from './pokeApi';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    PokeInicioComponent,
    PageNotFoundComponent,
    InicioComponent,
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [pokeApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
