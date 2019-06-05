import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { PokeInicioComponent } from './poke-inicio/poke-inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'entrada', component: PokeInicioComponent},
  { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
   CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
