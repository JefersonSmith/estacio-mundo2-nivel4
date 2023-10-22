// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component'; // Importe o LivroListaComponent (certifique-se do caminho correto)
import { LivroDadosComponent } from './livro-dados/livro-dados.component'; // Importe o LivroDadosComponent (certifique-se do caminho correto)

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
